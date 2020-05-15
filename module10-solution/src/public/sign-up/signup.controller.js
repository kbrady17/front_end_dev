(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = [""];
    function SignUpController() {
      var sctrl = this;


      sctrl.submit = function () {
        sctrl.completed = true;
      };



    }
    
    
})();