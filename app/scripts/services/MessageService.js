(function(){
  function MessageService($firebaseArray){
    var MessageService ={};

    var firebaseRef = new Firebase("https://chatroom-letsdiscuss.firebaseio.com/");
    var messages = $firebaseArray(firebaseRef.child('messages'));

    MessageService.sendMessage = function(message){
      messages.$add({userName: message.userName,
                  content: message.content,
                  sentAt: Firebase.ServerValue.TIMESTAMP,
                  roomId: room
                });
    }

    MessageService.bind = function(){
      return messages;
    }

    return MessageService;
  }

  angular
    .module('chatRoom')
    .factory('MessageService', ['$firebaseArray', MessageService]);

})();
