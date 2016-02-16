(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
			enabled: true,
			requireBase: false
		});
		$stateProvider
			.state('MainCtrl', {
				url: '/',
				controller: 'MainCtrl as Main',
				templateUrl: 'templates/home.html'
			})
			.state('ModalInstanceCtrl', {
				url: '/',
				controller: 'ModalInstanceCtrl as Modal',
				templateUrl: 'templates/modal_instance.html'
			})

	}

	angular
		.module('chatRoom', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();
