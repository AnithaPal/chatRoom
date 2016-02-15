(function(){
  function MainCtrl(RoomService){
    var ctrl = this;

    ctrl.rooms = RoomService.bind();

  };

  angular
    .module("chatRoom")
    .controller("MainCtrl", ['RoomService', MainCtrl]);

})();
