(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ["PublicService"];
    function SignUpController(PublicService) {
      var sctrl = this;
      sctrl.firstname = "";
      sctrl.lastname = "";
      sctrl.phone = "";
      sctrl.email = "";
      sctrl.firstname = "";

      sctrl.submit = function () {
          console.log("HEYYY")
        PublicService.set_user_data(sctrl.firstname, sctrl.lastname, sctrl.phone, sctrl.email);
      };

    }
    
    
})();