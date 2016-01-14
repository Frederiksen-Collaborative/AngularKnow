'use strict';

var path = require('path');

module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Configure Grunt
    grunt.initConfig({

        // grunt-watch will monitor the projects files
        watch: {
            options:{
                livereload:3001
            },
            files: ['src/index.html','src/scripts/**/*.js','src/partials/**/*.html','src/partials/**/*.htm','src/styles/**/*.css']
        },
        express:{
            dev:{
                options:{
                    bases:[path.resolve(__dirname,"./src")],
                    port:3000,
                    livereload:3001
                }
            },
            prod:{
                options:{
                    bases:[path.resolve(__dirname,"./build")],
                    port:3002
                }
            }
        },
        open:{
            dev:{
                path:"http://localhost:3000/index.html"
            },
            prod:{
                path:"http://localhost:3002/index.html"
            }
        },
        paths:{
            foo: [1,2,3],
            path1:path.resolve(__dirname,"./src"),
            path2:path.resolve(".")
        },
        uglify:{
            target:{
                files:[
                    {//move source scripts to build dest and minify
                        expand:true,
                        cwd:'src/scripts',
                        src:'**/*.js',
                        dest:'build/scripts',
                        mangle:true
                    }
                ]
            },
            prod:{
                files:[{ //minify the resources
                    expand:true,
                    cwd:'build/res',
                    src:'**/*.js',
                    dest:'build/res'
                }]            }
        },
        cssmin:{
           target:{
               files:[{
                   expand:true,
                   cwd:'src/styles',
                   src:['*.css', '!*.min.css'],
                   dest:'build/styles'
               }]
           },
            bootstrap:{
                files:[{
                    expand:true,
                    cwd:'build/res/bootstrap/css',
                    src:['*.css', '!*.min.css'],
                    dest:'build/res/bootstrap/css'
                }]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true
                },
                expand:true,
                cwd:'src',
                src:['**/*.htm*'],
                dest:'build/'
            }
        },
        copy:{
          main:{
              expand:true,
              cwd:'src/images',
              src:['*'],
              dest:'build/images/',
              flatten:true
          }
        },
        bower:{
            prod:{
                options:{
                    targetDir:'./build/res/bower_components',
                    layout:'byComponent'
                }
            },
            dev:{
                options:{
                    targetDir:'./src/res/bower_components',
                    layout:'byComponent'
                }
            }
        }
    });
    grunt.registerTask('server:dev',['express:dev','open:dev','watch']);
    grunt.registerTask('server:prod',['express:prod','express-keepalive','open:prod']);
    grunt.registerMultiTask('paths','log some paths', function(){
        grunt.log.writeln(this.target + ": "+ this.data);
    });
    grunt.registerTask('makeDev','Builds the dev environment',['bower:dev','server:dev']);
    grunt.registerTask('makeProd','Builds the prod environment',['bower:prod','uglify','cssmin','htmlmin','copy']);
    grunt.registerTask('veiwBuild',['makeProd', 'server:prod']);
};