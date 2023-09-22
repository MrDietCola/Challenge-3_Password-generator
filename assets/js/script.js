// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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

// function that will be called by the listening click
function writePassword() {
  resetChoices();
  passwordLength();
}

// prompt for user to choose how long the password will be
function passwordLength() {
  passwordCharLength = (prompt("Select amount of characters in password"));
  if (passwordCharLength >= 8 && passwordCharLength <= 128) {
    askLowercase();
  } else {
    alert("password must be between 8 and 128 characters");
    passwordLength();
  }
}

// confirm message to include lowercase letters
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

// confirm message to include uppercase letters
function askUppercase() {
  if (confirm("Include uppercase?")) {
    uppercaseMessage= "yes  ";
    isUppercasePresent = true;
    possibleChoices = possibleChoices.concat(ucArr);
    askNumber();
  } else {
    askNumber();
  }
}

// confirm message to include numbers
function askNumber() {
  if (confirm("Include number?")) {
    numberMessage = "yes  ";
    isNumberPresent = true;
    possibleChoices = possibleChoices.concat(numArr);
    askSpecialCharacter();
  } else {
    askSpecialCharacter();
  }
}

// confirm message to include special characters
function askSpecialCharacter() {
  if (confirm("Include special character?")) {
    specialCharacterMessage = "yes  ";
    isSpecialCharacterPresent = true;
    possibleChoices = possibleChoices.concat(scArr);
    confirmChoices();
  } else {
    confirmChoices();
  }
}

// confirm message to user to confirm choices made for password
function confirmChoices() {
  if (possibleChoices === "") {
    confirm("You must choose at least one criteria");
    writePassword();
  }
  if (confirm("Confirm choices: " + "Password length: " + passwordCharLength + "  Lowercase: " + lowercaseMessage + " Uppercase: " + uppercaseMessage + " Number: " + numberMessage + " Special character: " + specialCharacterMessage)) {
    generatePassword();
  } else {
    resetChoices();
  }
}

// function to reset variables if user decides to generate another password
function resetChoices() {
  lowercaseMessage = "no  ";
  uppercaseMessage = "no  ";
  numberMessage = "no  ";
  specialCharacterMessage = "no  ";
  possibleChoices = "";
  isLowercasePresent = false;
  isUppercasePresent = false;
  isNumberPresent = false;
  isSpecialCharacterPresent = false;
}

// function to generate a random password based of chosen length and characters from an array of criteria
function generatePassword() {
  count = 0;
  password = "";
  for (i = 1; i <= passwordCharLength; i++) {
    character = Math.floor(Math.random() * possibleChoices.length);
    password += possibleChoices.charAt(character);
  }

// logic to ensure that the password includes at least one character from each of the chosen criteria
  if (isLowercasePresent) {
    count = 0;
    for (var i = 0; i < password.length; i++) {
      if (lcArr.includes(password.charAt(i))) {
        count += 1;
      } 
    }
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
      if (count === 0) {
        generatePassword();
      }
  }

// sets the text value on the html to the generated password
  passwordText.value = password;
}