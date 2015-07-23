(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{"../names":4,"./TestController":1}],3:[function(require,module,exports){
(function () {



	var names = require('./names');
	require('./controllers').Index(names);


	angular.module(names.modulesNames.appName, [
		names.modulesNames.controllerName
	]);


}());
},{"./controllers":2,"./names":4}],4:[function(require,module,exports){
var modulesNames = (function () {
    function modulesNames() {
    }
    modulesNames.appName = "MainApp";
    modulesNames.controllerName = "MainApp.Controllers";
    modulesNames.servicesNames = "MainApp.Services";
    return modulesNames;
})();
exports.modulesNames = modulesNames;
var controllerNames = (function () {
    function controllerNames() {
    }
    controllerNames.TestController = "TestController";
    return controllerNames;
})();
exports.controllerNames = controllerNames;
//# sourceMappingURL=names.js.map
},{}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW51cCBOYW1iaWFyXFxEb2N1bWVudHNcXFZpc3VhbCBTdHVkaW8gMjAxM1xcUHJvamVjdHNcXFNhbXBsZUFwcFxcU2FtcGxlQXBwXFxub2RlX21vZHVsZXNcXGd1bHAtYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9BbnVwIE5hbWJpYXIvRG9jdW1lbnRzL1Zpc3VhbCBTdHVkaW8gMjAxMy9Qcm9qZWN0cy9TYW1wbGVBcHAvU2FtcGxlQXBwL3R5cGVzY3JpcHQvYXBwL2NvbnRyb2xsZXJzL1Rlc3RDb250cm9sbGVyLmpzIiwiQzovVXNlcnMvQW51cCBOYW1iaWFyL0RvY3VtZW50cy9WaXN1YWwgU3R1ZGlvIDIwMTMvUHJvamVjdHMvU2FtcGxlQXBwL1NhbXBsZUFwcC90eXBlc2NyaXB0L2FwcC9jb250cm9sbGVycy9pbmRleC5qcyIsIkM6L1VzZXJzL0FudXAgTmFtYmlhci9Eb2N1bWVudHMvVmlzdWFsIFN0dWRpbyAyMDEzL1Byb2plY3RzL1NhbXBsZUFwcC9TYW1wbGVBcHAvdHlwZXNjcmlwdC9hcHAvZmFrZV9mNWQ1M2ExLmpzIiwiQzovVXNlcnMvQW51cCBOYW1iaWFyL0RvY3VtZW50cy9WaXN1YWwgU3R1ZGlvIDIwMTMvUHJvamVjdHMvU2FtcGxlQXBwL1NhbXBsZUFwcC90eXBlc2NyaXB0L2FwcC9uYW1lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBUZXN0Q29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUZXN0Q29udHJvbGxlcih2bSkge1xyXG4gICAgICAgIHRoaXMudm0gPSB2bTtcclxuICAgICAgICB0aGlzLnZtID0gdGhpcztcclxuICAgICAgICB0aGlzLnZtLnRlc3RNZXNzYWdlID0gXCJTdWNjZXNzISEhXCI7XHJcbiAgICB9XHJcbiAgICBUZXN0Q29udHJvbGxlci5wcm90b3R5cGUudGVzdEJ0bkNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudm0udGVzdE1lc3NhZ2UgPSBcImluIHRoZSBidXR0b24gY2xpY2tcIjtcclxuICAgIH07XHJcbiAgICBUZXN0Q29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHNjb3BlXCJdO1xyXG4gICAgcmV0dXJuIFRlc3RDb250cm9sbGVyO1xyXG59KSgpO1xyXG5leHBvcnRzLlRlc3RDb250cm9sbGVyID0gVGVzdENvbnRyb2xsZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRlc3RDb250cm9sbGVyLmpzLm1hcCIsInZhciBUZXN0Q29udHJvbGxlciA9IHJlcXVpcmUoJy4vVGVzdENvbnRyb2xsZXInKTtcclxudmFyIE5hbWVzID0gcmVxdWlyZShcIi4uL25hbWVzXCIpO1xyXG52YXIgSW5kZXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW5kZXgobmFtZXMpIHtcclxuICAgICAgICBhbmd1bGFyLm1vZHVsZShOYW1lcy5tb2R1bGVzTmFtZXMuY29udHJvbGxlck5hbWUsIFtdKS5jb250cm9sbGVyKG5hbWVzLmNvbnRyb2xsZXJOYW1lcy5UZXN0Q29udHJvbGxlciwgVGVzdENvbnRyb2xsZXIuVGVzdENvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEluZGV4O1xyXG59KSgpO1xyXG5leHBvcnRzLkluZGV4ID0gSW5kZXg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIihmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcblx0dmFyIG5hbWVzID0gcmVxdWlyZSgnLi9uYW1lcycpO1xyXG5cdHJlcXVpcmUoJy4vY29udHJvbGxlcnMnKS5JbmRleChuYW1lcyk7XHJcblxyXG5cclxuXHRhbmd1bGFyLm1vZHVsZShuYW1lcy5tb2R1bGVzTmFtZXMuYXBwTmFtZSwgW1xyXG5cdFx0bmFtZXMubW9kdWxlc05hbWVzLmNvbnRyb2xsZXJOYW1lXHJcblx0XSk7XHJcblxyXG5cclxufSgpKTsiLCJ2YXIgbW9kdWxlc05hbWVzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIG1vZHVsZXNOYW1lcygpIHtcclxuICAgIH1cclxuICAgIG1vZHVsZXNOYW1lcy5hcHBOYW1lID0gXCJNYWluQXBwXCI7XHJcbiAgICBtb2R1bGVzTmFtZXMuY29udHJvbGxlck5hbWUgPSBcIk1haW5BcHAuQ29udHJvbGxlcnNcIjtcclxuICAgIG1vZHVsZXNOYW1lcy5zZXJ2aWNlc05hbWVzID0gXCJNYWluQXBwLlNlcnZpY2VzXCI7XHJcbiAgICByZXR1cm4gbW9kdWxlc05hbWVzO1xyXG59KSgpO1xyXG5leHBvcnRzLm1vZHVsZXNOYW1lcyA9IG1vZHVsZXNOYW1lcztcclxudmFyIGNvbnRyb2xsZXJOYW1lcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBjb250cm9sbGVyTmFtZXMoKSB7XHJcbiAgICB9XHJcbiAgICBjb250cm9sbGVyTmFtZXMuVGVzdENvbnRyb2xsZXIgPSBcIlRlc3RDb250cm9sbGVyXCI7XHJcbiAgICByZXR1cm4gY29udHJvbGxlck5hbWVzO1xyXG59KSgpO1xyXG5leHBvcnRzLmNvbnRyb2xsZXJOYW1lcyA9IGNvbnRyb2xsZXJOYW1lcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmFtZXMuanMubWFwIl19
