// Script for Factorial of a number

// Get Elements

// Inputs
const userNumInput = document.getElementById("userNumInput");

// Input Form
const inputForm = document.getElementById("inputForm");


function getResult() {

  // Get userNum, limit of 172 as any factorial past that will evaluate to Infinity
  let userNum = Math.min(Number(userNumInput.value), 172);

  // Initalize Factorial Product
  let product = 1;

  // Initialize counter
  let counter = 1;

  // Do While Loop to calculate factorial
  do {
    
    // Amplify/Multiply product by counter
    product *= counter;
    
    // Increment Counter
    counter += 1;
    
  } while (counter <= userNum);

  // Display Result
  outputResult.innerHTML = `${product}`;

  return;
}


// Connect form submit to getResult()
inputForm.onsubmit = () => {
  getResult();
  // Prevents page from refreshing
  return false;
}