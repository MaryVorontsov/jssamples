/*var myName = 'Marina';
console.log(myName);
console.log(window.myName);*/

/*var addition = function (param1, param2) {
this.a = param1 + param2;
console.log(this);
}
var b = new addition(1, 2);
console.log(b.a);*/

function User(age, name) {
	this.hello = function() {
		console.log(`hello my name is ${name} my age is ${age}`);
	}
}
var man = new User(18, 'Fedya');
man.hello()

var newMan = new User(22, 'Nikita');
newMan.hello();
