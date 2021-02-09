// Assignment Code-given
var generateBtn = document.querySelector("#generate");

//Global variables--// need forward slash
var specialChar =["!","'","#","$","%","&","(",")",",", "*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]; 
 var upperC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];//array
 var lowerC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //array
 var numeric =['0','1','2','3','4','5','6','7','8','9'];//array

// FUNCTION-1 Write password to the #password input-given --writes to html, Function 2 generates the password and puts it in here--unsure about if statement
function writePassword() {
  var password = generatePassword();//given
  var passwordText = document.querySelector("#password");//given
  if (password){
  passwordText.value = password;
  }
};//end of block

  //FUNCTION-2 not inside of FUNCTION-1
function generatePassword (){
  
//Dynamic local function variables
  var passwordString ='';//use this string in  the for loop 
  var arrayHolderPassword = []//Empty array will have all user inputs .push.apply into if true
  var chooseSpecialChar = window.confirm('Do you want special characters to be included?');
  var chooseUpperC = window.confirm('Do you want upper case characters to be included?');
  var chooseLowerC = window.confirm('Do you want lower case characters to be included?');
  var chooseNumericChar = window.confirm('Do you want numeric characters to be included?');
  
  //Need to ask user the character length desired in prompt and store the length of variable, and handle with conditional. later use in 'for loop'
  var numberOfCharacters = window.prompt('How many characters would you like your password to contain? Choose between 8 and 128.');
    if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
      window.alert('This needs a value between 8 and 128! Start Over.') 
      return; //handling error of out of bounds value and nan
      }
    // continue asking user for inputs and push to an empty array in nested if statement of else 
    if(chooseSpecialChar){
          Array.prototype.push.apply(arrayHolderPassword, specialChar);
      }
    
    if (chooseUpperC){
           Array.prototype.push.apply(arrayHolderPassword, upperC);
      }

    if (chooseLowerC){
           Array.prototype.push.apply(arrayHolderPassword, lowerC);
      }
      
    if (chooseNumericChar){
           Array.prototype.push.apply(arrayHolderPassword, numeric);
      }
      
      
      //-----------------Not sure if needed error handling here----------------------------------------
      //if no inputs were entered for length this handles the error
        // if (arrayHolderPassword.length === 0){
        //   alert("At least one charcater type must be selected to generate a password Try again")
        // }
//Run loop in else statement outside of above elseif statement
      else{
//Created a var length to use the variable charCount that stored user input
//for loop to loop through the new array newPassword with user input length
         for (var i = 0; i < numberOfCharacters; i++){
            var newPasswordIndex = Math.floor(Math.random()*arrayHolderPassword.length);
            passwordString += arrayHolderPassword[newPasswordIndex];//this means passwordString = passwordString'' + container with all the characters indexed at a random number--do not understand how this mixes all characters.
            console.log(passwordString);
            //need to make a string of result
            }//end of loop
           return(passwordString); 
        //}//end of last else statement
      }//end of nested else if statement
} //end of generate password function block




// Add event listener to generate button-given
// ------------NEED HELP HERE----------
generateBtn.addEventListener("click", writePassword);{

}