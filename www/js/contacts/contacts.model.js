(function(){
    'use strict';

    angular.module("whatsapp.contacts")
        .service("ContactsModel", ContactsModel)

    ContactsModel.$inject = ["$http"]

    function ContactsModel($http) {
        
        this.getAll = function() {
            return $http.get("/mock/users.json")
        }
        
    }

})();