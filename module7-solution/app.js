
( function () { 
    'use strict';
    
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

    var itemctr = this;

    itemctr.name = "";
    itemctr.quantity = "";
    itemctr.pricePerItem = 0;
  
    itemctr.buyItem = function (idx) {
        ShoppingListCheckOffService.buy_item(idx);
    }

    itemctr.tobuyitems = ShoppingListCheckOffService.gettobuyitems();


}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

    var boughtctr = this;

    boughtctr.bought_items = ShoppingListCheckOffService.getboughtitems();

}

function ShoppingListCheckOffService() {

    var service = this;

    var to_buy_items = [{name: "cookies", quantity: "11", pricePerItem:2},{name: "scones", quantity: "10", pricePerItem:2.50}];
    var bought_items = [];

    service.buy_item = function(idx) {

        
        var itemGuy = to_buy_items[idx];
        console.log(to_buy_items);
        to_buy_items.splice(idx,1);
        bought_items.push(itemGuy);
    };

    service.gettobuyitems = function() {
        return to_buy_items;
    };

    service.getboughtitems = function() {
        return bought_items;
    };

}

    
    
})();
    
    