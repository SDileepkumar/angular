angular.module('LunchCheckerApp', [])
  .controller('LunchCheckerController', function($scope) {
    $scope.checkLunchMenu = function() {
      var input = $scope.lunchMenu.trim();
      var items = input.split(',');

      if (input === '') {
        $scope.message = 'Please enter data first';
      } else if (items.length <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };
  });
