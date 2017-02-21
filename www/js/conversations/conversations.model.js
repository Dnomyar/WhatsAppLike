(function(){
    'use strict';

    angular.module("whatsapp.conversations")
        .service("ConversationsModel", ConversationsModel)

    ConversationsModel.$inject = ["$http", "$q"]

    function ConversationsModel($http, $q) {


        this.getAll = function() {
            return $http.get("/mock/conversations.json")
        }

        this.addConversation = function(name, description, isPrivate, users) {
            console.log('conversation 2 add', name, description, isPrivate, users)
            // firebase.database().ref('users/' + userId).set(conversation);
            // return $http.post("http://****.firebaseio.com/conversations/conversations.json", conversation)
            return $q.resolve();
        }

    }

/*

{
    "name": "My conv",
    "picture": "My conv"
    "isPrivate": 
    "messages": [
        {
            "user" : 344354633542
            "message" : 
            "created" : 
        }
    ]
}
*/

})();