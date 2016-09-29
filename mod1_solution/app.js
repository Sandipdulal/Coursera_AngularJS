(function (){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.name='Sandip';

  $scope.itemCheck= function(){
    $scope.name="test";
  };
  }

})();
