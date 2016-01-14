##**This is my learning angular project.**
<hr>

###*Steps for setting up*
1. Download the source from github: https://github.com/studeo14/AngularKnow <br>
2. Download the dependacies using bower (must have bower installed) `bower install` <br>
3. Download the npm dependacies (for grunt usage): `npm install` <br>
4. Run the grunt tasks`grunt makeDev`<br>
  -This will create a minimal Bower dependancy tree in the src/res folder. <br>
  -Will create a *livereload* server for testing. <br>
5. For production/minification run the `grunt makeProd` command <br>
  -Will minify and move all appropriate files to a new build directory in the project root. <br>
  -Can run a seperate server with `grunt server:prod` or just do both tasks in one with `grunt veiwBuild`. <br>

