(function () {



	var names = require('./names');
	require('./controllers').Index(names);


	angular.module(names.modulesNames.appName, [
		names.modulesNames.controllerName
	]);


}());