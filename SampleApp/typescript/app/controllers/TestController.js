var TestController = (function () {
    function TestController(vm) {
        this.vm = vm;
        this.vm = this;
        this.vm.testMessage = "Success!!!";
    }
    TestController.prototype.testBtnClick = function () {
        this.vm.testMessage = "in the button click";
    };
    TestController.$inject = ["$scope"];
    return TestController;
})();
exports.TestController = TestController;
//# sourceMappingURL=TestController.js.map