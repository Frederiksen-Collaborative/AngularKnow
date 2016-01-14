/**
 * Created by sfrederiksen on 1/4/2016.
 */
(function(){
    'use strict';
    angular.module("app", ['ngMessages','ngResource','ngStorage','ngRoute','app.MainModule','app.services', 'app.lesson1', 'app.lesson2'
    ,'app.storageTest','app.lesson3','app.directives','app.lesson4'])
        //now for the config
        .config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/', {})
                .when('/lessons/lesson1', {
                    templateUrl: 'partials/lesson1.htm',
                    controller: 'lesson1Controller'
                })
                .when('/lessons/lesson2', {
                    templateUrl: 'partials/lesson2.htm',
                    controller: 'lesson2Controller'
                })
                .when('/lessons/lesson3', {
                    templateUrl: 'partials/lesson3.htm',
                    controller: 'lesson3Controller'
                })
                .when('/lessons/lesson4', {
                    templateUrl: 'partials/lesson4.htm',
                    controller: 'lesson4Controller'
                })
                .when('/misc/storage',{
                    templateUrl: 'partials/storage_test_partial.htm',
                    controller: 'storageController'
                })
                .otherwise({redirectTo: '/'})
            ;
        }])
    ;
}());
