'use strict'
try {
	var a = 12;
	var b = 31;

	function mathOperations(a, b) {

		console.log("Summ is " + adding());
		console.log("Subtraction " + subtraction());
		console.log("Divison is " + division());
		console.log("Multiplication is " + multipliyng());

		function adding() {
			return a + b;
		}
		function subtraction() {
			return a - b;
		}
		function division() {
			return a / b;
		}
		function multipliyng() {
			return a * b;
		}
	}

	mathOperations(a, b);

	if (!Number.isInteger(a) || !Number.isInteger(b)) {
		throw new SyntaxError("Variables should be numbers");
	}

} catch (err) {
	console.log('error happened---> ' + err);
}