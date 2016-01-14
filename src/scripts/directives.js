/**
 * Created by sfrederiksen on 1/6/2016.
 */
(function(){
    'use strict';
    angular.module("app.directives",[])
        .directive("searchResult", function(){
            return {
                restrict: 'EA',
                templateUrl: 'src/partials/search_result_partial.html',
                replace: true
            };
        })
    ;
}());