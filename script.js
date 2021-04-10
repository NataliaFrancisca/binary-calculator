let buttons = [...document.getElementsByTagName("button")];
let res = document.getElementById("res");

let firstValue = 0;
let secondValue = 0;
let operatorButton = "";

for(let x = 0; x < buttons.length; x++){

	buttons[x].addEventListener("click", () => {

		let innerButton = buttons[x].innerHTML;
		res.innerHTML += innerButton;

		//clean result screen
		if(innerButton === "C"){
			res.innerHTML = "";
			return;
		}

		//Take the first result,the operator button and clean the result screen
		if(innerButton === "+" || innerButton === "-" ||
			innerButton === "*" || innerButton === "/"){
				firstValue = parseInt(res.innerHTML);
				operatorButton = innerButton;
				res.innerHTML = "";
				return;
		}

		//Take the second value, and doing the operator
		if(innerButton === "="){
			secondValue = parseInt(res.innerHTML);
			let operatorBinary = operators(operatorButton, firstValue, secondValue);
				res.innerHTML = needZeros(operatorBinary);
				firstValue = 0;
				secondValue = 0;
				return;
		}

	});
}

/*Take the number in binary, convert in to decimal and do the
calculation. Then it return the number in binary again*/

function operators(operator,a,b){

	const valueOne = parseInt(a, 2);
	const valueTwo = parseInt(b, 2);

	let result = 0;

	switch(operator){
		case "+":
			result = valueOne + valueTwo;
			break;

		case "-":
			result = valueOne - valueTwo;
			break;

		case "*":
			result = valueOne * valueTwo;
			break;

		case "/":
			result = valueOne / valueTwo;
			break;

		 default:
        	console.log('default');
	}

	return result.toString(2);
}

//Validation of binary numbers
function needZeros(binaryNumber){

	if(binaryNumber.length < 4){
		return addZero(binaryNumber);
	}else{
		return binaryNumber;
	}
}

/*If the binary numbers is less than 4 digits, it adds
the zeros*/
let separateBinary = [];

function addZero(addBinaryNumber){

	separateBinary = [];

	let numberDivide = addBinaryNumber.split("");

		for(let p in numberDivide){
			separateBinary.push(numberDivide[p]);
		}

		while(separateBinary.length < 4) {
			separateBinary.unshift("0");
		}

	let result = separateBinary.join('');
	return result;
}







