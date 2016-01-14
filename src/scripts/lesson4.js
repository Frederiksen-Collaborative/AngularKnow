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

            $scope.person = [
                {
                    name:'Steven Frederiksen',
                    address:"Some Street, FF, USA",
                    link:"/lessons/lesson1",
                    func:function(){
                        console.log('Tab1');
                    },
                    form:function(a){
                        return a+'!';
                    }
                },
                {
                    name:'Steven Frederiksen',
                    address:"Some Street, FF, USA",
                    link:"/lessons/lesson2",
                    func:function(){
                        console.log('Tab2');
                    },
                    form:function(a){
                        return a+'!';
                    }
                },
                {
                    name:'Steven Frederiksen',
                    address:"Some Street, FF, USA",
                    link:"/lessons/lesson3",
                    func:function(){
                        console.log('Tab3');
                    },
                    form:function(a){
                        return a+'!';
                    }
                },
                {
                    name:'Steven Freddy',
                    address:"Some Street, FF, USA",
                    link:"/lessons/lesson4",
                    func:function(){
                        console.log('Tab4');
                    },
                    form:function(a){
                        return a+'!';
                    }
                }
            ];

            $scope.$watch('name', function(){
                nameService.author = $scope.name;
            });

        }])
    ;
}());