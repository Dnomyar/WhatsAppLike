(function(){
    'use strict';

    angular.module("whatsapp.conversation")
        .service("ConversationModel", ConversationModel)

    ConversationModel.$inject = ["$http"]

    function ConversationModel($http) {
        
        this.getAll = function() {
            return $http.get("/mock/conversations.json")
        }
        
    }

})();