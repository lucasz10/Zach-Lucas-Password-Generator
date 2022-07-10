
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialChar = '!@#$%^&*_-+=';

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    //Resets variables if user wants to rerun password generation 
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialChar = '!@#$%^&*_-+=';

    // Allows user to input password length 
    var passLength = window.prompt("How long would you like your password to be? Please enter a value between 8 and 128.");
   
    if(!passLength){

        window.alert("Please click on Generate Button to begin again.") //Returns if user cancels at the beginning
        return;

    } else if(passLength < 8 || passLength > 129) {
      window.alert("That integer is not between 8 and 128. Please click generate password to restart.")
      return; 
    }
  

    // Allows user confirmation on password generation criteria  
    var lowSelect = window.confirm("Would you like there to be lower case characters in your password? Click ok to confirm.")
    var upperSelect = window.confirm("Would you like there to be upper case characters in your password? Click ok to confirm.")
    var numberSelect = window.confirm("Would you like there to be number values in your password? Click ok to confirm.")
    var specialSelect = window.confirm("Would you like there to be special characters in your password? Click ok to confirm.")
    
    //Catches if user did not select any characters to use.
    if(!lowSelect && !upperSelect && !numberSelect && !specialSelect){
      window.alert("You need to select at least one character type to use!\nPlease click generate button and start over.")
      return;
    }

    // Creates string values for following window
    // If user declined usage of specific characters, deletes characters from string variables above

    if(lowSelect){
      var lowSelectConfirm = "Yes";
    } else {
      var lowSelectConfirm = "No";
      lowerCase = '';
    }

    if(upperSelect){
      var upperSelectConfirm = "Yes";
    } else {
      var upperSelectConfirm = "No";
      upperCase = '';
    }

    if(numberSelect){
      var numberSelectConfirm = "Yes";
    } else {
      var numberSelectConfirm = "No";
      numbers = '';
    }

    if(specialSelect){
      var specialSelectConfirm = "Yes";
    } else {
      var specialSelectConfirm = "No";
      specialChar = '';
    }

    // Checks if user is confirming previously selected parameters
    var passConfirm = window.confirm("These are your selected parameters: \n Password Length: " + passLength + "\n Lower Case: " + lowSelectConfirm + "\n Upper Case: " + upperSelectConfirm + "\n Numbers: " + numberSelectConfirm + "\n Special Characters: " + specialSelectConfirm + "\nIf you'd like to proceed, press ok.");

    if(!passConfirm){
      window.alert("Please click Generate Password to start again.");
      return;
    }


    var passPara = lowerCase + upperCase + numbers + specialChar;
    var newPass = ''

    console.log(passPara); //console trouble shooting to verify characters are passed along correctly

    for ( var i = 0; i < passLength; i++ ) {
      newPass += passPara.charAt(Math.floor(Math.random() * passPara.length)); //Generates completely random string based on previous inputs
    }

    return newPass;

   
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

