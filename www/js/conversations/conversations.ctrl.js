(function(){
    "use strict";

    angular.module("whatsapp.conversations")
        .controller("ConversationsController", ConversationsController)

    ConversationsController.$inject = ["ConversationsModel"]

    function ConversationsController(ConversationsModel) {
        var vm = this

        console.log("ConversationsController")

        vm.conversations = []

        function fetchConversations() {
            ConversationsModel.getAll()
                .then(data => {
                    console.log(data.data);
                    vm.conversations = data.data;
                }, error => {
                    console.log("error while fetching conversations", error)
                })
        }

        fetchConversations();
    }

})();
