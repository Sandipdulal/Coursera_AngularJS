(function (){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.name='test';
$scope.message="";

$scope.itemCheck=function(){
  var textValue=$scope.name;
  var res=textValue.split(",");
  var len=res.length;
  

if (textValue == "") {
    $scope.message="Please enter data first";
}

else if (len>0 && len<=3) {
    $scope.message="Enjoy!!";
}
else {
    $scope.message="Too Much!!";
}
};

  }

})();
