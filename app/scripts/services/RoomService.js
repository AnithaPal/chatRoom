(function(){
  function RoomService($firebaseArray){
    var RoomService = {}

    var firebaseRef = new Firebase("https://chatroom-letsdiscuss.firebaseio.com/");
    var roomRef = new Firebase("https://chatroom-letsdiscuss.firebaseio.com/rooms");
    var messageRef = new Firebase("https://chatroom-letsdiscuss.firebaseio.com/messages");
    var rooms = $firebaseArray(roomRef);
    var messages = $firebaseArray(messageRef);

    RoomService.addRoom = function(room){
      rooms.$add({name: room.name,
                  created_at: Firebase.ServerValue.TIMESTAMP})
    };

    RoomService.delete = function(roomID){
      rooms.$remove(roomID);
    }


    RoomService.getMessages = function(roomId, callback){
      messageRef.orderByChild('roomId').equalTo(roomId).on('value', function(messages) {
        callback(messages.val());
        });
    };

    RoomService.bindLastTaskToValue = function(callback) {
      roomRef.orderByChild("createdAt").limitToLast(1).once("value", function (snap) {
        snap.forEach(function (room) {
          callback(room.key(), room.val());
				});
			});
		};

    RoomService.bind = function() {
      return rooms;
    };

    return RoomService;
  };

  angular
    .module("chatRoom")
    .factory("RoomService", ['$firebaseArray', RoomService])

})();
