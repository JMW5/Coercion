
/* 
  INSTRUCTIONS
  When the user enters their age (in years) into the text box and hits the calculate button, display a message with the number of milliseconds that the user has been alive.
  Example message: "You've been alive 1,135,000,000,000 milliseconds!"
  
  BONUS POINTS
  1. Handle invalid (i.e., non-numeric) input
  2. Identify any instances of implicit/explicit coercion in your code
*/

const button = document.querySelector('button');

button.addEventListener("click", function() {

    const millisecondsInAYear = 31557600000;

    //get value from input
    const ageInYears = document.getElementById('age').value;

    const ageInMilliseconds = millisecondsInAYear * ageInYears;
    //Here is an instance of implicit coercion.
    //Javascript is predicting the value of ageInYears to be a "number" since we multiplying with a number.

    alert(`You've been alive ${ageInMilliseconds.toLocaleString()} milliseconds!`);
    //This is example of explicit coercion because we are converting number to a string.

})

