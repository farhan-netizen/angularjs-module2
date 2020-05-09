(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);  
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var showList = this;
      showList.items = ShoppingListCheckOffService.getItems();
    //   showList.removeItem = ShoppingListCheckOffService.removeItem();
      showList.removeItem = function(index) {
          ShoppingListCheckOffService.addItem(index)
          // showList.removeItem = ShoppingListCheckOffService.addItem(index);
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var buyList = this;
        buyList.items = ShoppingListCheckOffService.buyItems()
    }    
    
    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of shopping items
      var to_buy = [{name : "cookies", quantity: 10}, {name : "chocolates", quantity: 5}, {name: "ice cream", quantity: 10}, {name: "cake", quantity: 1}, {name: "pastries", quantity: 5}];
      var baught = []
     
      service.addItem = function (index) {

        var item = {
          name: to_buy[index].name,
          quantity: to_buy[index].quantity
        }        
        baught.push(item)
        console.log(baught);
        to_buy.splice(index, 1);

        service.buyItems()

        return to_buy
      }
      service.getItems = function () {
        console.log(to_buy);        
        return to_buy;
      };
      service.buyItems = function () {
        console.log(baught);
        return baught
      }
    }

    })();