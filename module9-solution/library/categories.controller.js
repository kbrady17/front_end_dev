(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);
    
    
    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
      
        var catCtr = this;
        catCtr.categories = [];
        catCtr.$onInit = function (){
          MenuDataService.getAllCategories()
          .then(function (result) {
            catCtr.categories = result.data;
          });
        };


        catCtr.catItems = [];
        catCtr.getCategoryItems = function (shortName) {
            var promise = MenuDataService.getItemsForCategory(shortName);
        
            promise.then(function (response) {
              catCtr.catItems = response.data;
            })
            .catch(function (error) {
              console.log(error);
            })
          };


    }
    
    })();
    