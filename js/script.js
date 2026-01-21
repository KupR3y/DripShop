// Smooth scroll for all buttons with data-scroll attribute
document.querySelectorAll('[data-scroll]').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-scroll');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Logo scroll to top
document.querySelector('.logo').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header CTA button scroll to contact
document.querySelector('header .cta-btn').addEventListener('click', function() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Here you can add your form submission logic
        // For example, send data to your backend:
        // fetch('/api/submit-form', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })

        // For now, just show success message
        alert('Спасибо! Менеджер свяжется с вами в течение 30 минут');

        // Reset form
        this.reset();
    });
}

// Add intersection observer for fade-in animations (optional)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all glass cards
document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (if you want to add it later)
// Uncomment and modify if you add a hamburger menu
/*
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
*/