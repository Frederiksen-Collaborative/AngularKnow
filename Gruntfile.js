(function(){
    'use strict';

    var path = require('path');

    module.exports = function(grunt) {
        //load external tasks from NPM
        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
        // Configure Grunt
        grunt.initConfig({

            // grunt-watch will monitor the projects files and reload the new versions onto the server
            watch: {
                options:{
                    livereload:3001
                },
                files: ['src/index.html','src/scripts/**/*.js','src/partials/**/*.html','src/partials/**/*.htm','src/styles/**/*.css']
            },
            //Express server configuration
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
            //Task to automatically open up the browser to the server's page
            open:{
                dev:{
                    path:"http://localhost:3000/index.html"
                },
                prod:{
                    path:"http://localhost:3002/index.html"
                }
            },
            //Utility task used for production
            //minifies the javascript in the build resources and the scripts
            uglify:{
                target:{
                    files:[
                        {//move source scripts to build dest and minify
                            expand:true,
                            cwd:'src/scripts',
                            src:'**/*.js',
                            dest:'build/scripts',
                            mangle:true,
                            compress:true,
                            unsafe:true
                        }
                    ]
                },
                prod:{
                    files:[{ //minify the resources
                        expand:true,
                        cwd:'build/res',
                        src:'**/*.js',
                        dest:'build/res',
                        mangle:true,
                        compress:true
                    }]
                }
            },
            //minifies css
            cssmin:{
                target:{
                    files:[{
                        expand:true,
                        cwd:'src/styles',
                        src:['*.css', '!*.min.css'],
                        dest:'build/styles'
                    }]
                },//boostrap is finicky, so it needs it's own special config
                bootstrap:{
                    files:[{
                        expand:true,
                        cwd:'build/res/bootstrap/css',
                        src:['*.css', '!*.min.css'],
                        dest:'build/res/bootstrap/css'
                    }]
                }
            },
            //minify the html of the project
            htmlmin:{
                dist:{
                    options:{
                        removeComments:true,
                        collapseWhitespace:true
                    },
                    expand:true,
                    cwd:'src',
                    src:['**/*.htm*'],//both .htm and .html
                    dest:'build/'
                }
            },
            //copy over the images
            copy:{
                main:{
                    expand:true,
                    cwd:'src/images',
                    src:['*'],
                    dest:'build/images/',
                    flatten:true
                }
            },
            //support for importing minimal dependancies from bower
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
        //register custom tasks
        //server tasks
        grunt.registerTask('server:dev',['express:dev','open:dev','watch']);
        grunt.registerTask('server:prod',['express:prod','open:prod','express-keepalive']);
        //dependacy and minification tasks
        grunt.registerTask('makeDev','Builds the dev environment',['bower:dev','server:dev']);
        grunt.registerTask('makeProd','Builds the prod environment',['bower:prod','uglify','cssmin','htmlmin','copy']);
        //combined tasks
        grunt.registerTask('veiwBuild','Alias for the "makeProd" and "server:prod" tasks.',['makeProd', 'server:prod']);
    };
}());

