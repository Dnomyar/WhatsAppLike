(function(){
    "use strict";

    angular.module("whatsapp.conversations")
        .controller("AddConversationsController", AddConversationsController)

    AddConversationsController.$inject = ["ContactsModel", "ConversationsModel", "$location"]

    function AddConversationsController(ContactsModel, ConversationsModel, $location) {
        var vm = this

        console.log("AddConversationsController")

        vm.users = []
        vm.isPrivate = false

        function fetchUsers() {
            ContactsModel.getAll()
                .then(data => {
                    console.log(data.data);
                    vm.users = data.data;
                }, error => {
                    console.log("error while fetching users", error)
                })
        }

        fetchUsers();


        vm.addConversation = function(){
            var name = vm.name
            var description = vm.description
            var isPrivate = vm.isPrivate
            var users = vm.users.filter(user => user.isSelected)
            console.log(name, description, isPrivate, users)

            ConversationsModel.addConversation(name, description, isPrivate, users)
                .then(data => {
                    $location.path("#/tab/conversations")
                }, error => {
                    console.log("Error while adding conversation")
                    $location.path("#/tab/conversations")
                })
        }
    }

})();
