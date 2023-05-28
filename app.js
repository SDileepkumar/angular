// app.js
angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', function($scope) {
    $scope.checkLunch = function() {
      if (!$scope.lunchItems || $scope.lunchItems.trim() === '') {
        $scope.message = 'Please enter data first';
      } else {
        var items = $scope.lunchItems.split(',');
        if (items.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      }
    };
  });
