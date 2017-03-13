/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myvar = angular.module("myapp",[]);
myvar.controller("zippyapp",function($scope){
    $scope.contentmessage="";
    $scope.savetomessage = function(message){
        $scope.contentmessage=message;
    };
});
myvar.directive("zippy",function(){
    return{
        restrict:"A",
        transclude:"true",
        scope:{
            title:"=",
            content:"@",
            savecontent:"&"
        },
        template:'<div ng-click="loadcontent()"><h3>{{title}}</h3><div class="panel" ng-transclude ng-show="setContentVisible">' +
        '</div><input type="button" ng-click="savecontent({message:content})" value="Save" class="btn btn-default">' +
        ' </div>',
        link:function(scope,element,attrs){
            scope.setContentVisible = true;
            scope.loadcontent = function(){
                scope.setContentVisible = !scope.setContentVisible;
            };
        }
    }
});