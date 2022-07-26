// function MissingDigit(str) {
//     let arr = (str.split(" "))

//     let a = arr[0]
//     let b = arr[2]
//     let operand = arr[1]
//     let result = arr[4]

//     let indexOfX
//     arr.forEach((item, ind) => {
//         if (item.indexOf("x") !== -1) {
//             indexOfX = ind
//         }
//     })
//     let xNumber = arr[indexOfX]

//     // calculate number that has missing digit
//     let number
//     if (indexOfX === 0) {
//         switch (operand) {
//             case "+":
//                 number = result - b
//                 break;
//             case "-":
//                 number = result + b
//                 break;
//             case "*":
//                 number = result / b
//                 break;
//             case "/":
//                 number = result * b
//                 break;
//         }
//     } else if (indexOfX === 2) {
//         switch (operand) {
//             case "+":
//                 number = result - a
//                 break;
//             case "-":
//                 number = a - result
//                 break;
//             case "*":

const missingDigit = (string) => {
	let str = string.split(" ");
	const xloca = [];
	const sloca = [];
	const arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	str.forEach((el, i) => {
		if (el.indexOf("x") !== -1) {
			xloca.push(i);
		}
		if (el.indexOf("=") !== -1) {
			sloca.push(i);
		}
	});
	if (xloca > sloca) {
		return eval(str.slice(0, sloca).join(""));
	} else if (xloca < sloca) {
		let hasil
        arrNum.forEach((num) => {
			const strCopy = [...str];
			strCopy[xloca] = strCopy[xloca].replace("x",num)
			if(eval(strCopy.slice(0,sloca).join("")) === parseInt(strCopy[strCopy.length-1])){
                hasil = num
			}
		});
        return hasil
	}

};

console.log(missingDigit("4 - 2 = x")) //output : 2
console.log(missingDigit("1x0 * 12 = 1200")); // output = 0
