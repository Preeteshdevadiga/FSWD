
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    // Prevent the form from actually submitting/refreshing the page
    e.preventDefault();

    // Grab values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Grab error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmError = document.getElementById('confirmError');

    // Reset error messages
    [nameError, emailError, passwordError, confirmError].forEach(el => el.innerText = "");

    let isValid = true;

    // Rule 1: Name must not be empty
    if (name === "") {
        nameError.innerText = "Name is required.";
        isValid = false;
    }

    // Rule 2: Email must contain @
    if (!email.includes("@")) {
        emailError.innerText = "Please enter a valid email containing '@'.";
        isValid = false;
    }

    // Rule 3: Password length >= 6
    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Rule 4: Passwords must match
    if (password !== confirmPassword) {
        confirmError.innerText = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // You can now proceed with an API call or further processing
    }
});