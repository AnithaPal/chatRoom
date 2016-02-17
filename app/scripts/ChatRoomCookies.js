(function() {
  function ChatRoomCookies($cookies, $uibModal) {
    console.log($cookies.chatRoomCurrentUser);
    if (!$cookies.chatRoomCurrentUser || $cookies.chatRoomCurrentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl',
        size: 'sm',
        backdrop: 'static',
        keyboard: false
      });
    }
  }

  angular
    .module('chatRoom')
    .run(['$cookies', '$uibModal', ChatRoomCookies]);
})();
