// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// check passworkd length between 8 to 128 character
// includes lowercase, uppercase, numeric and/or special characters
// tell person what variables they have agreed on
// display in alert or on page

// function getUserChoice() {
//   confirm("Include lowercase?") {
//     if 
//   }
// }
var passwordText = document.querySelector("#password");


var lowercase = [false, "no  "];
var uppercase = [false, "no  "];
var numeric = [false, "no  "];
var specialCharacter = [false, "no  "];

function writePassword() {
askLowercase();
}

function askLowercase() {
  if (confirm("Include lowercase?")) {
    lowercase[0] = true;
    lowercase[1] = "yes  ";
    askUppercase();
  } else {
    askUppercase();
  }
}

function askUppercase() {
  if (confirm("Include uppercase?")) {
    uppercase[0] = true;
    uppercase[1] = "yes  ";
    askNumeric();
  } else {
    askNumeric();
  }
}

function askNumeric() {
  if (confirm("Include number?")) {
    numeric[0] = true;
    numeric[1] = "yes  ";
    askSpecialCharacter();
  } else {
    askSpecialCharacter();
  }
}

function askSpecialCharacter() {
  if (confirm("Include special character?")) {
    specialCharacter[0] = true;
    specialCharacter[1] = "yes  ";
    confirmChoices();
  } else {
    confirmChoices();
  }
}

function confirmChoices() {
  if (confirm("Confirm choices: " + "Lowercase: " + lowercase[1] + "Uppercase: " + uppercase[1] + "Number: " + numeric[1] + "Special character: " + specialCharacter[1])) {
    generatePassword();
  } else {
    writePassword();
  }
} 

function generatePassword() {

}
