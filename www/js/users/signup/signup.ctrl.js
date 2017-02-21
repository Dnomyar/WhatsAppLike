(function(){
    "use strict";

    angular.module("whatsapp.users.signup")
        .controller("SignUpController", SignUpController)

    SignUpController.$inject = ["$location"]

    function SignUpController($location) {
        var vm = this

        vm.signup = function() {
            console.log("successfully signed up, redirecting...")
            $location.path("#/login")
        }
    }

})();
