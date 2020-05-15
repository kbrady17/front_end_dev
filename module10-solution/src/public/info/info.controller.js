(function () {
    "use strict";
    
    angular.module('public')
    .controller('InfoController', InfoController);
    
    InfoController.$inject = ["PublicService", 'ApiPath'];
    function InfoController(PublicService, ApiPath) {
      var sctrl = this;
      sctrl.user_data = PublicService.get_user_data();
      sctrl.firstname = sctrl.user_data[0];
      sctrl.lastname = sctrl.user_data[1];
      sctrl.phone = sctrl.user_data[2];
      sctrl.email = sctrl.user_data[3];

      sctrl.basePath = ApiPath;


    }
    
    
})();