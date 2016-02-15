(function(){
  function Room($firebaseArray){
    var firebaseRef = new Firebase("https://chatroom-letsdiscuss.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));


  };

  angular
    .module("chatRoom")
    .factory("Room", ["$firebaseArray", Room])

})();
