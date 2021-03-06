// Functional Organization Programming
// 1. Sum
// 2. Multiply
// 3. Difference
// 4. Division


// Load Module Dependencies

var Events = require('events');
var math = require('./math');

var workflow = new Events.EventEmitter();

workflow.on('SUM', function sumListener(){
	math.sum(5, 5, function sumCallback(err,ans)){
		if (err) {
			return console.log(err);
		}
		console.log('Sum: ', ans);
		workflow.emiit('MULTIPLY');

		math.multiply(5,5,multiplyCallback);
}});

workflow.emiit('SUM');



function sum(a, b, callback) {
	setTimeout(function() {
		
		callback(null, a + b)

	}, Math.random() * 2000)
}

function multiply(a, b, callback) {
	setTimeout(function() {
		
		callback(null, a * b)

	}, Math.random() * 2000)
}


function difference(a, b, callback) {
	setTimeout(function() {
		
		callback(null, a - b)

	}, Math.random() * 2000)
}

function division(a, b, callback) {
	setTimeout(function() {
		
		callback(null, a / b)

	}, Math.random() * 2000)
}

// Define Callback Handling logic

function sumCallback(err, ans) {
	if(err) {
		return console.log(err);
	}

	console.log('Sum: ', ans);

	math.multiply(5,5,multiplyCallback);
	}


	

function multiplyCallback (err, result){
	if(err) {
		return console.log(err);
	}

	console.log('Multiply:', result);
	math.difference(5,5,differenceCallback);
}

function differenceCallback(err,result){
	if(err) {
			return console.log(err);
		}

		console.log('Difference:', result);
		math.division(5,5,divisionCallback);
}
function divisionCallback(err,result){
	if(err) {
			return console.log(err);
		}

		console.log('Division:', result);
}






