// Assignment Code
var generateBtn = document.querySelector("#generate");
// array sets
var lowerCasePswrd= ["asdfghjklqwertyuiopzxcvbnm"];
  var upperCasePswrd= ["QWERTYUIOPASDFGHJKLZXCVBNM"];
  var numberPswrd= ["1234567890"];
  var specialCharPswrd= ["@%+\/'!#$^?:,)(}{][~-_."];

function generatePassword(userChoices) {
  // leave empty for placeholder
  var pass = ""
  // let allcharacter = lowercase
  var allChars = lowerCasePswrd;
//  if they say true to the following questions then all will be added.
  if (userChoices.upperCase=== true && userChoices.numberChar=== true && userChoices.specialChar=== true){
  allChars.push(upperCasePswrd) && allChars.push(numberPswrd) && allChars.push(specialCharPswrd) } 
  allChars = allChars.join('')
// This allows me to set a loop so I can make sure the password length is right. The += makes it so that the allchars are added to loop of the things in the function so it can as right instead of the loop being bugged.
  for (var i = 0; i < userChoices.passkey; i++) {
   pass += (allChars).charAt(Math.floor(Math.random()*allChars.length));
    
  }
  return pass
}
function getUserOptions() {
  var userChoices = {};
  // ask for length in # form
  var passkey = parseInt(prompt('Choose a # 8-128 for the length of you password'))
  // allow to check if the password length is a #
  if (Number.isNaN(passkey)) {
    window.alert('A number was not entered for password length');
    return null;
  }
  // if number is at least 8 chars long or more than 128 long then error message appears
  if (passkey < 8 || passkey > 128) {
    window.alert(' Try again please characters must be at least 8 long and no more than 128 characters long')
    return null;
  }
  userChoices.passkey = passkey
  // ask for uppercase
  var upperCase= confirm('Do you want uppercase?')
  userChoices.upperCase= upperCase;
  // ask for #
  var numberChar= confirm('Do you want numbers?')
  userChoices.numberChar= numberChar;
  // ask for special chars
  var specialChar= confirm('Do you want special characters?')
  userChoices.specialChar= specialChar;
  // if all this false password will not be generated. You must choose atleast one or window alert will pop up.
  if (userChoices.upperCase=== false && userChoices.numberChar=== false && userChoices.specialChar=== false) {
    window.alert('You must atleast choose one of the questions.')
    return null;
  }
  return userChoices;
}
// #password input to write password.
function writePassword() {
  // user options here.
  var userChoices = getUserOptions();
  var password = generatePassword(userChoices);
  var passwordText = document.querySelector("#password");
      

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
