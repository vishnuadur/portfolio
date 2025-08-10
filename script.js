// Simple portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('nav .absolute');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav ul li');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const text = this.textContent.toLowerCase();
            let targetId = '';
            
            switch(text) {
                case 'home':
                    window.scrollTo({top: 0, behavior: 'smooth'});
                    return;
                case 'about':
                    targetId = 'about';
                    break;
                case 'skills':
                    targetId = 'skills';
                    break;
                case 'portfolio':
                    targetId = 'Projects';
                    break;
                case 'contact':
                    targetId = 'contact';
                    break;
            }
            
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        });
    });
    
    // Add IDs to sections for navigation
    const sections = document.querySelectorAll('section');
    if (sections.length >= 4) {
        sections[1].id = 'about'; // About section
        sections[2].id = 'skills'; // Skills section
        sections[4].id = 'contact'; // Contact section
    }
    
    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-line');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'progressAnimation 2s ease-in-out forwards';
            }
        });
    }, {threshold: 0.5});
    
    progressBars.forEach(bar => observer.observe(bar));
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '#10b981';
                }
            });
            
            if (isValid) {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Add hover effects to project cards
    const projectRows = document.querySelectorAll('.row');
    projectRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Scroll-based navbar background
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(216, 18, 91, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#D8125B';
            header.style.backdropFilter = 'none';
        }
    });
});

// Add some animation classes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .row {
        transition: all 0.3s ease;
    }
    
    /* Mobile menu active state */
    nav .absolute.active {
        transform: translateY(0) !important;
        position: fixed !important;
        top: 64px !important;
        z-index: 50;
    }
`;
document.head.appendChild(style);