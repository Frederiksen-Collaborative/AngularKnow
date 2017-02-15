/**
 * Author: Steven Frederiksen
 * Date: 02/14/2017 
 * Purpose: Component file for the Angular-quickstart tutorial.
 *
 * Last modified: 02/14/2017 07:39:36 PM (EST)
 */

(function(app){
	app.AppComponent = 
		ng.core.Component({
			selector:'my-app',
			template:'<h1>Hello Test Code!!</h1>'
		})
		.Class({
			constructor: function(){}
		});
})(window.app || (window.app = {}));
