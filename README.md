##**This is my learning angular project.**
<hr>

###*Steps for setting up*
[] Download the source from github: https://github.com/studeo14/AngularKnow <br>
[] Download the dependacies using bower (must have bower installed) `bower install` <br>
[] Download the npm dependacies (for grunt usage): `npm install` <br>
[] Run the grunt tasks`grunt makeDev`<br>
    -This will create a minimal Bower dependancy tree in the src/res folder.
    -Will create a *livereload* server for testing.
[] For production/minification run the `grunt makeProd` command <br>
    -Will minify and move all appropriate files to a new build directory in the project root.
    -Can run a seperate server with `grunt server:prod` or just do both tasks in one with `grunt viewBuild`.

