// Header functionality
let isMenuOpen = false;
let isScrolled = false;

// DOM elements
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        navMenu.classList.add('active');
    } else {
        navMenu.classList.remove('active');
    }
}

// Handle scroll effect on header
function handleScroll() {
    const scrollY = window.scrollY;
    const newScrolled = scrollY > 50;
    
    if (newScrolled !== isScrolled) {
        isScrolled = newScrolled;
        if (isScrolled) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Close menu when clicking outside
function handleClickOutside(event) {
    if (!event.target.closest('nav')) {
        isMenuOpen = false;
        navMenu.classList.remove('active');
    }
}

// Close menu when clicking nav links
function handleNavClick() {
    isMenuOpen = false;
    navMenu.classList.remove('active');
}

// Hero animation
function initHeroAnimation() {
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-headline, .hero-subheadline, .hero-tagline, .hero-location, .hero-cta');
        heroElements.forEach(element => {
            element.classList.add('animate-in');
        });
    }, 100);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle event listener
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Click outside event listener
    document.addEventListener('click', handleClickOutside);
    
    // Nav link event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Initialize hero animation
    initHeroAnimation();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
});

// Cleanup event listeners when page unloads
window.addEventListener('beforeunload', function() {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('click', handleClickOutside);
});