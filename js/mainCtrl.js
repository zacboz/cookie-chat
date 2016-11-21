angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getData method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)
$scope.getMessages= function() {
  var promise = messageService.getMessage();

    promise.then(function(response) {
      $scope.messages = response.data;
      console.log(response.data);
    });
}

$scope.getMessages();


  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.
$scope.postMessage= function(message) {
  var promise = messageService.postMessage(message);

    promise.then(function(response) {
      $scope.getMessages();
    });

    }


  // uncomment this code when your getMessages function is finished
  // This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    $scope.getMessages();

  }, 1500)

//getCookie
  $scope.getCookie = function(){
    messageService.getCookie().then(function(response){
      $scope.cookies = response;
      console.log(response);

    });
  }
  $scope.getCookie();

  //postCookie
  $scope.postCookie = function(cookie) {
    messageService.postCookie(cookie).then(function(response){
      $scope.getCookie();
    });
  }

})
