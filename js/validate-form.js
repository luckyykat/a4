function validateForm() {
    let isValid = true;

    // First Name Validation
    let firstname = document.getElementById("firstname").value;
    if (firstname === "" || !/^[A-Za-z]+$/.test(firstname)) {
        document.getElementById("errorFirstname").innerText = "First name is required and must be letters only.";
        isValid = false;
    } else {
        document.getElementById("errorFirstname").innerText = "";
    }

    // Last Name Validation
    let lastname = document.getElementById("lastname").value;
    if (lastname === "" || !/^[A-Za-z]+$/.test(lastname)) {
        document.getElementById("errorLastname").innerText = "Last name is required and must be letters only.";
        isValid = false;
    } else {
        document.getElementById("errorLastname").innerText = "";
    }

    // Email Validation
    let email = document.getElementById("email").value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("errorEmail").innerText = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("errorEmail").innerText = "";
    }

    // Phone Number Validation
    let phone = document.getElementById("phone").value;
    let phonePattern = /^\d{10,15}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("errorPhone").innerText = "Enter a valid 10-15 digit phone number.";
        isValid = false;
    } else {
        document.getElementById("errorPhone").innerText = "";
    }

    // Password Validation
    let password = document.getElementById("password").value;
    if (password.length < 7 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        document.getElementById("errorPassword").innerText = "Password must be 7+ characters, include an uppercase letter, a number, and a special character.";
        isValid = false;
    } else {
        document.getElementById("errorPassword").innerText = "";
    }

    // Address Validation
    let address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("errorAddress").innerText = "Address is required.";
        isValid = false;
    } else {
        document.getElementById("errorAddress").innerText = "";
    }

    // Redirect to Thank You Page if Valid
    if (isValid) {
        window.location.href = "thankyou.html";
    }

    return false;
}
