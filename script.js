// JavaScript functionality for PeaceVault landing page

// Example functionality can include handling user interactions

document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const btnSignUp = document.getElementById('signUpButton');
    const modalSignUp = document.getElementById('signUpModal');

    // Sign-up button click event
    btnSignUp.addEventListener('click', () => {
        modalSignUp.style.display = 'block'; // Show the sign-up modal
    });

    // Functionality for closing the modal
    const closeModal = () => {
        modalSignUp.style.display = 'none'; // Hide the modal
    };

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modalSignUp) {
            closeModal();
        }
    });
});
