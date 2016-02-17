(function(){
  function MainCtrl($uibModal, RoomService, MessageService, $scope){
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
console.log(roomId );
    // ctrl.createMessage = function(){
    //   MessageService.addRoom(ctrl.message);
    // }

    ctrl.sendMessage = function(message){
      console.log(message.content);
      console.log($scope.roomId );
      console.log("inside send message");
      MessageService.sendMessage(message);
    }

  ctrl.deleteRoom = function(room){
    console.log(room);
    console.log("inside delete");
    RoomService.delete(room);
  }

  };

  angular
    .module('chatRoom')
    .controller('MainCtrl', ['$uibModal', 'RoomService','MessageService', '$scope', MainCtrl]);

})();
