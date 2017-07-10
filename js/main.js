console.log("Hello")

var today = "Monday"

console.log("What day is today?", today)

const myName = "Dan";

let month = "July";

console.log("The month is", month)

let hoursInAYear = 24 * 365;
console.log("hoursInAYear", hoursInAYear);

let minsInDecade = (hoursInAYear * 60) * 10;
console.log("minsInDecade", minsInDecade)

let age = 42;
let secondsInYear = hoursInAYear * 60 * 60;
let ageInSeconds = secondsInYear * age;
console.log("ageInSeconds", ageInSeconds)

let myShoppingList = ["fruit", "milk", "peanut butter", "avacado"];
console.log("the second item is", myShoppingList[1]);

let newValue = "2" * 2;
console.log("what is the value?", newValue)

let wiseAge = 45;
if (age > wiseAge) {
	console.log("You are wise.")
}  else  {
	console.log("You are too young to be useful.")
}

let phrase = "<p>Live long and prosper.</p>";
let phraseHolder = document.getElementById("phrase");
phraseHolder.innerHTML += phrase;

let myNumber = 2.34566868;
let shortNum = myNumber.toFixed(2);
console.log("shortNum", shortNum)

