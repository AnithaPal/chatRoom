(function(){
	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
			enabled: true,
			requireBase: false
		});
		$stateProvider
			.state('Main', {
				url: '/',
				controller: 'MainCtrl as Main',
				templateUrl: 'templates/home.html'
			})
			.state('ModalInstanceCtrl', {
				url: '/',
				controller: 'ModalInstanceCtrl as Modal',
				templateUrl: 'templates/modal_instance.html'
			})
			.state('about', {
				url: '/about',
				controller: 'MainCtrl as Main',
				templateUrl: '/templates/about.html'
			});

	}

	angular
		.module('chatRoom', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
		.config(config);
})();
