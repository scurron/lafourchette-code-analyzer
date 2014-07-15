'use strict';

module.exports = function(grunt) {
  // php-cs-fixer
  var enableDryRun = grunt.option('dry-run') || false;
  var showDiff = grunt.option('show-diff') || false;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /** php-cs-fixer
     *
     * Default options:
     * bin: 'php-cs-fixer',
     * level: null,
     * fixers: null,
     * dryRun: false,
     * diff: false,
     * verbose: false,
     * quiet: false,
     * ignoreExitCode: false,
     * maxBuffer: 200*1024
     *
     * @see https://github.com/fabpot/PHP-CS-Fixer for fixer arguments
     */
    phpcsfixer: {
      options: {
        bin: 'bin/php-cs-fixer',
        verbose: true,
        dryRun: enableDryRun,
        ignoreExitCode: false,
        level: 'psr2',
        diff: showDiff,
        //fixers: ['linefeed', 'short_tag', 'indentation', 'trailing_spaces', 'visibility'],
        standard: 'sf23'
      },
      src: {
        dir: 'src'
      }
    },

    /**
     * php-lint
     */
    phplint: {
      options: {
        swapPath: "./cache/phplint"
      },
      good: ['src/**/*-good.php'],
      bad: ['src/**/*-bad.php']
    },

   /**
    * phpmd
    */
   phpmd: {
     application: {
       dir: 'src'
     },
     options: {
       bin: 'bin/phpmd',
       reportFormat: 'text',
       suffixes: '/**/*.php',
       exclude: 'app,vendor', 
       rulesets: 'codesize,unusedcode,naming',
       maxBuffer: 200*1024
     }
   }
 });

  grunt.loadNpmTasks('grunt-php-cs-fixer');
  grunt.loadNpmTasks('grunt-phplint');
  grunt.loadNpmTasks('grunt-phpmd');
}
