(function(){
  function MainCtrl($uibModal, RoomService, MessageService, $scope, $cookies){
    var ctrl = this;
    var roomId ;

    ctrl.rooms = RoomService.bind();

    ctrl.open = function () {
        $uibModal.open({
          templateUrl: '/templates/modal_instance.html',
          controller: 'ModalInstanceCtrl',
          resolve: {
            rooms: function () {
              return ctrl.rooms;
            }
          }
        });
      };

    ctrl.setRoom = function(room){
      $scope.roomTitle = room.name;
      RoomService.getMessages(room.$id, function (messages) {
        $scope.messages = messages;
        $scope.roomId = room.$id;
        roomId = room.$id;
        console.log(roomId );
      });

    };

    ctrl.sendMessage = function(message){
      console.log(message.content);
      console.log($scope.roomId );
      console.log($cookies);
      message.userName = $cookies.get('chatRoomCurrentUser');
      message.roomId = $scope.roomId;
      MessageService.sendMessage(message);
    }

  ctrl.deleteRoom = function(room){
    RoomService.delete(room);
  }

  };

  angular
    .module('chatRoom')
    .controller('MainCtrl', ['$uibModal', 'RoomService','MessageService', '$scope', '$cookies', MainCtrl]);

})();
