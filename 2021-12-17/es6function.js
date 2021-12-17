// ES6 Functions
// map, reduce, forEach, filter, find
// ES6 = ECMAScript

// 1. display array of colors (forEach)

const colors = ["red", "blue", "green", "yellow", "yellow", "black"];

// colors.forEach(displayItem)
// 1. displayItem("red") 
// 2. displayItem("blue")
// 3. displayItem("green")

// for (const color of colors) {
// 	console.log(color);
// }

// colors.forEach(color => {
// 	console.log(color);
// });

const displayItem = item => console.log(item); 
const displayQuotedItem = item => {
	console.log(`"${item}"`);
};
const displayParenthesesItem = item => {
	console.log(`(${item})`);
};

const displayMethods = [displayItem, displayQuotedItem, displayParenthesesItem];

// const processMethods = [addStateTax, addCountryTax, informDhl]

// for (const displayMethod of displayMethods) {
// 	colors.forEach(displayMethod);
// }

colors.forEach(displayItem);
