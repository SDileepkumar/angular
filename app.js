angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope) {
  var vm = this;

  vm.toBuyList = [
    { name: 'Cookies', quantity: 10 },
    { name: 'Milk', quantity: 2 },
    { name: 'Bread', quantity: 3 },
    { name: 'Eggs', quantity: 6 },
    { name: 'Apples', quantity: 5 }
  ];

  vm.alreadyBoughtList = [];

  vm.buyItem = function(index) {
    var item = vm.toBuyList[index];
    vm.toBuyList.splice(index, 1);
    vm.alreadyBoughtList.push(item);
  };

  vm.isToBuyListEmpty = function() {
    return vm.toBuyList.length === 0;
  };

  vm.isAlreadyBoughtListEmpty = function() {
    return vm.alreadyBoughtList.length === 0;
  };
}
