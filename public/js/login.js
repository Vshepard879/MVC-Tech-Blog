//  a synchrnous function to login
async function loginFormHandler(event) {
    // preventDefault method prevents the form from submitting and reloading the page until the form is submitted
      event.preventDefault();
    
      // variable for the email using the id of "email-login"  we get the value of the input and trim() removes the white space from the beginning and end of the string
      const email = document.querySelector('#email-login').value.trim();
      // variable for the password using the id of "password-login" we get the value of the input and trim() removes the white space from the beginning and end of the string
      const password = document.querySelector('#password-login').value.trim();
    
      // if the email and password are not empty
      if (email && password) {
        // this variable will respond to the response from the server and will be used to send the response to the client.
        const response = await fetch('/api/users/login', { // fetch the users with the email and password provided to login
          // the method is POST
          method: 'post',
          // body is the data we want to send to the server
          body: JSON.stringify({
            // the email of the user
            email,
            // the password of the user
            password
          }),
          // the headers are the headers we want to send to the server
          headers: { 'Content-Type': 'application/json' }
        });
    
        // if the response is ok we send the response to the client and we redirect to the dashboard page
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          // if the response is not ok we send the response to the client
          alert(response.statusText);
        }
      }
    }
  
    // add the event listener to the submit button with the class of login-form
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);