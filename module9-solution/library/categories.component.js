(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('catList', {
      templateUrl: 'library/templates/menu-cat-components.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();
    
    