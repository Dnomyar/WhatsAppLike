(function(){
    "use strict";

    angular.module("whatsapp.users.login")
        .controller("LoginController", LoginController)

    LoginController.$inject = ["LoginModel", "$location"]

    function LoginController(LoginModel, $location) {
        var vm = this

        vm.email = ""
        vm.password = ""

        vm.login = function() {
            // TODO : real email & pwd check
            LoginModel.setUser({"email": vm.email})
            $location.path("#/")
        }

        vm.logout = function() {
            LoginModel.logout()
            $location.path("#/login")
        }
    }

})();
