(function(){
  function RoomService($firebaseArray){
    var RoomService = {}
    var firebaseRef = new Firebase("https://chatroom-letsdiscuss.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    RoomService.addRoom = function(room){
      rooms.$add({name: room.name,
                  created_at: Firebase.ServerValue.TIMESTAMP})
    }

    RoomService.bind = function() {
      return rooms;
    };

    return RoomService;
  };

  angular
    .module("chatRoom")
    .factory("RoomService", ['$firebaseArray', RoomService])

})();
