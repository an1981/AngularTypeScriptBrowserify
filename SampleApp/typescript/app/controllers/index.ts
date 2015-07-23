import TestController = require('./TestController');
import Names = require("../names");

export class Index {

	constructor(names) {
		angular.module(Names.modulesNames.controllerName, []).controller(names.controllerNames.TestController, TestController.TestController);

	}

}   

	  