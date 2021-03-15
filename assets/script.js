var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "@", "#", "$", "%", "&", "?", "~", "*"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function(){
  var passwordPrompt = window.prompt("Welcome to password generator! Would you like to generate a new password? Type 'Yes' or 'No'.");
  if(passwordPrompt === "Yes" || passwordPrompt === "yes" === "YES"){
    var confirmNewPassword = window.confirm("Let's generate a new password!");

    if(confirmNewPassword){
      window.alert("Let's generate a new passowrd!");
      lowerCaseLetters()
    }
  }else{
    window.alert("Goodbye!");
  };

  var lowerCaseLetters = window.prompt("Would you like lower-case letters in your password? Confirm 'Yes' or 'No'.");
  if(confirmLowerCase === "Yes" || confirmLowerCase === "yes" || confirmLowerCase === "YES"){
    var randomLowerCase = lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
    upperCaseLetters()
  }else{
    confirmUpperCase();
  };

  var upperCaseLetters = window.prompt("Would you like upper-case letters in your password? Confirm 'Yes' or 'No'.");
  if(confirmUpperCase === "Yes" || confirmUpperCase === "yes" || confirmUpperCase === "YES"){
    var randomUpperCase = upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
    numberCharacters()
  }else{
    numberCharacters();
  };

  var numberCharacters = window.prompt("Would you like numbers in your password? Confirm 'Yes' or 'No'.");
  if(confirmNumbers === "Yes" || confirmNumbers === "yes" || confirmNumbers === "YES"){
    var randomNumbers = numberCharacters[Math.floor(Math.random()*numberCharacters.length)];
    specialCharacters()
    }else{
    specialCharacters();
  };

  var specialCharacters = window.prompt("Would you like special characters in your password? Confirm 'Yes' or 'No'.");
  if(confirmSpecialCharacters === "Yes" || confirmSpecialCharacters === "yes" || confirmSpecialCharacters === "YES"){
    var randomUpperCase = upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
    generatePassword()
  }else{
    generatePassword();
  };
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);