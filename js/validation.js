function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    function showError(id, message) {
        document.getElementById(id).innerText = message;
    }

    function clearError(id) {
        document.getElementById(id).innerText = "";
    }

    let firstname = document.getElementById("firstname").value;
    if (!firstname.match(/^[A-Za-z]+$/)) {
        showError("errorFirstname", "First name must contain only letters.");
        isValid = false;
    } else {
        clearError("errorFirstname");
    }

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        showError("errorConfirmPassword", "Passwords must match.");
        isValid = false;
    } else {
        clearError("errorConfirmPassword");
    }

    let zipcode = document.getElementById("zipcode").value;
    let zipPattern = /^\d{5}$/;
    if (!zipcode.match(zipPattern)) {
        showError("errorZipcode", "Zip Code must be exactly 5 digits.");
        isValid = false;
    } else {
        clearError("errorZipcode");
    }

    if (isValid) {
        console.log("Form is valid! Redirecting to thank you page...");
        window.location.href = "thankyou.html"; // Redirect to thank you page
    }
}

// Attach the validation function to the form submit event
document.getElementById("contactForm").addEventListener("submit", validateForm);
