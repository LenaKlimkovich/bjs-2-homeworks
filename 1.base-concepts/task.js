"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	let root1;
	let root2;
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr.push(-b / (2 * a))
	} else if (d > 0) {
		root1 = (-b + Math.sqrt(d)) / (2 * a);
		root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentRate = percent / 100;
	let mortgageBody = amount - contribution;
	let montlyPercent = percentRate / 12;
	let monthlyPayment = mortgageBody * (montlyPercent + (montlyPercent / (((1 + montlyPercent) ** countMonths) - 1)))
	let morgageTotal = Math.round(monthlyPayment * countMonths * 100) / 100;
	return morgageTotal;
}