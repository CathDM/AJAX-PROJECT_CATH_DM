body {
    font: 1em sans-serif;
    padding: 0;
    margin : 0;
  }
  
  form {
    max-width: 200px;
  }
  
  p * {
    display: block;
  }
  
  input[type=email]{
    -webkit-appearance: none;
  
    width: 100%;
    border: 1px solid #333;
    margin: 0;
  
    font-family: inherit;
    font-size: 90%;
  
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  /* This is our style for the invalid fields */
  input:invalid{
    border-color: #900;
    background-color: #FDD;
  }
  
  input:focus:invalid {
    outline: none;
  }
  
  /* This is the style of our error messages */
  .error {
    width  : 100%;
    padding: 0;
   
    font-size: 80%;
    color: white;
    background-color: #900;
    border-radius: 0 0 5px 5px;
   
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  .error.active {
    padding: 0.3em;
  }
  JavaScript
  The following JavaScript code handles the custom error validation.
  
  // There are many ways to pick a DOM node; here we get the form itself and the email
  // input box, as well as the span element into which we will place the error message.
  
  var form  = document.getElementsByTagName('form')[0];
  var email = document.getElementById('mail');
  var error = document.querySelector('.error');
  
  email.addEventListener("input", function (event) {
    // Each time the user types something, we check if the
    // email field is valid.
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      error.innerHTML = ""; // Reset the content of the message
      error.className = "error"; // Reset the visual state of the message
    }
  }, false);
  form.addEventListener("submit", function (event) {
    // Each time the user tries to send the data, we check
    // if the email field is valid.
    if (!email.validity.valid) {
      
      // If the field is not valid, we display a custom
      // error message.
      error.innerHTML = "I expect an e-mail, darling!";
      error.className = "error active";
      // And we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  }, false);