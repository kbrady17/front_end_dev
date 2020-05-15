(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ["PublicService", 'ApiPath', '$http'];
    function SignUpController(PublicService, ApiPath, $http) {
      var sctrl = this;
      sctrl.firstname = "";
      sctrl.lastname = "";
      sctrl.phone = "";
      sctrl.email = "";
      sctrl.faveitem = "";

      sctrl.faveitembad = false;

      sctrl.submit = function () {
          

        var promise = sctrl.get_fave_item(sctrl.faveitem);

        promise.then(function (response) {
            sctrl.faveitembad = false;
          })
          .catch(function (error) {
            sctrl.faveitembad = true;
            console.log(error);
            return
        })
     

        PublicService.set_user_data(sctrl.firstname, sctrl.lastname, sctrl.phone, sctrl.email, sctrl.faveitem);
      };

    

    sctrl.get_fave_item = function(fave_item) {
        
        var url2go = ApiPath + '/menu_items/' + fave_item + '.json';

        var response = $http({
            method: "GET",
            url: url2go
          });
      
          return response;

    }
}
    
    
})();