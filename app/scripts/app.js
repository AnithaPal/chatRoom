(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
			enabled: true,
			requireBase: false
		});
		$stateProvider
			.state('taskTimer', {
				url: '/',
				controller: 'MainCtrl as Main',
				templateUrl: 'templates/home.html'
			})
			.state('ModalInstanceCtrl', {
				url: '/',
				controller: 'ModalInstanceCtrl as modalInstance',
				templateUrl: 'templates/modal_Instance.html'
			})

	}

	angular
		.module('chatRoom', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();
