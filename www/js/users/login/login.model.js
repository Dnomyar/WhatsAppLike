(function(){
    'use strict';

    angular.module("whatsapp.users.login")
        .factory("LoginModel", LoginModel)

    LoginModel.$inject = ["$http", "$q"]

    function LoginModel($http) {

        var user

        return{
            setUser : function(aUser) {
                user = aUser
            },
            logout : function() {
                user = undefined
            },
            isUserConnected : function() {
                return (user) ? user : false
            }
        }
    }


})();