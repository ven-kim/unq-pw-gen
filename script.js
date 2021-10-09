// Assignment code here
// var generateBtn = document.querySelector("#btn");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var lowercaseCheck;
var numberCheck;
var specialCheck;

// Function used to determine the length of the password
function determineLength() {
  passwordLength = prompt("Choose how many characters long you would like your password to be (between 8-128 characters): ");

    if (passwordLength < 8) {
      alert("Password length must be a number between 8-128 characters");
    } else if (passwordLength > 128) {
      alert("Password length must be a number between 8-128 characters");
    } else if (isNaN(passwordLength)) {
      alert("Password length must be a number between 8-128 characters");
    } else {
      alert("The next three prompts will ask you what types of characters you would like to be included in your password. \nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }

    return passwordLength;
}

function generatePassword() {
  determineLength();
    console.log(passwordLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
