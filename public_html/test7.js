/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myvar = angular.module("myapp",[]);
myvar.directive("superhero",function(){
   return{
       restric:"E",
       controller: function(){},
       controller: function(){},
       controller: function(){},
       link:function(scope,element,attrs){
           element.bind("mouseenter",function(){
               console.log(scope.attributes);
           });
       }
   } 
});

