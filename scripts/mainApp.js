/**
 * Created by sfrederiksen on 1/4/2016.
 */

'use strict';

angular.module('angKnoApp.MainModule',[])
    .controller('partialsController', ['$scope','$compile', 'Partials', function($scope, $compile, Partials){
        $scope.partials = [
            {
                name: 'Lesson 1',
                link: 'lesson_1'
            }
        ];

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