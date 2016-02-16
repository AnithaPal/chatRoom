(function(){
  function ModalInstanceCtrl($uibModalInstance, RoomService, $scope){

    var mi = this;

    mi.addRoom = function(room){
      RoomService.addRoom(room);
    };

    $scope.createRoom = function(){
       mi.addRoom($scope.room);
       $uibModalInstance.close();
    };

    $scope.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('chatRoom')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'RoomService', '$scope', ModalInstanceCtrl])

})();
