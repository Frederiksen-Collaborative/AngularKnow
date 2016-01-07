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
    angular.module("app.lesson1",[])
        .controller("lesson1Controller",['$scope','$log', '$filter','$timeout', function($scope, $log, $filter,$timeout){

            $scope.name = "Steven";
            $scope.formattedName = $filter('uppercase')($scope.name);

            $scope.formatName = function(){
                $scope.formattedName = $filter('uppercase')($scope.name);
            };

            $log.info($scope.formattedName);

            $timeout(function(){
                $scope.name = "Jennifer";
                $timeout($scope.formatName, 1000);
            },3000);
        }])
    ;
}());