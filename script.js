function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform your login logic here using the email and password
  // For demonstration purposes, check if email and password match
  if (email === "eslam@urcareguide.live" && password === "123456") {
    // Show the home page content
          window.location.href = "home.html";

  } else {
    // Show an error message or perform other actions for unsuccessful login
    alert("Invalid email or password");
  }

  // Clear the form fields
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

