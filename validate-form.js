function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error-message");

    // Check if fields are empty
    if (name === "" || email === "" || message === "") {
        errorMessage.innerText = "All fields are required!";
        return false;
    }

    // Validate email format
    if (!email.includes("@")) {
        errorMessage.innerText = "Please enter a valid email!";
        return false;
    }

    // Redirect to thank you page
    window.location.href = "thankyou.html";
}

// Attach event listener to the form
document.getElementById("contactForm").addEventListener("submit", validateForm);
