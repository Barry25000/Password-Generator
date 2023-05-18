// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var upperCaseSet = ["A","B","C"];
var numberSet = [1,2,3]
var userPickedCharacterSet = []


// sets password length
var pLength = parseInt(window.prompt("enter a number between 8 and 128") )
console.log(typeof pLength);

 // run frogram to check for number, if false redirect for a number
    if (pLength >= 8 && pLength <= 128) {
       console.log(pLength); 
      var isUpperCase = confirm("Do you want uppercase?")
      console.log(isUpperCase);
      var isNumber = confirm("Do you want numbers?")
      console.log(isNumber);
      if (isUpperCase || isNumber) {
        console.log("working");
        if (isUpperCase) {
          userPickedCharacterSet = userPickedCharacterSet.concat(upperCaseSet)
        }
        if (isNumber) {
          userPickedCharacterSet = userPickedCharacterSet.concat(numberSet)
        }
        console.log(userPickedCharacterSet);
        for (var i = 0; i < pLength; i++) {
          console.log("hello");
        var randomChar = userPickedCharacterSet[Math.floor(Math.random()*userPickedCharacterSet.length)]
      console.log(randomChar);  
      }
      } else {
        console.log("Please pick at least 1 character set");
        generatePassword();
      }
    }
    else {
      alert("Please enter a number between 8 and 128")
      generatePassword();
    }

  }

// var upperCase = window.prompt("Do you want upper case letters Yes or No");
//   console.log(upperCase);

// Write password to the #password input
function writePassword() {
// alert("working")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword() {
  // return("hello")
  
//   function myFunction() 
 