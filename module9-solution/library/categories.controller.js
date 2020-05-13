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
            catCtr.categories = result;
          });
        };

        // var promise = MenuDataService.getAllCategories();

        // promise.then(function (response) {
        //     menu.categories = response.data;
        // })
        // .catch(function (error) {
        //     console.log("Something went terribly wrong.");
        // });


        // menu.logMenuItems = function (shortName) {
        //     var promise = MenuDataService.getItemsForCategory(shortName);
        
        //     promise.then(function (response) {
        //       console.log(response.data);
        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //     })
        //   };


    }
    
    })();
    