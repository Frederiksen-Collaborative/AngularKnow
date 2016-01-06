/**
 * Created by sfrederiksen on 1/4/2016.
 *
 * Up To Lesson 14 about halfway through
 */
(function(){
    'use strict';
    /*
    Example from lesson 13
     *
    var f = function(i,o){};
    console.log(angular.injector().annotate(f)); */

    //begin module
    angular.module("app.lesson3",[])
        .controller("lesson3Controller",['$scope','$filter','$log', function($scope,$filter,$log){

            $scope.handle = '';

            $scope.toLower = function(){
                return $filter('lowercase')($scope.handle);
            };

            $scope.$watch('handle', function(n,o){
                $log.info("handle changed:\n"+o+" -> "+n);
            });
        }])
    ;
}());