var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Enter a number from 0 to 6:");
	if (guess < 0 || guess > 6) {
		alert("Wrong number");
	} else {
		guesses = guesses + 1;
			if (guess == location1 || guess == location2 || guess == location3) {
				alert("Hit!")
				hits = hits + 1;
				if (hits == 3) {
					isSunk = true;
					alert("You sank my battleship");
				}
			} else {
				alert("Miss!")
			}
	}
}
var stats = "you took " + guesses + " guesses to sink the battleship, " + 
			"which means your shooting accuracy was " + (3/guesses);
alert(stats);

