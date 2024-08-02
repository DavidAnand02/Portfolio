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
    document.getElementById(`modal-${type}-${id}`).style.display = 'block';
}

// Close the modal
function closeModal(type, id) {
    document.getElementById(`modal-${type}-${id}`).style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    let modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
