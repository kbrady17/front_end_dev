
var myapp = angular.module("NarrowItDownApp", []);
(function (app) {
    'use strict';
    
    
    app.controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems',FoundItems)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    function FoundItems() {
        var ddo = {
            templateUrl: 'menuItems.html'
          };
        
        return ddo;
    }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      
        var narrowctr = this;
        narrowctr.search_item = "";
        narrowctr.found = [];

        narrowctr.get_narrow_menu = function() {
            var promise = MenuSearchService.getMatchedMenuItems(narrowctr.search_item);
            
            promise.then(function (response) {
                narrowctr.found = response;
              })
        }


        narrowctr.removeMenuItem = function(idx) {
            narrowctr.found = narrowctr.found.splice(idx,1);
        }
        

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {

        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {

            return $http({
                method: "GET",
                url: (ApiBasePath + '/menu_items.json')

            }).then(function (result) {
                // process result and only keep items that match
                var data = result.data;
                var menu_items = data["menu_items"];
                var foundItems = [];
                for (var i=0; i<menu_items.length; i++) {
                    if (menu_items[i]["description"].includes(searchTerm)) {
                        foundItems.push(menu_items[i])
                    }
                }
                
                // return processed items
                return foundItems;
            });


        }


    }


    
    })(myapp);