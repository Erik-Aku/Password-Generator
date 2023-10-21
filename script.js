// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "$", "(", ")", ":", ";", "@", "[", "]", "|"]
var upperCaseAlpha = [];

var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecialChars;
var wantedChars = [];
var userPassword =[];
var originalArry = [];
var userChoiceArry = [];


function toUppercase(arry) {
upperCaseAlpha =  arry.map(function(x) {return x.toUpperCase();})
return upperCaseAlpha
};


function generatePassword() {
  // prompt user for password length
  passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters");

  if (!passwordLength) {
    alert("This is a required field");
    // generatePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must select a value between 8 and 128")
    console.log(passwordLength);
  } else {
    confirmLowerCase = confirm("Would you like to include lowercase letters?");
    confirmUpperCase = confirm("Would you like to include uppercase letters?");
    confirmNumbers = confirm("Would you like to include numbers?");
    confirmSpecialChars = confirm("Would you like to include special characters?");
  };

  // validate user input. If user does not select an option, alert and prompt for response.
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialChars) {
    alert("You must choose at least 1 option")
  } 
// validate if user chooses 4 character types 
  else if (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSpecialChars) {
    toUppercase(lowerAlpha);
    wantedChars = lowerAlpha.concat(numbers, upperCaseAlpha, specialChars);
  }

// validate if user chooses 3 character types  
else if (confirmLowerCase && confirmNumbers && confirmUpperCase) {
  toUppercase(lowerAlpha);
  wantedChars = lowerAlpha.concat(numbers, upperCaseAlpha );
}
else if (confirmLowerCase && confirmNumbers && confirmSpecialChars) {
  wantedChars = lowerAlpha.concat(numbers, specialChars );
}
else if (confirmLowerCase && confirmUpperCase && confirmSpecialChars) {
  toUppercase(lowerAlpha);
  wantedChars = lowerAlpha.concat(upperCaseAlpha, specialChars );
}
else if (confirmNumbers && confirmUpperCase && confirmSpecialChars) {
  toUppercase(lowerAlpha);
  wantedChars = numbers.concat(upperCaseAlpha, specialChars );
}
 // validate if user chooses 2 character types  
 else if (confirmLowerCase && confirmNumbers) {
  wantedChars = lowerAlpha.concat(numbers);
}
else if (confirmLowerCase && confirmUpperCase) {
  toUppercase(lowerAlpha);
  wantedChars = lowerAlpha.concat(upperCaseAlpha);
  console.log(wantedChars)
}
else if (confirmLowerCase && confirmSpecialChars ) {
  wantedChars = lowerAlpha.concat(specialChars);
}
else if (confirmNumbers && confirmUpperCase) {
  toUppercase(lowerAlpha);
  wantedChars = numbers.concat(upperCaseAlpha);
  console.log(wantedChars)
}
else if (confirmNumbers && confirmSpecialChars) {
  wantedChars = numbers.concat(specialChars);
}
else if (confirmUpperCase && confirmSpecialChars) {
  toUppercase(lowerAlpha);
  wantedChars = upperCaseAlpha.concat(specialChars);
}
  // validate if user chooses 1 character type 
  else if (confirmLowerCase) {
    wantedChars = wantedChars.concat(lowerAlpha);
    console.log(wantedChars);
  }
  else if (confirmNumbers) {
    wantedChars = wantedChars.concat(numbers);
    console.log(wantedChars);
  }
  else if (confirmUpperCase) {
    toUppercase(lowerAlpha);
    console.log(upperCaseAlpha);
    wantedChars = wantedChars.concat(upperCaseAlpha);
  }
  else if (confirmSpecialChars) {
      wantedChars = wantedChars.concat(specialChars);
      console.log(wantedChars);
  };

console.log(wantedChars);
randomPassword();

// Loop through wantedChars array at random based on user the passwordLength prompt from user
function randomPassword() {
console.log(passwordLength)
for (var i = 0; i < passwordLength; i++) {
  var index = wantedChars[Math.floor(Math.random() * wantedChars.length)];
  userPassword.push(index);
}
}
console.log(userPassword);
enforcePasswordRequirements(originalArry, userChoiceArry);

// validate that new password array contains the user requested char types (source= https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/)

originalArry = originalArry.concat(wantedChars);
console.log(originalArry)

userChoiceArry = userChoiceArry.concat(userPassword);
console.log(userChoiceArry);

function enforcePasswordRequirements(arry1, arry2) { 
  originalArry.some(item => userChoiceArry.includes(item)); 
} 

console.log(enforcePasswordRequirements(originalArry, userChoiceArry));

// return wantedChars;
}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
