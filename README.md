##**This is my learning angular project.**
<hr>

###*Steps for setting up*
1. Download the source from github: https://github.com/studeo14/AngularKnow <br>
2. Make Sure that you have Node.js installed (for npm) <br>
3. Download the npm dependacies (for grunt usage): `npm install` <br>
4. Make sure that bower is installed. Use `npm install -g bower` <br>
5. Copy the 'bower.json.template' file to a 'bower.json' file <br>
  -This is due to a bower bug. The 'bower.json' file will be populated with dependancies
  that grunt will use to build the project. However, in order to install them, they must not be present
  in the 'bower.json' file.
6. Run the setup script (or peek inside and run each command therein) of 'setup.sh' <br>
  -Now All the bower dependancies should be installed <br>
7. Run the grunt tasks`grunt makeDev`<br>
  -This will create a minimal Bower dependancy tree in the src/res folder. <br>
  -Will create a *livereload* server for testing. <br>
8. For production/minification run the `grunt makeProd` command <br>
  -Will minify and move all appropriate files to a new build directory in the project root. <br>
  -Can run a seperate server with `grunt server:prod` or just do both tasks in one with `grunt veiwBuild`. <br>

