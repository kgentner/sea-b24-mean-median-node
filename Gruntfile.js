'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    jshint: {
      src: ['server.js', 'app/js/**/*.js', 'Gruntfile.js', 'test/client/*.js',
      'test/server/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['server.js', 'app/js/**/*.js', 'Gruntfile.js',  'test/client/*.js',
      'test/server/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/server/*.js']
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/client_bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client/**/*test.js'],
        dest:'test/test_bundle.js',
        options:{
          transform: ['debowerify']
        }
      }
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha',
    'browserify:test']);
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('default', ['build:dev', 'test']);
};
