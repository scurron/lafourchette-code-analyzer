'use strict';

module.exports = function(grunt) {
  // php-cs-fixer
  var enableDryRun = grunt.option('dry-run') || false;
  var showDiff = grunt.option('show-diff') || false;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* php-cs-fixer
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
     */
    phpcsfixer: {
      options: {
        bin: 'bin/php-cs-fixer',
          verbose: true,
          dryRun: enableDryRun,
          ignoreExitCode: false,
          level: 'psr2',
          diff: showDiff,
          standard: 'Symfony2'
      },
      src: {
        dir: 'src'
      }
    }
  });


  grunt.loadNpmTasks('grunt-php-cs-fixer');
}