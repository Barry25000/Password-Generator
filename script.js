// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() { //Start of password loop
var upperCaseSet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numberSet = [0,1,2,3,4,5,6,7,8,9]
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-"]
var userPickedCharacterSet = []
// varables defined as well as storage array created for character set

// sets password length
var pLength = parseInt(window.prompt("enter a number between 8 and 128") )
console.log(typeof pLength);

 
    if (pLength >= 8 && pLength <= 128) { //check password length
       console.log(pLength); 
      var isUpperCase = confirm("Do you want uppercase?") // checking conditions
      console.log(isUpperCase);
      var isNumber = confirm("Do you want numbers?")
      console.log(isNumber);

      var isLowerCase = confirm("Do you want lower case?")
      console.log(isLowerCase);

      var isSpecial = confirm("Do you want special characters?")

        //check for atleast one condition picked?
      if (isUpperCase || isNumber || isLowerCase || isSpecial) { 
        console.log("working");
        if (isUpperCase) {
          userPickedCharacterSet = userPickedCharacterSet.concat(upperCaseSet)
        }
        if (isNumber) {
          userPickedCharacterSet = userPickedCharacterSet.concat(numberSet)
        }

        if (isLowerCase) {
          userPickedCharacterSet = userPickedCharacterSet.concat(lowerCase)
        }

        if (isSpecial) {
          userPickedCharacterSet = userPickedCharacterSet.concat(specialChar)
        }

        console.log(userPickedCharacterSet);

        var outPutPassword = ""

          // start of password generation
        for (var i = 0; i < pLength; i++) {
          console.log("hello");
        var randomChar = userPickedCharacterSet[Math.floor(Math.random()*userPickedCharacterSet.length)]
        outPutPassword = outPutPassword + randomChar
      }
      console.log(outPutPassword);
        return outPutPassword;
      } else {
        console.log("Please pick at least 1 character set");
        generatePassword();
      }
    }
    else {
      alert("Please enter a number between 8 and 128")
      generatePassword();  //Re-run password loop
    }

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //output password
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
 