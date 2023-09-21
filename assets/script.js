// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  var chars
  var count = prompt("Between 8 and 128 characters,\n\n how many characters would you like your password to be?")

  if (count < 8) {
    alert("The password must be a minimum of 8 characters.\n\nPlease try again");
    generatePassword();
  } else if (count > 128) {
    alert("Calm down a little bit, keep it under 128 characters please.\n\nTry again");
    generatePassword();
  }

  var symbols = prompt(" would you like to use special characters?\n\nAnswer with y or n")

  if (symbols === "n") {
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else {
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'" + '!"#$%&()*+,-./:;<=?@[]^_`{|}~';
  }
  for (var c = 0; (c <= count); c++) {
    var rand = Math.floor(Math.random() * chars.length);
    password += chars.charAt(rand)
  }
  console.log(password);
  return password;
}

