(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'library/templates/home.template.html'
      })

      
      .state('categoriesState', {
        url: '/categories',
        templateUrl: 'library/templates/menu-categories.template.html' ,
        // controller: 'CategoriesController as categoriesList'//,
        // resolve: {
        //   categories: ['MenuDataService', function (MenuDataService) {
        //     return MenuDataService.getAllCategories();
        //   }]
        // }
      })
      
      .state('testingState', {
        url: '/testing',
        templateUrl: 'library/templates/testing.template.html'
      });
    
    //   .state('itemList', {
    //     url: '/item-detail/{itemId}',
    //     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    //     controller: 'ItemDetailController as itemDetail',
    //     resolve: {
    //       item: ['$stateParams', 'ShoppingListService',
    //             function ($stateParams, ShoppingListService) {
    //               return ShoppingListService.getItems()
    //                 .then(function (items) {
    //                   return items[$stateParams.itemId];
    //                 });
    //             }]
    //     }
    //   });
    }
    
    })();
    