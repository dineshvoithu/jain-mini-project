document.addEventListener("DOMContentLoaded", function () {
  const startDateInput = document.getElementById("startDate");
  const today = new Date().toISOString().split("T")[0];
  startDateInput.setAttribute("min", today); // Set min attribute to today's date
});

function setCorrectEndDate() {
  const startDateValue = document.getElementById("startDate").value;
  const endDateInput = document.getElementById("endDate");
  const dateObject = new Date(startDateValue);
  dateObject.setDate(dateObject.getDate() + 7);
  const futureDate = dateObject.toISOString().split("T")[0];
  endDateInput.setAttribute("min", futureDate);
}
function validateForm() {
  const place = document.getElementById("place").value;
  const persons = document.getElementById("persons").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const description = document.getElementById("description").value;

  // Date validation
  const today = new Date().toISOString().split("T")[0]; // Get today's date
  if (startDate <= today) {
    alert("Start date must be in the future!");
    return;
  }

  if (endDate <= startDate) {
    alert("End date must be greater than the start date!");
    return;
  }

  // Description length validation
  if (description.length <= 50 || description.length > 500) {
    alert("Description must be between 50 and 500 characters.");
    return;
  }

  // If all fields are valid, show success message
  alert("Booking successful!");
}

// Register Validation

function registerForm() {
  let isValid = true;

  isValid &= validateField(
    "fullname",
    "nameError",
    validateFullName,
    "Full name should contain only letters."
  );
  isValid &= validateField(
    "contact",
    "contactError",
    (value) => /^\d{10}$/.test(value),
    "Enter a valid 10-digit contact number."
  );
  isValid &= validateField(
    "dob",
    "dobError",
    isPastDate,
    "Enter a valid date of birth."
  );
  isValid &= validateField(
    "email",
    "emailError",
    (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    "Enter a valid email address."
  );
  isValid &= validateField(
    "password",
    "passwordError",
    validatePassword,
    "Password must be 8-15 characters, include one uppercase letter, one numeric digit, and one special character."
  );
  isValid &= validateField(
    "gender",
    "genderError",
    (value) => value !== "",
    "Please select a gender."
  );

  if (isValid) {
    alert("Registration successful!");
  }

  return !!isValid; // Form submission will proceed only if isValid is true
}

function validateField(fieldId, errorId, validationFn, errorMessage) {
  const field = document.getElementById(fieldId);
  const value = field ? field.value : null;
  const errorField = document.getElementById(errorId);

  if (validationFn(value)) {
    errorField.textContent = "";
    return true;
  } else {
    errorField.textContent = errorMessage;
    return false;
  }
}

function validateFullName(name) {
  // Regex to allow only alphabets (both uppercase and lowercase) and spaces
  return /^[A-Za-z\s]+$/.test(name);
}

function isPastDate(date) {
  const selectedDate = new Date(date);
  const today = new Date();
  return date && selectedDate < today;
}

function isGenderSelected() {
  return document.querySelector('input[name="gender"]:checked') !== null;
}

function validatePassword(password) {
  // Regex for password validation:
  // - 8-15 characters
  // - At least one uppercase letter
  // - At least one numeric digit
  // - At least one special character
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  return passwordPattern.test(password);
}

// Login

function loginForm() {
  let isValid = true;

  isValid &= validateField(
    "emaill",
    "emaillError",
    (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    "Enter a valid email address."
  );
  isValid &= validateField(
    "passwordd",
    "passworddError",
    validatePassword,
    "Password must be 8-15 characters, include one uppercase letter, one numeric digit, and one special character."
  );

  if (isValid) {
    alert("Login successful!");
  }

  return !!isValid; // Form submission will proceed only if isValid is true
}

function validateField(fieldId, errorId, validationFn, errorMessage) {
  const field = document.getElementById(fieldId);
  const value = field ? field.value : null;
  const errorField = document.getElementById(errorId);

  if (validationFn(value)) {
    errorField.textContent = "";
    return true;
  } else {
    errorField.textContent = errorMessage;
    return false;
  }
}

function validatePassword(password) {
  // Regex for password validation:
  // - 8-15 characters
  // - At least one uppercase letter
  // - At least one numeric digit
  // - At least one special character
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  return passwordPattern.test(password);
}
