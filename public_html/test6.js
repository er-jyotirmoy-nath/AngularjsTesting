/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var myvar = angular.module('myapp',['weathermodule']);

myvar.controller('mainCtrl',function($scope){
    $scope.students = [
    {name: "George Thomas", gpa: 3.5},
    {name: "Susy Smith", gpa: 3.6},
    {name: "Paul Marks", gpa: 3.2},
    {name: "Sue Edgar", gpa: 3.8}
  ];
 
  $scope.student = {
      gpas:[
        {name: "George Thomas", gpa: 3.5},
        {name: "Susy Smith", gpa: 3.6},
        {name: "Paul Marks", gpa: 3.2},
        {name: "Sue Edgar", gpa: 3.8}
      ]
  };
 
  $scope.currDate = new Date();
 
  $scope.randomStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
 
  $scope.randArray = [
    "Tomato",
    "Potato",
    "Bread",
    "Pickles",
    "Raisins"
  ];
 
  $scope.weather = [
    {day: "Monday", rain: false},
    {day: "Tuesday", rain: true}
  ];
});