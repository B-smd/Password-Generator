// Assigment Code

const generateBtn = document.querySelector("#generate");
// const spanPasswordLength = document.getElementById("span-Length-display");
const inputPasswordLength = document.getElementById("input-length");
const inputPasswordNumber = document.getElementById("inputNumber");
const inputLowercase = document.getElementById("input-lowercase");
const inputUppercase = document.getElementById("input-uppercase");
const inputSymbol = document.getElementById("input-symbol");
const inputNumber = document.getElementById("input-number");
const textareaPassword = document.getElementById("password");
const error = document.getElementById("error");

setPasswordLengthSpan()

function setPasswordLengthSpan(){
 
// grap the value of input
  const passwordLength = inputPasswordLength.value;
  inputPasswordLength.value= passwordLength;
// change the text content of span  
  inputPasswordNumber.value= passwordLength;
}

// when I change the slider
inputPasswordLength.addEventListener('input', setPasswordLengthSpan);
// when I change the slider
inputPasswordNumber.addEventListener('input', setPasswordLengthSpan);

const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberSet = "1234567890";
const symbolSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// when I click on the generate btn
generateBtn.addEventListener('click', function(event){
  
  // the app will ask me my password length
  const passwordLength = Number(inputPasswordLength.value);
  console.log(passwordLength);
  // it will ask if i want to use (done in html)

  let charset = "";

  // lowercase
  const wantsLowercase = inputLowercase.checked;
// uppercase
  const wantsUppercase = inputUppercase.checked;
  // symbols
  const wantsSymbol = inputSymbol.checked;
  // numbers
  const wantsNumber = inputNumber.checked;

  // in my password
  error.textContent ="";

   if(!wantsLowercase && !wantsUppercase && !wantsSymbol && !wantsNumber){
     // throw error
     error.textContent = "Please choose at least one of the BOXES!";
     return;
  } 

  // once I have selected all the options
  if(wantsLowercase){
    charset = charset + lowercaseSet;
  }
  if(wantsUppercase){
    charset = charset + uppercaseSet;
  }
  if (wantsNumber) {
    charset = charset + numberSet;
  }
  if (wantsSymbol){
    charset = charset + symbolSet;
  }
  
  // then the app should generate the password based the options

   let password = "";

// loop for passwordLength times,
  for (let index = 0; index < passwordLength; index++) {
    // for each iteration. 
    // we will generate a random char from the charset chosen
    const randomIndex = Math.floor(Math.random() * charset.length);
    
    const randomChar = charset[randomIndex];
    //then we will add this random char to accumulator
    password = password + randomChar;
}
   // then show the generated password in the textarea
   textareaPassword.textContent = password;

  })



