(function(){
  function RoomService($firebaseArray){
    var RoomService = {}
    var firebaseRef = new Firebase("https://chatroom-letsdiscuss.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    RoomService.bind = function() {
      return rooms;
    };

    return RoomService;
  };

  angular
    .module("chatRoom")
    .factory("RoomService", ['$firebaseArray', RoomService])

})();
