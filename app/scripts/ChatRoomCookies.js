(function() {
  function ChatRoomCookies($cookies, $uibModal) {
    var user = $cookies.get('chatRoomCurrentUser');
    if (!user || user === '') {
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
