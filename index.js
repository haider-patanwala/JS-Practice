// checkSpeed(180);

// function checkSpeed(speed) {
// 	const speedLimit = 70;
// 	const kmPerPoint = 5;
// 	const maxPoint = 12;

// 	if (speed <= speedLimit) console.log("ok");
// 	else {
// 		const points = Math.floor((speed - speedLimit) / kmPerPoint);
// 		if (points >= maxPoint) console.log("License Revoked");
// 		else console.log("Points:", points);
// 	}
// }

// showNumber(10);

// function showNumber(limit) {
// 	for (let i = 0; i <= limit; i++) {
// 		const message = i % 2 === 0 ? "EVEN" : "ODD";

// 		console.log(i, `   `, message);
// 	}
// }

// const movie = {
// 	title: "a",
// 	year: 2018,
// 	director: "b",
// };

// showProperties(movie);

// function showProperties(obj) {
// 	for (let key in obj)
// 		if (typeof obj[key] === "string") console.log(key, obj[key]);
// }

// showStar(10);

// function showStar(rows) {
// 	for (let i = 0; i <= rows; i++) {
// 		let pattern = "";
// 		for (let j = 0; j < i; j++) pattern += "*";

// 		console.log(pattern);
// 	}
// }

// # Prime Numbers

showPrimes(20);

function showPrimes(limit) {
	for (let number = 2; number <= limit; number++) {
		let isPrime = true;
		for (let factor = 2; factor < number; factor++) {
			if (number % factor === 0) {
				isPrime = false;
				break;
			}
		}
		if (isPrime) console.log(number);
	}
}
