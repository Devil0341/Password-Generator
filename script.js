// Assignment Code-given
var generateBtn = document.querySelector("#generate");

//mycode


var charCount = [];//length of array
var specialChar =["!","'","#","$","%","&","(",")",",", "*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]; 
var upperC = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');//strings
var lowerC = ('abcdefghijklmnopqrstuvwxyz');//strings
var numeric =[0,1,2,3,4,5,6,7,8,9,];

//characters min 8 and max 128


// Write password to the #password input-given
function writePassword() {
  var password = generatePassword();//given
  var passwordText = document.querySelector("#password");//given
  
  //setup variables for booleans

  var chooseSpecialChar = window.confirm('Do you want special characters to be included?');
  var chooseUpperC = window.confirm('Do you want upper case characters to be included?');
  var chooseLowerC = window.confirm('Do you want lower case characters to be included?');
  var chooseNumericChar = window.confirm('Do you want numeric characters to be included?');
  var newPassword = [];//Empty array will have all user inputs pushed into if true
  
  //Need to ask user the character length desired in prompt and store the length of variables, and handle with conditional statement for out of bounds inputs
  charCount = window.prompt('How many characters would you like your password to contain? Choose between 8 and 128.')
  if (charCount < 8 || charCount > 128){
    window.alert('This needs a value between 8 and 128')
    
    //If all booleans are false
    }else if (chooseSpecialChar === false && chooseUpperC === false && chooseLowerC === false &&      
           chooseNumericChar === false){
          window.prompt('Error, must choose a value')
    
    //continue asking user for inputs and push to an empty array
    }else if(chooseSpecialChar === true){
              newPassword.push(specialChar)

    } else if (chooseUpperC === true){
               newPassword.push(upperC)

    } else if (chooseLowerC === true){
               newPassword.push(lowerC)

    }else (chooseNumericChar === true)
           newPassword.push(numeric)

   
    
       
      
           // ------------NEED HELP HERE----------
          
           generatePassword = [Math.floor(Math.random()*newPassword.length)];
    
          //Created a var length to use the variable charCount that stored user input
          //for loop to loop through the new array newPassword with user input length
          var length = charCount.length
          for (var i = 0; i < length; i++){
            generatePassword[i];
          };
          
      
// ------------NEED HELP HERE----------
  passwordText.value = password;//Where the text value is put in the generatePassword

};//end of block
writePassword();



// Add event listener to generate button-given
// ------------NEED HELP HERE----------
generateBtn.addEventListener("click", writePassword);{
generateBtn.addEventListener(password);
}