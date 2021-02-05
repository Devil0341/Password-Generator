// Assignment Code-given
var generateBtn = document.querySelector("#generate");

//mycode
var charCount = [];
var specialChar =[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
//characters min 8 and max 128


// Write password to the #password input-given
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //need to ask user the character countn in prompt ans store variables, and handle ith conditional statement
  charCount = window.prompt('How many characters would you like your password to contain')
  if (charCount < 8 || charCount > 128){
  window.alert('Must be at least 8 characters')
}
//Need to ask user which characters types are to be included
specialChar = window.confirm('Do you want special characters to be included?');
if (specialChar){
//   put this into the random array variable not made yet--stopped here 1.5.21
// 
}

  passwordText.value = password;

}//end of block
writePassword();

// Add event listener to generate button-given
generateBtn.addEventListener("click", writePassword);

//--------------write the logicals

window.confirm('Do you want numeric characters to be included?');

window.confirm('Do you want lowercase characters to be included?');

window.confirm('Do you want uppercase characters to be included?');