(function(){
  function MainCtrl(RoomService){
    var ctrl = this;

    ctrl.rooms = RoomService.bind();

    ctrl.addRoom = function(room){
      RoomService.addRoom(room);
    }

  };

  angular
    .module("chatRoom")
    .controller("MainCtrl", ['RoomService', MainCtrl]);

})();
