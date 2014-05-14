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
		test("Should be able to add two numbers",function(){
			//Arrange
			var number1 = 10,
				number2 = 20,
				expectedResult = 30;

			//Act
			var result = add(number1, number2);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add numbers in string format", function(){
			//Arrange
			var number1 = "10",
				number2 = "20",
				expectedResult = 30;

			//Act
			var result = add(number1, number2);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to treat non numeric strings as zero", function(){
			//Arrange
			var number1 = "abc",
				number2 = "20",
				expectedResult = 20;

			//Act
			var result = add(number1, number2);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add only one number", function(){
			//Arrange
			var number1 = 10,
				expectedResult = 10;

			//Act
			var result = add(number1);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add more than two numbers", function(){
			//Arrange
			var number1 = 10,
				number2 = 20,
				number3 = 30,
				number4 = 40,
				expectedResult = 100;

			//Act
			var result = add(number1,number2, number3, number4);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add functions returning numbers", function(){
			//Arrange
			var f1 = function(){ return 10; },
				f2 = function(){ return 20; },
				expectedResult = 30;

			//Act
			var result = add(f1,f2);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add functions returning numbers in string format", function(){
			//Arrange
			var f1 = function(){ return "10"; },
				f2 = function(){ return "20"; },
				expectedResult = 30;

			//Act
			var result = add(f1,f2);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add functions returning function returing number in string format", function(){
			//Arrange
			var f1 = function(){ return function(){ return "10"; }},
				f2 = function(){ return function(){ return "20"; }},
				expectedResult = 30;

			//Act
			var result = add(f1,f2);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add an array of numbers", function(){
			//Arrange
			var numbers = [10,20,30,40,50];
				expectedResult = 150;

			//Act
			var result = add(numbers);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add a list of array of numbers", function(){
			//Arrange
			var numbers1 = [10,20],
			    numbers2 = [30,40,50];
				expectedResult = 150;

			//Act
			var result = add(numbers1,numbers2);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add a nested array of numbers", function(){
			//Arrange
			var numbers = [10,[20,[30,[40,[50]]]]];
				expectedResult = 150;

			//Act
			var result = add(numbers);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add an array of functions returning function returing number in string format", function(){
			//Arrange
			var f1 = function(){ return function(){ return "10"; }},
				f2 = function(){ return function(){ return "20"; }},
				arrayOfFunctions = [f1,f2],
				expectedResult = 30;

			//Act
			var result = add(arrayOfFunctions);

			//Assert
			return result === expectedResult;
		});
		test("Should be able to add an array of functions returning function returing array of number in string format", function(){
			//Arrange
			var f1 = function(){ return function(){ return ["10",20]; }},
				f2 = function(){ return function(){ return ["30",40,"50"]; }},
				arrayOfFunctions = [f1,f2],
				expectedResult = 150;

			//Act
			var result = add(arrayOfFunctions);

			//Assert
			return result === expectedResult;
		});
		test("Should be return zero when invoked with no arguments", function(){
			//Arrange
			var expectedResult = 0;

			//Act
			var result = add();

			//Assert
			return result === expectedResult;
		});
	}
})(window,document)