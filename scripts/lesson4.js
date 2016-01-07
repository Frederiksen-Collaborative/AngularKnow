/**
 * Created by sfrederiksen on 1/4/2016.
 *
 * Up To Lesson 14 about halfway through
 */
(function(){
    'use strict';

    //begin module
    angular.module("app.lesson4",[])
        .controller("lesson4Controller",['$scope','$log', '$location','nameService', function($scope, $log, $location, nameService){

            $scope.name = nameService.author;

            $scope.$watch('name', function(){
                nameService.author = $scope.name;
            });

        }])
    ;
}());