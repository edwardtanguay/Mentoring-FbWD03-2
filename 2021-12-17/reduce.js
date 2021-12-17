const numbers = [15.5, 2.3, 1.1, 4.7];


const endArray = numbers.reduce(getSum, []);

// reference = arrays, objects
// value = numbers, string, booleans
function getSum(arr, num) {
	if (num < 10) {
		arr.push(`(${String(num)})`);
	}
	return arr;
}
console.log(endArray);

// let num = 23;
// num = 34;
// console.log(num);

// const names = ['Hans'];
// console.log(names);
// // names.push('Alice');
// // console.log(names);
// names = ['Hans', 'Alice'];