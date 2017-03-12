/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mynewvar = angular.module('weathermodule',[]);

mynewvar.filter('newfilter',function(){
 return function(input){
     return input ? '\u2602':'\u2600';
 };   
});