'use strict'


//!------------------------- -2 ----------------------------

const newArray = function (firstNumber, lengthOfArray) {
	let myArray = [];
	for (let i = firstNumber; i < (lengthOfArray + firstNumber); i++) {
		myArray.push(i);
	}
	return myArray;
}

console.log(newArray(15, 8));

function array3 (firstNumber, lengthOfArray) {
	let x = Array.from({ length: (lengthOfArray ) }, (_, i) => i + firstNumber);
	return x;
}

console.log(array3(5, 5));

//! -------------------------0 -----------------------------

function borderColor() {
	let textarea = document.getElementById("textarea");
	let button = document.getElementById("button");
	let note = textarea.value;


	button.onclick = () => {
		let input = document.getElementById("input").value;
		const regExp = new RegExp(`${input}`, "i")

		if (!regExp.test(note) || `${input}` === "") {
			textarea.style.borderColor = "orange";
		} else {
			textarea.style.borderColor = "lime";
		}
	};
}
borderColor();



//!---------------------------1-------------------------------

const doubleCharacter = function () {
	let doubleButton = document.querySelector("#doubleButton");
}
doubleButton.onclick = () => {
	let textarea = document.querySelector("#textarea2");
	let textareaValue = document.querySelector("#textarea2").value;
	console.log(textareaValue);

	let newText = textareaValue.replace(/(\p{Emoji}[^\d+])/gu, "$1$1");
	console.log(newText);
	textarea.value = newText;
};

doubleCharacter();

//!---------------------------- 2 -----------------------------

function replaceText() {
	let ex3Wrapper = document.querySelector(".ex3_wrapper")
	let textarea = document.querySelector("#textarea3");	
	const plusButton = document.querySelector("#plusButton");
	const replaceButton = document.querySelector("#replaceButton");

	plusButton.addEventListener("click", () => {
		let input = document.createElement('input');
		input.classList.add("input3");
		input.setAttribute("type", "text");
		input.setAttribute("placeholder", "Enter text");


		input.addEventListener("dblclick", () => {
			input.remove();
		});
		ex3Wrapper.append(input);
	});

	replaceButton.addEventListener("click", () => {
		let input = document.getElementsByClassName("input3");
		for (let i = 0; i < input.length; i++) {
			let regExp = new RegExp(input[i].value, "gi");
			textarea.value = textarea.value.replace(regExp, "*".repeat(input[i].value.length));
		}
	});
}

replaceText();



