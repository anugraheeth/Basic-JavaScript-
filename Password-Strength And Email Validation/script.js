const form = document.getElementById('validationForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmError = document.getElementById('confirmError');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const createButton = document.getElementById('createButton');
const modal = document.getElementById('reviewModal');
const closeModal = document.getElementsByClassName('close')[0];
const submitButton = document.getElementById('submitButton');

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', checkPasswordStrength);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);
createButton.addEventListener('click', showReview);
closeModal.addEventListener('click', () => modal.style.display = 'none');
submitButton.addEventListener('click', handleSubmit);

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

function validateEmail() {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    emailError.textContent = isValid ? '' : 'Please enter a valid email address.';
    return isValid;
}

function checkPasswordStrength() {
    const password = passwordInput.value;
    let strength = 0;
    let feedback = '';

    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]+/)) strength += 25;
    if (password.match(/[A-Z]+/)) strength += 25;
    if (password.match(/[0-9]+/)) strength += 25;

    strengthBar.style.width = strength + '%';

    if (strength <= 25) {
        strengthBar.style.backgroundColor = '#d32f2f';
        feedback = 'Weak';
    } else if (strength <= 50) {
        strengthBar.style.backgroundColor = '#ffa000';
        feedback = 'Moderate';
    } else if (strength <= 75) {
        strengthBar.style.backgroundColor = '#4caf50';
        feedback = 'Good';
    } else {
        strengthBar.style.backgroundColor = '#2e7d32';
        feedback = 'Strong';
    }

    strengthText.textContent = `Password strength: ${feedback}`;
    validateConfirmPassword();
    return feedback;
}

function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (confirmPassword === '') {
        confirmError.textContent = '';
    } else if (password !== confirmPassword) {
        confirmError.textContent = 'Passwords do not match.';
        return false;
    } else {
        confirmError.textContent = '';
    }
    return true;
}

function showReview() {
    const isEmailValid = validateEmail();
    const passwordStrength = checkPasswordStrength();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isConfirmPasswordValid) {
        document.getElementById('reviewEmail').textContent = `Email: ${emailInput.value}`;
        document.getElementById('reviewPasswordStrength').textContent = `Password Strength: ${passwordStrength}`;
        modal.style.display = 'block';
    } else {
        alert('Please correct the errors in the form before reviewing.');
    }
}

function handleSubmit() {
    alert('Account created successfully!');
    form.reset();
    strengthBar.style.width = '0%';
    strengthText.textContent = 'Password strength: None';
    modal.style.display = 'none';
}
