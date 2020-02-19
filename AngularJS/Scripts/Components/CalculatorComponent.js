///// <reference path="../controllers/calcctrl.js" />
var app = angular.module("myApp", []);
app.directive("myWelcome", function () {
    return {
        restrict: 'EA',
        templateUrl: '../templates/myWelcome.html',
        scope: {
            title: '@'
        },
    };
});


//app.directive("myCalculatorMultiply", function () {
//    return {
//        restrict: 'EA',
//        templateUrl: '../templates/myCalculatorMultiply.html',
//        scope: {
          
//        },
//    };
//});

app.directive("myCalculatorMultiply", function () {
    return {
        restrict: 'EA',
        templateUrl: '../templates/myCalculatorMultiply.html',
        scope: {
            a: "@",
            b: "@"
        },
    };
});


app.controller('calcCtrl', ['$scope', function ($scope) {
    $scope.trainers = [
        {
            name: 'Mike',
            email: 'mike@gym.com',
            tel: '07191941249',
            info: 'I am a gym instructor',
            quote: 'Inspirational Quote'
        },]

    $scope.AppName = "AngularJS Calculator 2020";
    $scope.x = 2;
    $scope.y = 100;
}]);