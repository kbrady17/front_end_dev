(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    
    
    MenuDataService.$inject = ['$q', '$timeout']
    function MenuDataService($q, $timeout) {

        var service = this;

        service.getAllCategories = function() {

            var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
              });
          
              return response;
        }

        service.getItemsForCategory = function(categoryShortName) {

            var url2go = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName

            var response = $http({
                method: "GET",
                url: url2go
              });
          
              return response;
        }

    }

})();