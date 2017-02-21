
angular.module('whatsapp', [
  'ionic', 
  'whatsapp.contacts', 
  'whatsapp.conversations', 
  'whatsapp.conversation', 
  'whatsapp.users',
  'whatsapp.users.login',
  'whatsapp.users.signup'
])

.run(function($ionicPlatform, $rootScope, $location, LoginModel) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // TODO (?) : handle last url 

    $rootScope.$on("$ionicView.beforeEnter", function(event, before) {

      if(! LoginModel.isUserConnected() && before.stateId !== "signup") {
        console.log("You are not connected")
        event.preventDefault();
        $location.path('/login');
      } else {
        console.log("You are connected")
      }

    });

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

  // Each tab has its own nav history stack:

  .state('tab.contacts', {
    url: '/contacts',
    views: {
      'tab-contacts': {
        templateUrl: 'templates/contacts/tab-contacts.html',
        controller: 'ContactsController as vm'
      }
    }
  })

  .state('tab.conversations', {
    url: '/conversations',
    views: {
      'tab-conversations': {
        templateUrl: 'templates/conversations/tab-conversations.html',
        controller: 'ConversationsController as vm'
      }
    }
  })

  .state('tab.conversation-detail', {
    url: '/conversations/:conversationId',
    views: {
      'tab-conversations': {
        templateUrl: 'templates/conversation/tab-conversation.html',
        controller: 'ConversationController as vm'
      }
    }
  })

  .state('tab.conversation-add', {
    url: '/add-conversations',
    views: {
      'tab-conversations': {
        templateUrl: 'templates/conversations/add-conversation.html',
        controller: 'AddConversationsController as vm'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/users/login/login.html',
    controller: 'LoginController as vm'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/users/signup/signup.html',
    controller: 'SignUpController as vm'
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/users/tab-account.html',
        controller: 'LoginController as vm'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/contacts');

});
