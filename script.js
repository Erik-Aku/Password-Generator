// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "$", "(", ")", ":", ";", "@", "[", "]", "|"]



function generatePassword() {
  // prompt user for password length
  passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters");

  if (!passwordLength) {
    alert("This is a required field");
    generatePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must select a value between 8 and 128")
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
