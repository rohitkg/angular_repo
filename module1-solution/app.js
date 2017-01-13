(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";

  $scope.checkMenuQty = function () {
    var msg = $scope.menu;
    if(!msg || msg.length == 0) {
      $scope.message = "Please enter data first";
      return;
    }

    var qty = msg.split(",").length;

    //console.log(qty);
    
    if (qty <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };

  
}

})();
