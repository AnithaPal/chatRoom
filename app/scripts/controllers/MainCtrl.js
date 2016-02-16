(function(){
  function MainCtrl($uibModal, RoomService){
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
  };

  angular
    .module('chatRoom')
    .controller('MainCtrl', ['$uibModal', 'RoomService', MainCtrl]);

})();
