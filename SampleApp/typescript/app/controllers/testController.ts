export interface ITestInterface  {
	testMessage: string;
	testBtnClick():void;
}


export class TestController implements ITestInterface {
	testMessage: string;
	static $inject = ["$scope"];
	constructor(private vm:any) {
		 this.vm = this;
		this.vm.testMessage = "Success!!!";
	}
	testBtnClick():void {
		this.vm.testMessage = "in the button click";
	}

} 