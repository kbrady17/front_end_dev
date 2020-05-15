(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ["PublicService", 'ApiPath'];
    function SignUpController(PublicService, ApiPath) {
      var sctrl = this;
      sctrl.firstname = "";
      sctrl.lastname = "";
      sctrl.phone = "";
      sctrl.email = "";
      sctrl.faveitem = "";

      sctrl.submit = function () {
          

        var fave_item = sctrl.get_fave_item(sctrl.faveitem);
        console.log(fave_item)

        PublicService.set_user_data(sctrl.firstname, sctrl.lastname, sctrl.phone, sctrl.email, fave_item);
      };

    

    sctrl.get_fave_item = function(fave_item) {
        return $http.get(ApiPath + '/menu_items/' + fave_item + '.json', config).then(function (response) {
            return response.data;
        });
    }
}
    
    
})();