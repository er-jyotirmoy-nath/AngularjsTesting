/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myvar = angular.module("myapp",[]);
myvar.directive("superhero",function(){
   return{
       restrict:"E",
       scope:{},
       controller: function($scope){
        $scope.attributes = [];

        this.addSpeed = function(){
          $scope.attributes.push("Speed");
        };


        this.addPower = function(){
          $scope.attributes.push("Power");
        };


        this.addFlight = function(){
          $scope.attributes.push("Flight");
        };
       },
       link:function(scope,element,attrs){
         element.addClass("row");
           element.bind("mouseenter",function(){
               console.log(scope.attributes);
           });
       }
   }
});

myvar.directive("speed",function(){
    return{
        require:"superhero",
        link: function(scope,element,attrs,superctrl){
            superctrl.addSpeed();
        }
    }
});

myvar.directive("power",function(){
    return{
        require:"superhero",
        link: function(scope,element,attrs,superctrl){
            superctrl.addPower();
        }
    }
});

myvar.directive("flight",function(){
    return{
        require:"superhero",
        link: function(scope,element,attrs,superctrl){
            superctrl.addFlight();
        }
    }
});
