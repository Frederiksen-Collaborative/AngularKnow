/**
 * Author: Steven Frederiksen
 * File: main.js 
 * Date: 02/14/2017
 * Purpose: Top-level file for bootstrapping.
 *
 * Last modified: 02/14/2017 06:51:26 PM (EST)
 */
(function(app){
	document.addEventListener('DOMContentLoaded',function(){
		ng.platformBrowserDynamic
		  .platformBrowserDynamic()
		  .bootstrapModule(app.AppModule);
	});
})(window.app || (window.app = {}));
