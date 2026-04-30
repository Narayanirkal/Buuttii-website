document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                revealObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Apply reveal class to elements
    const revealElements = document.querySelectorAll('.card, .hero-section h1, .hero-section p, .hero-section .btn');
    revealElements.forEach(el => {
        el.classList.add('reveal-item');
        revealObserver.observe(el);
    });

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-sm');
            navbar.style.padding = '5px 0';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.padding = '12px 0';
        }
    });
});

// Add these styles to the document dynamically for the reveal effect
const style = document.createElement('style');
style.textContent = `
    .reveal-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
    }
    .reveal-active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
