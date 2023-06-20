var app = angular.module('restaurantApp', []);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      template: '',
      controller: 'HomeController'
    })
    .when('/categories', {
      template: '',
      controller: 'CategoriesController'
    })
    .when('/items/:categoryId', {
      template: '',
      controller: 'ItemsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('HomeController', function($scope) {
  $scope.showCategories = true;
  $scope.showItems = false;
});

app.controller('CategoriesController', function($scope, $http) {
  $http.get('API_URL/categories')
    .then(function(response) {
      $scope.categories = response.data;
    })
    .catch(function(error) {
      console.error('Error fetching categories:', error);
    });

  $scope.showCategories = true;
  $scope.showItems = false;
});

app.controller('ItemsController', function($scope, $http, $routeParams) {
  var categoryId = $routeParams.categoryId;

  $http.get('API_URL/items?categoryId=' + categoryId)
    .then(function(response) {
      $scope.items = response.data;
    })
    .catch(function(error) {
      console.error('Error fetching items:', error);
    });

  $http.get('API_URL/categories/' + categoryId)
    .then(function(response) {
      $scope.selectedCategory = response.data;
    })
    .catch(function(error) {
      console.error('Error fetching category:', error);
    });

  $scope.showCategories = false;
  $scope.showItems = true;
});
