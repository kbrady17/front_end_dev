(function () {
    "use strict";
    
    angular.module('public')
    .service('PublicService', PublicService);
    
    
    PublicService.$inject = ['$http', 'ApiPath'];
    function PublicService($http, ApiPath) {
      var service = this;

      service.firstname = "";
      service.lastname = "";
      service.phone = "";
      service.email = "";

    
      service.set_user_data = function(firstname, lastname, phone, email) {
        service.firstname = firstname;
        service.lastname = lastname;
        service.phone = phone;
        service.email = email;
      }

      service.get_user_data = function() {
          return [service.firstname, service.lastname, service.phone, service.email];
      }

    

    
    }
    
    
    
    })();