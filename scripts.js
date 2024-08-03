//index.js

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animation
window.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.skill-bar .skill-level');
    skillBars.forEach(bar => {
        const barPos = bar.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.5;
        if (barPos < screenPos) {
            bar.style.width = bar.getAttribute('data-skill-level') + '%';
        }
    });
});

// Show project or experience details in a modal
function showDetails(type, id) {
    const modal = document.getElementById(`modal-${type}-${id}`);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Close the modal
function closeModal(type, id) {
    const modal = document.getElementById(`modal-${type}-${id}`);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.getAttribute('data-type'), modal.getAttribute('data-id'));
        }
    });
}

// Prevent default behavior and handle click for 'Read More' buttons
document.querySelectorAll('.more-info').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const type = this.getAttribute('data-type'); // Example attribute
        const id = this.getAttribute('data-id'); // Example attribute
        showDetails(type, id);
    });
});

