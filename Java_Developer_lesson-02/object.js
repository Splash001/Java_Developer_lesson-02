'use strict'

var user = {};
console.log(user);

user.name = 'Pylyp';
user.surname = 'Shevchenko';
console.log(user);

user.name = 'Sergiy';
console.log(user);

delete user.name;
console.log(user);

function sum(obj) {
	var sum = 0;
	for ( var el in obj) {
		if (obj.hasOwnProperty(el)) {
			sum += parseFloat(obj[el]);
		}
	}
	return sum;
}

var employeeSalaries = {
	workerSalarie1 : 1000,
	workerSalarie2 : 1500,
	workerSalarie3 : 1200,
	workerSalarie4 : 1350,
	workerSalarie5 : 800
}

var summed = sum(employeeSalaries);

console.log('Total amount of salaries for workers is: ' + summed);
