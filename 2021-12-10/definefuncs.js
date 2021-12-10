const printMessage = (color) => {
	if (color === "red") {
		console.log("warning!");
	} else if (color === "green") {
		console.log("go!");
	} else {
		console.log("---");
	}
};

const printWarningNeutral = (color) => {
	if (color === 'red') {
		console.log('warning!');
	} else {
		console.log('neutral');
	}
};

const colors = ["red","green","yellow","blue","black", "grey"];

const processes = [printMessage, printWarningNeutral, printMessage];

for (const process of processes) {
	colors.forEach(process);
}
