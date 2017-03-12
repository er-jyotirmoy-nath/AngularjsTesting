/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var myvar = angular.module("myapp", []);

myvar.controller("myfirstcontroller", function ($scope) {
    //$scope.message = "Welcome to my store";

    $scope.groceries = [
        {name: "potatoes", purchased: false},
        {name: "tomatoes", purchased: false},
        {name: "brinjal", purchased: false},
        {name: "onion", purchased: false}
    ];

});
myvar.controller('calculator', function ($scope) {
    $scope.first = 1;
    $scope.second = 1;
    $scope.updatecalculation = function () {
        $scope.calculation = $scope.first + "+" + $scope.second + "=" +
                (+$scope.first + +$scope.second);
    };
});
myvar.controller('badMood', function ($scope) {
    var badmoods = ["Disgrunted", "Unimportant", "Rejected", "Powerless"];
    $scope.bad = badmoods[Math.floor((Math.random() * 4))];

});
myvar.controller('goodMood', function ($scope) {
    var goodmoods = ["Pleasure", "Important", "Lovable", "Powerfull"];
    $scope.good = goodmoods[Math.floor((Math.random() * 4))];

});
myvar.controller('example2', function ($scope) {
    $scope.clickval = 0;
    $scope.dbclickval = 0;
    $scope.groceries = [
        {name: "potatoes", purchased: false},
        {name: "tomatoes", purchased: false},
        {name: "brinjal", purchased: true},
        {name: "onion", purchased: false}
    ];
    $scope.saveitem = function (newitem) {
        if (!(newitem === "" && newitem === undefined)) {
            $scope.groceries.push({
                name: newitem, purchased: false
            });
            $scope.newitem = "";
            $scope.messageerrordetails = "";
        } else {
            $scope.messageerrordetails = "No Value Entered";
        }

    };

});
myvar.controller("example3", function ($scope) {
    $scope.user = [{
            fname: "Jyotirmoy",
            lname: "Name",
            streetaddress: "SHeikh Sarai Phase-1",
            subscriptionres: "unsubscribed",
            deliverytype: "bymail"
        }];
    $scope.saveuser = function (userformdata) {
        if ($scope.userInfo.$valid) {
            $scope.user.push({
                fname: userformdata.fName,
                lname: userformdata.lName,
                streetaddress: userformdata.streetadd,
                subscriptionres: userformdata.subscribe,
                deliverytype: userformdata.deliverytype
            });
        }
    };
});