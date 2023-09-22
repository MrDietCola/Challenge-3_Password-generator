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

var passwordText = document.querySelector("#password");

var passwordCharLength;
var isLowercasePresent = false;
var lowercaseMessage = "no   ";
var isUppercasePresent = false;
var uppercaseMessage = "no   ";
var isNumberPresent = false;
var numberMessage = "no   ";
var isSpecialCharacterPresent = false;
var specialCharacterMessage = "no  ";
var lcArr = "abcdefghijclmnopqrstuvwxyz";
var ucArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numArr = "0123456789"
var scArr = "!@#$%^&*()=+-_[]|,./<>?";
var password = "";
var possibleChoices = "";
var character;
var count = 0;

function writePassword() {
  resetChoices();
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
    lowercaseMessage = "yes  ";
    isLowercasePresent = true;
    possibleChoices = possibleChoices.concat(lcArr);
    askUppercase();
  } else {
    askUppercase();
  }
}

function askUppercase() {
  console.log(possibleChoices);
  if (confirm("Include uppercase?")) {
    uppercaseMessage= "yes  ";
    isUppercasePresent = true;
    possibleChoices = possibleChoices.concat(ucArr);
    askNumber();
  } else {
    askNumber();
  }
}

function askNumber() {
  console.log(possibleChoices);
  if (confirm("Include number?")) {
    numberMessage = "yes  ";
    isNumberPresent = true;
    possibleChoices = possibleChoices.concat(numArr);
    askSpecialCharacter();
  } else {
    askSpecialCharacter();
  }
}

function askSpecialCharacter() {
  console.log(possibleChoices);
  if (confirm("Include special character?")) {
    specialCharacterMessage = "yes  ";
    isSpecialCharacterPresent = true;
    possibleChoices = possibleChoices.concat(scArr);
    confirmChoices();
  } else {
    confirmChoices();
  }
}

function confirmChoices() {
  console.log(possibleChoices);
  if (possibleChoices === "") {
    confirm("You must choose at least one criteria");
    // writePassword();
  }
  if (confirm("Confirm choices: " + "Password length: " + passwordCharLength + "  Lowercase: " + lowercaseMessage + " Uppercase: " + uppercaseMessage + " Number: " + numberMessage + " Special character: " + specialCharacterMessage)) {
    generatePassword();
  } else {
    resetChoices();
  }
}

function resetChoices() {
  lowercaseMessage = "no  ";
  uppercaseMessage = "no  ";
  numberMessage = "no  ";
  specialCharacterMessage = "no  ";
  possibleChoices = "";
  console.log(possibleChoices);
  isLowercasePresent = false;
  isUppercasePresent = false;
  isNumberPresent = false;
  isSpecialCharacterPresent = false;
}

function generatePassword() {
 console.log("generate new password")
  count = 0;
  password = "";
  for (i = 1; i <= passwordCharLength; i++) {
    character = Math.floor(Math.random() * possibleChoices.length);
    password += possibleChoices.charAt(character);
  }
console.log(password);
  if (isLowercasePresent) {
    count = 0;
    for (var i = 0; i < password.length; i++) {
      if (lcArr.includes(password.charAt(i))) {
        count += 1;
      } 
    }
      console.log(count);
      if (count === 0) {
        generatePassword();
      }
  }

  if (isUppercasePresent) {
    count = 0;
    for (var i = 0; i < password.length; i++) {
      if (ucArr.includes(password.charAt(i))) {
        count += 1;
      } 
    }
      console.log(count);
      if (count === 0) {
        generatePassword();
      }
  }
   
  if (isNumberPresent) {
    count = 0;
    for (var i = 0; i < password.length; i++) {
      if (numArr.includes(password.charAt(i))) {
        count += 1;
      } 
    }
      console.log(count);
      if (count === 0) {
        generatePassword();
      }
  }
  
  if (isSpecialCharacterPresent) {
    count = 0;
    for (var i = 0; i < password.length; i++) {
      if (scArr.includes(password.charAt(i))) {
        count += 1;
      } 
    }
      console.log(count);
      if (count === 0) {
        generatePassword();
      }
  }

  passwordText.value = password;
}
