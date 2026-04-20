// ================================
// Initialize AOS (Animate On Scroll)
// ================================
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 50
});

// ================================
// Typing Animation for Hero Terminal
// ================================
const typingText = document.getElementById('typing-text');
const textToType = "Alexandre Pelaprat Flore - Développeur Web";
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 80);
    }
}

// Start typing animation after a short delay
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// ================================
// Smooth Scroll for Navigation Links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Nav Background on Scroll
// ================================
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

// ================================
// Skills Logos Interaction
// ================================
const skillLogos = document.querySelectorAll('.skill-logo');

skillLogos.forEach(logo => {
    logo.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 50px var(--accent-glow)';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// ================================
// Active Nav Link on Scroll
// ================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-color)';
        }
    });
});

// ================================
// Console Easter Egg
// ================================
console.log(`
%c
 █████╗ ██████╗ ███████╗
██╔══██╗██╔══██╗██╔════╝
███████║██████╔╝█████╗  
██╔══██║██╔═══╝ ██╔══╝  
██║  ██║██║     ██║     
╚═╝  ╚═╝╚═╝     ╚═╝     
                        
Portfolio 2026 - Alexandre Pelaprat Flore
Intéressé par le code ? Contactez-moi !
`, 'color: #00ff88; font-weight: bold; font-size: 12px; font-family: monospace;');

console.log('Portfolio chargé avec succès! 🚀');

// Email proteger contre le bot spam :
document.getElementById('email-display').textContent = 
    'alex.pelapratflore' + '@' + 'gmail.com';