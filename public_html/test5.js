/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myvar = angular.module('myapp',[]);

myvar.controller("getfirstanimaldetails",function(){
    this.name = "Cat";
    this.sound = "Meeeeeeaaaaooowwwww....";
    this.getsound = function(){
      alert(this.name+" makes the sound "+this.sound);  
    };
});
myvar.controller('getsecondanimaldetails',function($controller){
    var second = this;
    second.child = $controller('getfirstanimaldetails',{});
    second.child.name = "Dog";
    second.child.sound = "Bowwwwwww....";
    second.child.bark = "Wooooffff...";
    second.child.dogdata= function(){
        alert(second.child.name + " makes the sound "+second.child.sound+" and then "+second.child.bark);
    };
});
