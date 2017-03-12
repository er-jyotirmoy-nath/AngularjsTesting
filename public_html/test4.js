/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myvar = angular.module('myapp',[]);
myvar.controller("gethero",function($scope,$rootScope){
    $scope.heroes = [
        {realname:"Robert Downey Junior",character:"Iron Man"},
        {realname:"Scarlet Jhonson",character:"Black Widow"}
    ];
    $scope.searchhero = function(heroitem){
        herosearch(heroitem);
    };
    
    function herosearch(heroitem){
        $scope.serachresult = "No Results Found";
        for(var i =0; i < $scope.heroes.length;i++){
            if($scope.heroes[i].character === heroitem){
                $scope.serachresult = $scope.heroes[i].realname + " played the character of " + $scope.heroes[i].character; 
            }
        }
    };
    
    $scope.$on('newhero',function(event,args){
        console.log('Enter the Details for the new hero');
        $scope.heroes.push({
            realname:args.realcharacter,character:args.herocharacter
        });
        console.log("Entered te details for: "+args.herocharacter);
    });
    
    
    $scope.saveheroname = function(herocharacter,realcharacter){
        if(!(herocharacter === "",realcharacter === "")){
            $rootScope.$broadcast('newhero',{
                herocharacter:herocharacter,realcharacter:realcharacter
            });
            console.log("RealName: "+realcharacter+"for the Character of:"+herocharacter);
        }
    };
});
