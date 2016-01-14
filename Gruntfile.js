'use strict';

var path = require('path');

module.exports = function(grunt) {
    // Configure Grunt
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        // grunt-watch will monitor the projects files
        watch: {
            options:{livereload:3001},
            files: ['src/index.html','src/scripts/**/*.js','src/partials/**/*.html','src/partials/**/*.htm','src/styles/**/*.css'],
            tasks:[]

        },
        express:{
            all:{
                options:{
                    port:3000,
                    hostname:'localhost',
                    bases:['./src'],
                    livereload:3001
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('server',['express','watch']);
};