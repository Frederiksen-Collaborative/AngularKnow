/**
 * Created by sfrederiksen on 1/6/2016.
 */
(function(){
    'use strict';
    angular.module("app.directives",[])
        .directive("searchResult", function(){
            return {
                restrict: 'EA',
                templateUrl: 'partials/search_result_partial.html',
                replace: true,
                scope:{
                    personName:"@",
                    personAddress:"@",
                    webLink:"@",
                    toDo:"&",
                    formatter:"&"
                }
            };
        })
        .controller("searchResultController",['$scope', '$location', function($scope,$location){



        }])
    ;
}());