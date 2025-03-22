// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Text animation
const textElement = document.getElementById('changing-text');
const texts = [
    "Computer Science Professional",
    "Junior Cybersecurity Analyst",
    "Junior Software Engineer",
    "Fullstack Developer",
    "Data Analyst",
    "Software Tester"
];
let currentIndex = 0;

function changeText() {
    textElement.classList.add('fade-out');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        textElement.textContent = texts[currentIndex];
        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');
        
        setTimeout(() => {
            textElement.classList.remove('fade-in');
        }, 500);
    }, 500);
}

// Initial delay before starting the animation
setTimeout(() => {
    setInterval(changeText, 3000);
}, 1000);

// Add scroll animation for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
});

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Handle hire form submission
document.getElementById('hireForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        projectType: document.getElementById('projectType').value,
        budget: document.getElementById('budget').value,
        timeline: document.getElementById('timeline').value,
        message: document.getElementById('message').value
    };

    // For now, we'll just log the data and show a success message
    console.log('Form submission:', formData);
    
    // Clear form
    this.reset();
    
    // Show success message
    alert('Thank you for your interest! I will get back to you soon.');
});
