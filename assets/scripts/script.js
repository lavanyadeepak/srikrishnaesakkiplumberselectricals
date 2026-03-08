document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded successfully");
    
    /* ==================== MOBILE MENU TOGGLE ==================== */
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* ==================== NAVBAR SCROLL EFFECT ==================== */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    /* ==================== BACK TO TOP BUTTON ==================== */
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==================== CONTACT FORM TO WHATSAPP ==================== */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        console.log("Contact form found, attaching listener");
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Form submitted");

            // Get form values
            const name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';
            const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
            const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
            const service = document.getElementById('service') ? document.getElementById('service').value : '';
            const message = document.getElementById('message') ? document.getElementById('message').value.trim() : '';

            // Construct WhatsApp message
            let waMessage = `*New Service Request*\n\n`;
            waMessage += `*Name:* ${name}\n`;
            waMessage += `*Phone:* ${phone}\n`;
            if (email) waMessage += `*Email:* ${email}\n`;
            waMessage += `*Service Type:* ${service}\n`;
            waMessage += `*Message:* ${message}`;

            // Encode and open WhatsApp
            const encodedMessage = encodeURIComponent(waMessage);
            const whatsappNumber = "919445351153";
            const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(url, '_blank');
        });
    }
});