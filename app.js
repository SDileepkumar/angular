(function() {
  'use strict';

  angular.module('MenuSearchApp', [])
    .controller('MenuSearchController', MenuSearchController)
    .service('MenuSearchService', MenuSearchService);

  MenuSearchController.$inject = ['MenuSearchService'];
  function MenuSearchController(MenuSearchService) {
    var menuCtrl = this;
    menuCtrl.searchTerm = '';
    menuCtrl.foundItems = [];

    menuCtrl.narrowDown = function() {
      if (menuCtrl.searchTerm.trim() !== '') {
        var promise = MenuSearchService.getMatchedMenuItems(menuCtrl.searchTerm);
        promise.then(function(response) {
          menuCtrl.foundItems = response;
        })
        .catch(function(error) {
          console.log('Error:', error);
        });
      } else {
        menuCtrl.foundItems = [];
      }
    };

    menuCtrl.removeItem = function(index) {
      menuCtrl.foundItems.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: 'GET',
        url: 'http://davids-restaurant.herokuapp.com/menu_items.json'
      })
      .then(function(response) {
        var foundItems = [];
        var menuItems = response.data;

        for (var i = 0; i < menuItems.length; i++) {
          var description = menuItems[i].description;
          if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItems.push(menuItems[i]);
          }
        }

        return foundItems;
      });
    };
  }
})();
