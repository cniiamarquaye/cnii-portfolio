// Pure JavaScript implementation - no jQuery dependency
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger-menu');
    const backBtn = document.querySelector('.back-to-top');
    const navLinks = document.querySelectorAll('#nav ul.links a');

    // --- MOBILE HAMBURGER MENU ---
    if (hamburger && nav) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('nav-active');
            body.classList.toggle('is-nav-active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('nav-active') && 
                !nav.contains(e.target) && 
                !hamburger.contains(e.target)) {
                nav.classList.remove('nav-active');
                body.classList.remove('is-nav-active');
            }
        });

        // Close menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                body.classList.remove('is-nav-active');
            });
        });
    }

    // --- ACTIVE NAV TAB HIGHLIGHTING ---
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const li = link.parentElement;
        const linkHref = link.getAttribute('href') || '';
        const linkFile = linkHref.split('#')[0] || 'index.html';

        if (currentFile === linkFile) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });

    // --- BACK TO TOP BUTTON ---
    if (backBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        });

        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Also close mobile menu if open
            if (nav && nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                body.classList.remove('is-nav-active');
            }
        });
    }

    // --- SMOOTH SCROLLING FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu after navigation
                    if (nav && nav.classList.contains('nav-active')) {
                        nav.classList.remove('nav-active');
                        body.classList.remove('is-nav-active');
                    }
                }
            }
        });
    });

    // --- PAGE LOAD ANIMATION ---
    setTimeout(() => {
        body.classList.remove('is-preload');
    }, 100);
});