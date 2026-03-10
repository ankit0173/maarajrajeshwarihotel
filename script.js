// ============================================
// Maa Rajrajeshwari Hotel & Dhaba — Scripts
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.classList.remove('nav-open');
        });
    });


    // --- Sticky Header ---
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });


    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - headerHeight - 10,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${id}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });


    // --- Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- Floating Action Button visibility ---
    const fab = document.getElementById('fab-call');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            fab.classList.add('visible');
        } else {
            fab.classList.remove('visible');
        }
    }, { passive: true });


    // --- Parallax effect on hero ---
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.setProperty('--parallax-offset', `${scrolled * 0.4}px`);
        }
    }, { passive: true });

});
