const colors = ["red", "blue", "green", "yellow", "yellow", "black"];

// colors.map(m => m.length).filter(m => m >= 5).forEach(c => console.log(c));
colors.map(m => {
	switch (m) {
		case 'blue':
			return 99;
		default:
			return m.length;
	}
}).filter(m => m >= 5).forEach(c => console.log(c));
// colors.map(function(m) { return m.length}).filter(m => m >= 5).forEach(c => console.log(c));

// const lens = colors.map(m => m.length);

// for (const len of lens) {
// 	console.log(len);
// }
// console.log(lens);

// colors.forEach(color => {
// 	if (color === 'red') {
// 		console.log('warning!');
// 	} else {
// 		console.log('neutral');
// 	}
// });

for (const color of colors) {
	if (color === 'red') {
		console.log('warning!');
	} else {
		console.log('neutral');
	}
}