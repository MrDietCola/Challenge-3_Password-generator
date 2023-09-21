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

var passwordCharLength;
var lowercase = [false, "no  "];
var uppercase = [false, "no  "];
var numeric = [false, "no  "];
var specialCharacter = [false, "no  "];
var lowercaseLetters = "abcdefghijclmnopqrstuvwxyz"

function writePassword() {
password = "";
passwordText.value = password;
passwordLength();
}

function passwordLength() {
  passwordCharLength = (prompt("Select amount of characters in password"));
    if (passwordCharLength >= 8 && passwordCharLength <= 128) {
      askLowercase();
    } else { 
      alert("password must be between 8 and 128 characters");
      passwordLength();
    }
  }

function askLowercase() {
  if (confirm("Include lowercase?")) {
    // lowercase[0] = true;
    lowercase[1] = "yes  ";
    possibleChoices = "abcdefghijklmnopqrstuvwxyz";
    askUppercase();
  } else {
    askUppercase();
  }
}

function askUppercase() {
  if (confirm("Include uppercase?")) {
    // uppercase[0] = true;
    uppercase[1] = "yes  ";
    possibleChoices = possibleChoices + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    askNumeric();
  } else {
    askNumeric();
  }
}

function askNumeric() {
  if (confirm("Include number?")) {
    // numeric[0] = true;
    numeric[1] = "yes  ";
    possibleChoices = possibleChoices + "0123456789";
    askSpecialCharacter();
  } else {
    askSpecialCharacter();
  }
}

function askSpecialCharacter() {
  if (confirm("Include special character?")) {
    // specialCharacter[0] = true;
    specialCharacter[1] = "yes  ";
    possibleChoices = possibleChoices + "!@#$%^&*()=+-_[]|,./<>?";
    confirmChoices();
  } else {
    confirmChoices();
  }
}

function confirmChoices() {
  if (confirm("Confirm choices: " + "Password length: " + passwordCharLength + "  Lowercase: " + lowercase[1] + " Uppercase: " + uppercase[1] + " Number: " + numeric[1] + " Special character: " + specialCharacter[1])) {
    generatePassword();
    console.log("possible choices = " + possibleChoices);
  } else {
    console.log("possible choices = " + possibleChoices);
    resetChoices();
    writePassword();
  }
} 

function resetChoices() {
  lowercase = [false, "no  "];
  uppercase = [false, "no  "];
  numeric = [false, "no  "];
  specialCharacter = [false, "no  "];
}

var password = "";
var possibleChoices;
var character;
// var lowercaseO = "abcdefghijklmnopqrstuvwxyz";
// var uppercaseO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numeric = "0123456789";
// var specialCharacterO = "!@#$%^&*()=+-_[]|,./<>?";

function generatePassword() {
for (i=1; i<=passwordCharLength; i++) {
  character = Math.floor(Math.random() * possibleChoices.length);
  password += possibleChoices.charAt(character);
  // password += character; 
} console.log("password = " + password);
passwordText.value = password;
}

// function possiblePasswordCharacters() {
// if (password.includes)
// }

// function checkForLc () {
//   if ()
// }