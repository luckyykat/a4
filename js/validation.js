// Function to validate form on submission
function validateForm(event) {
    event.preventDefault(); // Prevents form from submitting if validation fails

    // Clear previous errors
    document.querySelectorAll(".error").forEach(error => error.innerText = "");

    let isValid = true; 

    // Get input values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let zipCode = document.getElementById("zipCode").value.trim();

    // Validate First Name Field
    if (firstName === "") {
        showError("errorFirstName", "First name is required.");
        isValid = false;
    }
   // Validate Last Name Field 
    if (lastName === "") {
        showError("errorLastName", "Last name is required.");
        isValid = false;
    }
    // Validate Email
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError("errorEmail", "Enter a valid email address.");
        isValid = false;
    }
    // Validate Phone
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        showError("errorPhone", "Enter a valid 10-digit phone number.");
        isValid = false;
    }
     // Validate Address
    if (address === "") {
        showError("errorAddress", "Address is required.");
        isValid = false;
    }
     // Validate City
    if (city === "") {
        showError("errorCity", "City is required.");
        isValid = false;
    }
    // Validate State
    if (state === "") {
        showError("errorState", "Please select a state.");
        isValid = false;
    }
  // Validate Country
    if (country === "") {
        showError("errorCountry", "Country is required.");
        isValid = false;
    }
  // Validate Zip Code
    let zipPattern = /^[0-9]{5}$/;
    if (!zipPattern.test(zipCode)) {
        showError("errorZipCode", "Enter a valid 5-digit zip code.");
        isValid = false;
    }

    // Submit form if all fields are valid
    if (isValid) {
        document.getElementById("contactForm").submit();
    }
}

// Function to display errors under each field
function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

// Attach validation to form submission
document.getElementById("contactForm").addEventListener("submit", validateForm);
