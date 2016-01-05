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
        .controller("lesson1Controller",['$scope','$log', '$filter', function($scope, $log, $filter){
            $log.info("this is some info");
            $log.debug("this is some info");
            $log.error("this is some info");
            $log.warn("this is some info");
            $log.log("this is some info");

            $scope.name = "Steven";
            $scope.formattedName = $filter('uppercase')($scope.name);

            $log.info($scope.formattedName);
        }])
    ;
}());