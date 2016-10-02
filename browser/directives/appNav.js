angular.module('app')
  .directive('appNav', function(){
    return {
      templateUrl: 'browser/templates/navtabs.html', 
      controller: 'AuthCtrl'
    };
  });


//templateUrl: browser/templates/ 

// index.html in templates nav tabs iwth sref='state'


// li ng-if='user.id' for settings 

// put controller on directive

// factory var user={};

// return {user: user} 