(function(){
  function ModalInstanceCtrl($uibModalInstance, RoomService){

    var ModalCtrl = this;

    ModalCtrl.addRoom = function(){
      RoomService.addRoom(room);
    }

    ModalCtrl.createRoom = function(){
       $uibModalInstance.close();
    }

    ModalCtrl.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    }

  };

  angular
    .module('chatRoom')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'RoomService',ModalInstanceCtrl])

})();
