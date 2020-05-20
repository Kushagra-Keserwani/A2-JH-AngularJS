(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ShoppingListController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.list = ShoppingListCheckOffService.getItemsToBuy();


  toBuy.shiftToBought = function(index){
    
      ShoppingListCheckOffService.addItemBought(index);
      ShoppingListCheckOffService.removeItem(index);
      
    
   

  };
  
}

ShoppingListBoughtController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.list = ShoppingListCheckOffService.getItemsBought();

  
}


function ShoppingListCheckOffService() {
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
