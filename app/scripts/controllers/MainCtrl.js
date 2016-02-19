(function(){
  function MainCtrl($uibModal, RoomService, MessageService, $scope, $cookies){
    var ctrl = this;

    ctrl.rooms = RoomService.bind();

    ctrl.rooms.$loaded().then(function(x) {
      RoomService.bindLastTaskToValue(function(key, room){
        ctrl.currentRoom = room;
        $scope.roomId = key;

        RoomService.getMessages(key, function (messages) {
          $scope.messages = messages;
        });
      });
    })

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
      ctrl.currentRoom = room;
      RoomService.getMessages(room.$id, function (messages) {
        $scope.messages = messages;
        $scope.roomId = room.$id;
      });

    };


    ctrl.sendMessage = function(message){
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
