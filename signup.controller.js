angular.module('restaurant')
  .controller('SignupController', SignupController);

SignupController.$inject = ['$scope', 'PreferencesService'];

function SignupController($scope, PreferencesService) {
  $scope.user = {};
  $scope.signupSuccess = false;
  $scope.validFavoriteDish = true;

  $scope.submitForm = function() {
    if ($scope.signupForm.$valid && $scope.validFavoriteDish) {
      PreferencesService.savePreference($scope.user);
      $scope.signupSuccess = true;
    }
  };

  $scope.validateFavoriteDish = function() {
    //
