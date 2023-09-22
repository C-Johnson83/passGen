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
  var chars ="abcdefghijklmnopqrstuvwxyz";
  var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var symbs = "!@#$%&";
  var count = prompt("Between 8 and 128 characters,\n\n how many characters would you like your password to be?")

  if (count < 8) {
    alert("The password must be a minimum of 8 characters.\n\nPlease try again");
    generatePassword();
  } else if (count > 128) {
    alert("Calm down a little bit, keep it under 128 characters please.\n\nTry again");
    generatePassword();
  }
var upper = prompt("Would you like to use uppercase characters?\n\nAnswer with y or n");

if(upper === "n") {
  Chars = chars
} else {
  chars = chars + up;
}
var numeral = prompt("Would you like to use numeral characters?\n\nAnswer with y or n");

if(numeral === "n") {
  Chars = chars
} else {
  chars = chars + num;
}
  var symbols = prompt("Would you like to use special characters?\n\nAnswer with y or n");

  if (symbols === "n") {
    chars = chars;
  } else {
    chars = chars + symbs;
  }
  for (var c = 0; (c <= count); c++) {
    var rand = Math.floor(Math.random() * chars.length);
    password += chars.charAt(rand)
  }
  console.log(password);
  return password;
}

