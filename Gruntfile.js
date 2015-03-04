/* jshint node:true */
module.exports = function( grunt ){
    'use strict';

    grunt.initConfig({
        // setting folder templates
        dirs: {
            css: 'static/dist/css',
            scss: 'static/scss'
        },

        sass: {
          dist: {
            options: {
              outputStyle: 'compressed'
            },
            files: {
              '<%= dirs.css %>/app.css': '<%= dirs.scss %>/app.scss'
            }
          }
        },

        // Watch changes for assets
        watch: {
            scss: {
                files: [
                    '<%= dirs.scss %>/*.scss',
                ],
                tasks: ['sass'],
            }
        }
    });

    // Load NPM tasks to be used here
    grunt.loadNpmTasks( 'grunt-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // Register tasks
    grunt.registerTask( 'default', [
        'sass'
    ]);
};
