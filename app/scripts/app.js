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
				controller: 'MainCtrl as main',
				templateUrl: 'templates/home.html'
			});

	}

	angular
		.module('chatRoom', ['ui.router'])
		.config(config);
})();
  
