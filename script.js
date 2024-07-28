// script.js

// Function to handle form transitions
function toggleForm(target) {
    const formContainer = document.querySelector('.form-container');
    if (target === 'sign-up') {
        formContainer.classList.add('show-sign-up');
    } else if (target === 'sign-in') {
        formContainer.classList.remove('show-sign-up');
    }
}

// Event listeners for form toggle links
document.querySelectorAll('.toggle-form').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('data-target');
        toggleForm(target);
    });
});

// Responsive handling
function handleResize() {
    const width = window.innerWidth;
    const formContainer = document.querySelector('.form-container');
    if (width <= 768) {
        formContainer.classList.remove('show-sign-up');
    } else {
        // Ensure the correct form is shown on larger screens
        formContainer.classList.contains('show-sign-up') ?
            formContainer.classList.add('show-sign-up') :
            formContainer.classList.remove('show-sign-up');
    }
}

// Initialize the form based on screen size
window.addEventListener('resize', handleResize);
document.addEventListener('DOMContentLoaded', handleResize);

// Optionally, add form submission handling (e.g., AJAX)
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle sign-in logic here (e.g., AJAX call)
    alert('Sign In form submitted!');
});

document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle sign-up logic here (e.g., AJAX call)
    alert('Sign Up form submitted!');
});
