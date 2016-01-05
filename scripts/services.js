/**
 * Created by sfrederiksen on 1/5/2016.
 */
(function(){
    'use strict';
    angular.module("app.services",[])
        .factory('Partials',['$http', function($http){
            return{
                'get': function(url, callback){
                    console.log('Partials.get called');
                    var reg = {
                        method: 'GET',
                        url:url,
                        cache:true
                    };
                    $http(reg)
                        .success(function(d){
                            callback(d);
                        }).error(function(d){
                        console.log('ERROR GETTING ', url, d);
                    })
                    ;
                }
            };
        }])
    ;
}());
