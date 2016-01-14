/**
 * Created by sfrederiksen on 1/4/2016.
 */
(function(){
    'use strict';

    angular.module('app.MainModule',[])
        .controller('partialsController', ['$scope','$compile', 'Partials','$location', function($scope, $compile, Partials, $location){
            $scope.lessons = [
                {
                    name: 'Lesson 1',
                    link: 'lesson1'
                },
                {
                    name: 'Lesson 2',
                    link: 'lesson2'
                },
                {
                    name: 'Lesson 3',
                    link: 'lesson3'
                },
                {
                    name: 'Lesson 4',
                    link: 'lesson4'
                }
            ];

            $scope.miscs = [
                {
                    name: 'Storage Test',
                    link: 'storage'
                }
            ];

            $scope.goHome = function(){
                $location.path('/');
            };

            $scope.loadPartial = function(id){
                Partials.get('partials/'+id+'.htm', function(d){
                    console.log('callback called');
                    //remove current content
                    angular.element(document.querySelector('#content')).html(' ');
                    //compile and link new content
                    var cont = $compile(d)($scope);
                    //insert new content
                    angular.element(document.querySelector('#content')).append(cont);
                });
            };
        }])
    ;
}());
