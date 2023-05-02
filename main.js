'use strict'


//!------------------------- -2 ----------------------------

const newArray = function(firstNumber, lengthOfArray){
	let myArray = [];
	for(let i = firstNumber; i< (lengthOfArray + firstNumber); i++){
		myArray.push(i);
	}
	return myArray;
}

console.log(newArray(6, 15));
function myArray(firstNumber, lengthOfArray){
	let secondArray = [];
	let i = firstNumber;
	while(i < (lengthOfArray + firstNumber)){
		secondArray.push(i);
		i++;
	}
	return secondArray;
}
console.log(myArray(9, 5));



//! -------------------------0 -----------------------------

function borderColor() {
	let textarea = document.getElementById("textarea");
	let button = document.getElementById("button");
	let note = textarea.value;


button.onclick = () => {
	let input = document.getElementById("input").value;
	const regExp = new RegExp(`${input}`, "i")
	console.log(regExp);
	if(!regExp.test(note) || `${input}` === "") {
		textarea.style.borderColor = "orange";
	} else {
		textarea.style.borderColor = "lime";
	}
};
}
borderColor();



//!---------------------------1-------------------------------

const doubleCharacter = function() {
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



