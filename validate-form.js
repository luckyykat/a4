function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error-message");

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        errorMessage.innerText = "All fields are required!";
        return false;
    }

    // Validate email format
    if (!email.includes("@")) {
        errorMessage.innerText = "Please enter a valid email!";
        return false;
    }

    // If everything is valid, alert and redirect
    alert("Form submitted successfully!");
    window.location.href = "thankyou.html";
    return false; // Prevent default form submission
}
