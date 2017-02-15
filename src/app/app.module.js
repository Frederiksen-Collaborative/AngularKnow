/**
 * Author: Steven Frederiksen
 * File: app.module.js 
 * Date: 02/14/2017
 * Purpose: Modules file for the Angular-quickstart tutorial.
 *
 * Last modified: 02/14/2017 07:39:51 PM (EST)
 */
(function(app){
	app.AppModule = 
		ng.core.NgModule({
			imports: [ng.platformBrowser.BrowserModule],
			declarations: [app.AppComponent],
			bootstrap: [app.AppComponent]
	})
	.Class({
		constructor: function(){}
	});
})(window.app || (window.app = {}));
