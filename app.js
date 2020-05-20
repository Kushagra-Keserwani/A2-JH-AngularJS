(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListService', ShoppingListService);

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var toBuy = this;

  toBuy.list = ShoppingListService.getItemsToBuy();


  toBuy.shiftToBought = function(index){
    
      ShoppingListService.addItemBought(index);
      ShoppingListService.removeItem(index);
      
    
   

  };
  
}

ShoppingListBoughtController.$inject = ['ShoppingListService'];
function ShoppingListBoughtController(ShoppingListService) {
  var bought = this;

  bought.list = ShoppingListService.getItemsBought();

  
}


function ShoppingListService() {
  var service = this;

  var shoppingList = [
  {
    name: "Sugar",
    quantity: "3 kg"
  },
  {
    name: "Milk",
    quantity: "2 liter"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Bananas",
    quantity: "12"
  }
];
  var alreadyBoughtList = [];

  service.getItemsToBuy = function(){
    return shoppingList;
  };

  service.getItemsBought = function(){
    return alreadyBoughtList;
  };

  service.removeItem = function(index){
    shoppingList.splice(index, 1);
  };

  service.addItemBought = function(index){

    var item1 = shoppingList[index];

    alreadyBoughtList.push(item1);

  };


}

})();
