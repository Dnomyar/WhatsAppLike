(function(){
    'use strict';

    angular.module("whatsapp.contacts")
        .controller("ContactsController", ContactsController)

    ContactsController.$inject = ["ContactsModel"]

    function ContactsController(ContactsModel) {
        var vm = this

        console.log("ContactsController")

        vm.contacts = []
        vm.search = ""

        function fetchContacts() {
            ContactsModel.getAll()
                .then(data => {
                    vm.contacts = data.data;
                }, error => {
                    console.log(error)
                })
        }
        
        fetchContacts()

    }

})();