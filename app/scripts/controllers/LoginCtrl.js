(function(){
  function LoginCtrl($scope, $cookies, $uibModalInstance){
    // var lc = this;
    // lc.closeModalInstance = function(){
    //   modalInstance.close('exit');
    // };

    $scope.createUserName = function(userName){
      if(userName && userName !== ''){
        $cookies.chatRoomCurrentUser = userName;
        // closeModalInstance($uibModalInstance);
        $uibModalInstance.close();
        console.log("inside create user name");
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
