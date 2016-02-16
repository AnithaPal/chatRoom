(function(){
  function MainCtrl($uibModal, RoomService, MessageService, $scope){
    var ctrl = this;

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
        // $scope.roomId = room.$id;
      });

    };

    ctrl.createMessage = function(){
      MessageService.addRoom(ctrl.message);
    }

  };

  angular
    .module('chatRoom')
    .controller('MainCtrl', ['$uibModal', 'RoomService','MessageService', '$scope', MainCtrl]);

})();
