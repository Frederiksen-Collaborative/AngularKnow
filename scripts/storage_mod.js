/**
 * Created by sfrederiksen on 1/6/2016.
 */
(function(){
    'use strict';
    angular.module("app.storageTest",[])
        .controller("storageController",['$scope','$localStorage',function($scope,$localStorage){
            $scope.$storage = $localStorage.$default({
                counter:0
            });
            $scope.input = 0;

            $scope.reset = function() {
                $scope.$storage.$reset({
                    counter:0
                });
            };
        }])
    ;
}());