const colors = ["red", "blue", "green", "yellow", "yellow", "black"];

const encloseInParentheses = m => `(${m})`;
const convertToUpper = m => m.toUpperCase();
const uppercaseColors = colors.map(convertToUpper);
const finalColors = uppercaseColors.map(encloseInParentheses);

// undefined!
const message1 = finalColors.forEach(m => console.log(m));

console.log(message1);

// console.log(colors);
// console.log(uppercaseColors);
// console.log(finalColors);

// ES6 functions can be chained!

// finalColors.map(m => `// ${m}`).forEach(m => console.log(m));

const message = finalColors.map(m => `---${m}---`).join('|');
console.log(message);

const cities = ['Berlin', 'Hamburg', 'Bremen'];
const quotedCities = cities.map(m => `"${m}"`);
console.log(quotedCities);
const quotedCities2 = cities.map(m => {
	return `"${m}"`;
});
console.log(quotedCities2);
