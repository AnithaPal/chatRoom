(function(){
  function LoginCtrl($scope, $cookies, $uibModalInstance){
    $scope.createUserName = function(userName){
      if(userName && userName !== ''){
        // $cookies.chatRoomCurrentUser = userName;
        var expireTime = new Date();
        expireTime.setHours(expireTime.getHours() + 1);
        $cookies.put("chatRoomCurrentUser", userName, {'expires': expireTime});
        $uibModalInstance.close();
      }
      else{
         $scope.errorMessage = 'Invalid username.';
      }
    };

  };

  angular
    .module('chatRoom')
    .controller('LoginCtrl', ['$scope', '$cookies', '$uibModalInstance', LoginCtrl]);
})();
