// Select the form and input fields
const form = document.querySelector("form");
const firstNameInput = form.querySelector(".name:nth-of-type(1)");
const lastNameInput = form.querySelector(".name:nth-of-type(2)");
const emailInput = form.querySelector(".email");
const passwordInput = form.querySelector(".lock:nth-of-type(1)");
const confirmPasswordInput = form.querySelector(".lock:nth-of-type(2)");
const maleRadio = form.querySelector("input[name='r1'][value='Male']");
const femaleRadio = form.querySelector("input[name='r1'][value='Female']");
const countrySelect = form.querySelector(".country");
const checkbox = form.querySelector(".check-button");

// Form Submit Event
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validation
    let valid = true;
    const messages = [];

    // First Name Validation
    if (firstNameInput.value.trim() === "") {
        valid = false;
        messages.push("First Name is required");
    }

    // Last Name Validation
    if (lastNameInput.value.trim() === "") {
        valid = false;
        messages.push("Last Name is required");
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        valid = false;
        messages.push("Enter a valid email address");
    }

    // Password Validation
    if (passwordInput.value.trim() === "") {
        valid = false;
        messages.push("Password is required");
    }

    // Confirm Password Validation
    if (confirmPasswordInput.value.trim() === "" || confirmPasswordInput.value !== passwordInput.value) {
        valid = false;
        messages.push("Passwords do not match");
    }

    // Gender Validation
    if (!maleRadio.checked && !femaleRadio.checked) {
        valid = false;
        messages.push("Please select a gender");
    }

    // Country Validation
    if (countrySelect.value === "Select a country") {
        valid = false;
        messages.push("Please select a country");
    }

    // Terms and Conditions Validation
    if (!checkbox.checked) {
        valid = false;
        messages.push("You must accept the terms and conditions");
    }

    // Display Error Messages or Success
    if (valid) {
        alert("Registration Successful!");
    } else {
        alert("Please fix the following errors:\n\n" + messages.join("\n"));
    }
});
