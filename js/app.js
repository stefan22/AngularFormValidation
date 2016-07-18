     var myApp = angular.module('myApp', []);

     myApp.controller('FormController', ['$scope', function($scope) {

        $scope.submitted = false;

        $scope.rex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
       


        $scope.submit = function() {
          console.log('you pressed submit');
          $scope.myform.submitted = true;
         




        };


     }]);







