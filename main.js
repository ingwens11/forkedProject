document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Check for email and password (you can add more validation if needed)
    if (email && password) {
      // If email and password are provided, display welcome message
      displayWelcomeMessage();
    } else {
      alert('Please provide both email and password.');
    }
  });
  
  function displayWelcomeMessage() {
    alert('Welcome!');
  }
  