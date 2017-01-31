'use strict';

angular.module('ngBarsApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    $scope.data = {}

    $scope.getData = function(){
      $http({
        method:'GET',
        url:'data.json'
      }).then(function(res){
        $scope.data = res.data;
      })
    };
    $scope.getDataTwo = function(){
      $http({
        method:'GET',
        url:'data2.json'
      }).then(function(res){
        $scope.data = res.data;
      })
    };

$scope.getData();

  });
