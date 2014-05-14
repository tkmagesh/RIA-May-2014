(function(window,document){
	function test(testName,testFn){
		var newTestElement = document.createElement("li");
		newTestElement.innerHTML = testName;
		var result = testFn();
		newTestElement.classList.add(result ? "pass" : "fail");
		document.getElementById("ulTestList").appendChild(newTestElement);
	}
	window.addEventListener("DOMContentLoaded",init);
	function init(){
		
		test("A failing test", function(){
			return false;
		});
	}
})(window,document)