(function(){
    'use strict';

    angular.module("whatsapp.conversation") 
        .controller("ConversationController", ConversationController)

    ConversationController.$inject = ["ConversationModel", "ContactsModel", "$stateParams", "$location"]

    function ConversationController(ConversationModel, ContactsModel, $stateParams, $location) {
        var vm = this

        var convId = $stateParams.conversationId * 1
        console.log("conversationId -> ", convId)

        var contacts = []

        vm.conversation = {}

        vm.user = {
            "_id": "589b44b2fd42e47ea59970bc"
        }

        function fetchConversation() {
            ConversationModel.getAll()
                .then(data => {
                    console.log(data.data)
                    var convs = data.data.filter(conversation => conversation.id === convId)
                    if(convs.length === 0) { // if conv exists
                        console.log("The conversation does not exists")
                        $location.url("#/tab/conversations")
                        return
                    } 
                    console.log(convs[0]);
                    vm.conversation = convs[0];
                    return ContactsModel.getAll()
                }, error => {
                    console.log(error)
                })
                .then(data => {
                    contacts = data.data
                    data.data.map(contact => {
                        vm.conversation.messages =
                            vm.conversation.messages.map(message => {
                                if(message.user === contact._id) {
                                    message.userName = contact.firstName + " " + contact.lastName;
                                }
                                return message;
                            })
                    })
                }, error => {
                    console.log(error)
                })
        }
        
        fetchConversation()



        vm.sendMessage = function() {
            console.log(vm.input.message)

            var newMessage = {
                "user": vm.user._id,
                "message": vm.input.message,
                "created": Date.now()
            }

            contacts.map(contact => {
                if(newMessage.user === contact._id) {
                    newMessage.userName = contact.firstName + " " + contact.lastName;
                }
            })

            console.log(newMessage)

            vm.conversation.messages.push(newMessage)
        }

    }

})();