function validateForm() {
    let isValid = true;

    function showError(id, message) {
        let errorElement = document.getElementById(id);
        errorElement.innerText = message;
        errorElement.style.display = "block";
    }

    function clearError(id) {
        document.getElementById(id).innerText = "";
    }

    // First Name Validation
    let firstName = document.getElementById("firstname").value;
    if (firstName.length < 2 || firstName.length > 20 || !isNaN(firstName)) {
        showError("firstnameError", "First name must be 2-20 letters.");
        isValid = false;
    } else {
        clearError("firstnameError");
    }

    // Last Name Validation
    let lastName = document.getElementById("lastname").value;
    if (lastName.length < 2 || lastName.length > 20 || !isNaN(lastName)) {
        showError("lastnameError", "Last name must be 2-20 letters.");
        isValid = false;
    } else {
        clearError("lastnameError");
    }

    // Username Validation
    let username = document.getElementById("username").value;
    if (username.length < 3 || username.length > 12) {
        showError("usernameError", "Username must be 3-12 characters.");
        isValid = false;
    } else {
        clearError("usernameError");
    }

    // Password Validation
    let password = document.getElementById("password").value;
    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!]).{7,}$/;
    if (!password.match(passwordPattern)) {
        showError("passwordError", "Password must have 7+ chars, 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
        isValid = false;
    } else {
        clearError("passwordError");
    }

    // Email Validation
    let email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
        showError("emailError", "Invalid email format.");
        isValid = false;
    } else {
        clearError("emailError");
    }

    // Phone Validation (10-digit format)
    let phone = document.getElementById("phone").value;
    let phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        showError("phoneError", "Phone must be 10 digits.");
        isValid = false;
    } else {
        clearError("phoneError");
    }

    // Zip Code Validation (only if country is USA)
    let country = document.getElementById("country").value;
    let zipcode = document.getElementById("zipcode").value;
    if (country === "USA" && zipcode.length !== 5) {
        showError("zipcodeError", "Zip Code must be 5 digits.");
        isValid = false;
    } else {
        clearError("zipcodeError");
    }

    if (isValid) {
        window.location.href = "thankyou.html";
    }

    return false; // Prevent form submission if validation fails
}
