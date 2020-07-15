// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert("Please select criteria for your new password!")
    var length = prompt("please select length between 8 and 128!");
    while(length < 7 || length > 128){
	    alert("That's not right!");
      var length = prompt("please select length between 8 and 128!");
      alert("Now you got it!")
	}
    console.log("password length = " + length + " characters")
    
  var lower = confirm("Do you want to include lowercase letters?") 
    console.log("lowercase = " + lower)
  var upper = confirm("Do you want to include uppercase letters?")
    console.log("uppercase = " + upper) 
  var number = confirm("Do you want to include numeric characters?")
    console.log("numbers = " + number)
  var special = confirm("Do you want to include special characters?")
    console.log("special characters = " + special)
  var password = generatePassword(length, lower, upper, number, special);
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(pwLength, pwLower, pwUpper, pwNumber, pwSpecial){
  var lower = ["abcdefghijklmnopqrstuvwxyz"];
  var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var number = ["0123456789"];
  var special = ["!@#$%^&*()"];
  var finalPassword = ""
 
  if (pwLower===true && pwUpper===true && pwNumber===true && pwSpecial===true){
    var all = (lower + upper + number + special);
      console.log(all)
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
        console.log(generated)
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===true && pwUpper===true && pwNumber===true && pwSpecial===false){
    var all = (lower + upper + number);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===true && pwUpper===true && pwNumber===false && pwSpecial===false){
    var all = (lower + upper);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===true && pwUpper===false && pwNumber===false && pwSpecial===false){
    var all = (lower);
    var generated;
    var stringSplit = all[0].split("")
    for (var i = 0; i < pwLength; i++) {
      generated = Math.floor(Math.random() * stringSplit.length);
      finalPassword += stringSplit[generated]; 
    }
  }
  if (pwLower===false && pwUpper===true && pwNumber===true && pwSpecial===true){
    var all = (upper + number + special);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===false && pwUpper===false && pwNumber===true && pwSpecial===true){
    var all = (number + special);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===false && pwUpper===false && pwNumber===false && pwSpecial===true){
    var all = (special);
    var generated;
    var stringSplit = all[0].split("")
    for (var i = 0; i < pwLength; i++) {
      generated = Math.floor(Math.random() * stringSplit.length);
      finalPassword += stringSplit[generated]; 
    }
  }
  if (pwLower===false && pwUpper===true && pwNumber===false && pwSpecial===false){
    var all = (upper);
    var generated;
    var stringSplit = all[0].split("")
    for (var i = 0; i < pwLength; i++) {
      generated = Math.floor(Math.random() * stringSplit.length);
      finalPassword += stringSplit[generated]; 
    }
  }
  if (pwLower===false && pwUpper===false && pwNumber===true && pwSpecial===false){
    var all = (number);
    console.log(all.length)
    var generated;
    for (var i = 0; i < pwLength; i++) {
      generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated];
    } 
  }
  if (pwLower===true && pwUpper===false && pwNumber===false && pwSpecial===true){
    var all = (lower + special);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===true && pwUpper===false && pwNumber===true && pwSpecial===false){
    var all = (lower + number);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===false && pwUpper===true && pwNumber===false && pwSpecial===true){
    var all = (upper + special);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===false && pwUpper===true && pwNumber===true && pwSpecial===false){
    var all = (upper + number);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===true && pwUpper===false && pwNumber===true && pwSpecial===true){
    var all = (lower + number + specialS);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===true && pwUpper===true && pwNumber===false && pwSpecial===true){
    var all = (lower + upper + special);
    for (var i = 0; i < pwLength; i++) {
      var generated = Math.floor(Math.random() * all.length);
      finalPassword += all[generated]; 
    }
  }
  if (pwLower===false && pwUpper===false && pwNumber===false && pwSpecial===false){
    finalPassword = "No input selected"
  }

// console.log(generated)
console.log(finalPassword)
return "Thanks for playing: " + finalPassword
// .join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);