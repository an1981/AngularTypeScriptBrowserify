var TestController = require('./TestController');
var Names = require("../names");
var Index = (function () {
    function Index(names) {
        angular.module(Names.modulesNames.controllerName, []).controller(names.controllerNames.TestController, TestController.TestController);
    }
    return Index;
})();
exports.Index = Index;
//# sourceMappingURL=index.js.map