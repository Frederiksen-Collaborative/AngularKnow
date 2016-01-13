/**
 * Created by sfrederiksen on 1/4/2016.
 */
(function(){
    'use strict';

    //begin module
    angular.module("app.lesson2",[])
        .controller("lesson2Controller",['$scope','$log','$resource','ExampleJSON', function($scope, $log, $resource, ExampleJSON){
            $log.info($resource);
            ExampleJSON.get('',function(d){
                $log.info(d);
            }, function(){
                $log.error("ERROR GETTING EXAMPLE JSON");
            });
        }])
    ;
}());