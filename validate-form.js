function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error-message");

    if (name === "" || email === "" || message === "") {
        errorMessage.innerText = "All fields are required!";
        return false;
    }

    if (!email.includes("@")) {
        errorMessage.innerText = "Please enter a valid email!";
        return false;
    }

    alert("Form submitted successfully!");
    window.location.href = "thankyou.html"; // Redirect to thank you page
    return false; // Prevent default form submission
}
