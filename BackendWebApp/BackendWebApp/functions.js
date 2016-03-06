
function placeAnOrder(orderNumber){
	console.log("Customer Order:", orderNumber);

	cookAndDeliverFood(function () {
		console.log("Delivered food order:" +orderNumber);
	});
}

 function cookAndDeliverFood(callBack) {
	setTimeout(callBack, 4000);
}

console.log("test message");

/*placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
*/
/* javascript DOES NOT HAVE TYPICAL CLASSES: YOU USE FUNCTIONS TO PROTOTYPE AND CREATE OBJECTS*/
function User(name,lifePoints){
	this.name = name;
	this.life = lifePoints;
	this.giveLife = function (targetPlayer, n) {
		if (targetPlayer.life <= 100 - n) {
			targetPlayer.life += n;
			console.log(this.name + " gave life: " + n + " lifepoints!");
			console.log(targetPlayer.name + " was healed " + n + " lifepoints!");
		}
		else {
			targetPlayer.life = 100;
			console.log("Healed " + targetPlayer.name + " to full!"); 
		}
	}
	 
}


var Charles = new User("Charles",100);
var Michael = new User("Michael",10);
Charles.giveLife(Michael, 4);

console.log("Michael life: " + Michael.life);
User.prototype.restZero = 50; /* adding a field to the User Class */
console.log("first I had 50 points, then i exported a reset");
var holder = require('./alternate'); /*variable "holder" has all of the exported methods*/
Charles.restZero = holder.zeroCreator();
console.log("Charles was reset by the export lifepoints to: " +Charles.restZero); /*NEED TO REMEMBER THE PARANTHESES TO INITIALIZE ANY METHOD */

/*IF SOMETHING IS A FUNCCTION LIKE ZEROCREATOR() IT REQUIRES DOUBLE PARANTHESES.
 * IF SOMETHING IS A FIELD IN A FUNCTION OR CLASS IT DOES NOT LIKE CHARLES.RESTZERO!*/