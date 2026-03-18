// --- DOMContentLoaded ensures script runs after HTML is parsed ---
document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger-menu');
    const backBtn = document.querySelector('.back-to-top');
    const wrapper = document.getElementById('wrapper');
    const intro = document.getElementById('intro');
    const sections = document.querySelectorAll('section[id]');
    const defaultTitle = document.title;

    // -----------------------------
    // MOBILE HAMBURGER MENU
    // -----------------------------
    if(hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            body.classList.toggle('is-nav-active');

            // Animate hamburger lines
            hamburger.querySelectorAll('span').forEach((span, idx) => {
                if(body.classList.contains('is-nav-active')){
                    if(idx === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if(idx === 1) span.style.opacity = '0';
                    if(idx === 2) span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
    }

    // -----------------------------
    // ACTIVE NAV TAB HIGHLIGHTING
    // -----------------------------
    const navLinks = document.querySelectorAll('#nav ul.links a');
    const current = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';

    navLinks.forEach(a => {
        const li = a.parentElement;
        const href = a.getAttribute('href')?.split('/').pop().toLowerCase() || '';

        if(current === 'index.html') {
            if(href === 'index.html' || href === '') li.classList.add('active');
            else li.classList.remove('active');
        } else {
            if(href && current.includes(href.replace(/#.*/,''))) li.classList.add('active');
            else li.classList.remove('active');
        }
    });

    // -----------------------------
    // BACK TO TOP BUTTON
    // -----------------------------
    if(backBtn){
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300) backBtn.classList.add('visible');
            else backBtn.classList.remove('visible');
        });

        backBtn.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo({top:0, behavior:'smooth'});
        });
    }

    // -----------------------------
    // DYNAMIC PAGE TITLE BASED ON SECTION
    // -----------------------------
    if(sections.length){
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting && entry.intersectionRatio >= 0.5){
                    const h = entry.target.querySelector('h1, h2');
                    if(h) document.title = `${h.textContent} | ${defaultTitle}`;
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
    }

    // -----------------------------
    // PARALLAX EFFECT FOR WRAPPER
    // -----------------------------
    if(wrapper){
        const intensity = 0.925; // scale of parallax
        const bg = document.createElement('div');
        bg.className = 'bg';
        wrapper.prepend(bg);

        const parallax = () => {
            const rect = wrapper.getBoundingClientRect();
            const offset = window.scrollY - wrapper.offsetTop;
            bg.style.transform = `translateY(${offset * intensity}px)`;
        };

        // Disable parallax for mobile / high DPI
        const isDisabled = /Mobi|Android/i.test(navigator.userAgent) || window.devicePixelRatio > 1;
        if(!isDisabled){
            window.addEventListener('scroll', parallax);
            window.addEventListener('resize', parallax);
            window.addEventListener('load', parallax);
        } else {
            bg.classList.add('fixed');
            bg.style.transform = 'none';
        }
    }

    // -----------------------------
    // INTRO SECTION ANIMATION
    // -----------------------------
    if(intro){
        const observerIntro = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    intro.classList.remove('hidden');
                } else {
                    intro.classList.add('hidden');
                }
            });
        }, { rootMargin: '-25% 0px -50% 0px' });

        observerIntro.observe(intro);
    }

    // -----------------------------
    // SMOOTH SCROLLING FOR LINKS
    // -----------------------------
    document.querySelectorAll('.scrolly').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target){
                target.scrollIntoView({behavior:'smooth'});
            }
        });
    });

}); // End DOMContentLoaded
