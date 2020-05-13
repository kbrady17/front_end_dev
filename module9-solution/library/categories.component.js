(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoriesList', {
      templateUrl: 'library/templates/menu-cat-components.template.html',
      bindings: {
        categories: '<'
      }
    });
    
    })();
    
    