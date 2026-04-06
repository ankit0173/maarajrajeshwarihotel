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

    // --- Close mobile nav on outside click ---
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.classList.remove('nav-open');
        }
    });


    // --- Performance-Optimized Scroll Engine ---
    const header = document.getElementById('header');
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    const fab = document.getElementById('fab-call');
    const hero = document.querySelector('.hero');
    const sections = document.querySelectorAll('section[id]');

    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateUI();
                ticking = false;
            });
            ticking = true;
        }
    }

    function updateUI() {
        const scrolled = window.pageYOffset;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        // 1. Sticky Header
        if (header) {
            if (scrolled > 80) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }

        // 2. Scroll Progress Bar
        if (scrollProgress && totalHeight > 0) {
            const progress = (scrolled / totalHeight) * 100;
            scrollProgress.style.width = `${progress}%`;
        }

        // 3. Back to Top & FAB Visibility
        if (backToTop) {
            if (scrolled > 400) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        }
        if (fab) {
            if (scrolled > 500) fab.classList.add('visible');
            else fab.classList.remove('visible');
        }

        // 4. Hero Parallax
        if (hero && scrolled < window.innerHeight) {
            hero.style.setProperty('--parallax-offset', `${scrolled * 0.35}px`);
        }

        // 5. Active Nav Link (moved into unified tick for smoothness)
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${id}"]`);

            if (navLink) {
                if (scrolled > sectionTop && scrolled <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial check on load
    updateUI();


    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - headerHeight - 10,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Scroll Reveal Animations (IntersectionObserver is performant, keep as is) ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- Back to Top Click Functionality ---
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    /* ═══════════════════════════════════════════════════════════════
       DRAG-TO-FLIP BOOK ENGINE
       - Hold mouse / finger on right page → drag LEFT → page follows
       - Hold on left (flipped) page → drag RIGHT → page follows back
       - Release at > 60° → complete flip
       - Release at < 60° → springs back
    ═══════════════════════════════════════════════════════════════ */
    (function(){
        const papers   = Array.from(document.querySelectorAll('.bk-paper'));
        const staticL  = document.getElementById('bk-static-left');
        const counter  = document.getElementById('bk-counter');
        const TOTAL    = papers.length + 1;
        let current    = 0;
        let dragging   = false;
        let dragPaper  = null;
        let dragDir    = null;   // 'fwd' | 'bwd'
        let startX     = 0;
        let pageW      = 0;
        let liveAngle  = 0;
    
        /* Initial z-index stack */
        papers.forEach((p, i) => { p.style.zIndex = papers.length - i; });
    
        function updateCounter(){
            counter.textContent = (current + 1) + ' / ' + TOTAL;
        }
    
        /* ── Complete forward flip ── */
        function doFlipFwd(paper){
            paper.style.transition = '';
            paper.style.transform  = '';
            paper.classList.add('bk-flipped');
            paper.style.zIndex = current + 1;
            current++;
            staticL.style.opacity = '0';
            updateCounter();
        }
    
        /* ── Complete backward flip ── */
        function doFlipBwd(paper){
            paper.style.transition = '';
            paper.style.transform  = '';
            paper.classList.remove('bk-flipped');
            paper.style.zIndex = papers.length - current;
            current--;
            if(current === 0) staticL.style.opacity = '1';
            updateCounter();
        }
    
        /* ── Animate spring-back to rest position ── */
        function springBack(paper, toFlipped){
            paper.style.transition = 'transform 0.5s cubic-bezier(0.25,1,0.5,1)';
            paper.style.transform  = toFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)';
            setTimeout(() => {
                paper.style.transition = '';
                paper.style.transform  = '';
            }, 500);
        }
    
        /* ── Start drag ── */
        function onDragStart(e, face){
            const isFront = face === 'f';
            const isBack  = face === 'b';
    
            if(isFront && !dragging){
                /* forward drag — pick top unflipped paper */
                if(current >= papers.length) return;
                const paper = papers[current];
                if(paper.classList.contains('bk-flipped')) return;
                dragPaper  = paper;
                dragDir    = 'fwd';
                liveAngle  = 0;
            } else if(isBack && !dragging){
                /* backward drag — pick the last flipped paper */
                if(current <= 0) return;
                const paper = papers[current - 1];
                if(!paper.classList.contains('bk-flipped')) return;
                dragPaper  = paper;
                dragDir    = 'bwd';
                liveAngle  = 180;
            } else { return; }
    
            dragging = true;
            startX   = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            pageW    = dragPaper.getBoundingClientRect().width || 400;
            dragPaper.style.transition = 'none';
            if(e.preventDefault) e.preventDefault();
        }
    
        /* ── Drag move ── */
        function onDragMove(e){
            if(!dragging || !dragPaper) return;
            const cx  = e.clientX || (e.touches && e.touches[0].clientX) || startX;
            const dx  = startX - cx;
    
            if(dragDir === 'fwd'){
                /* drag left to flip forward */
                const pct  = Math.max(0, Math.min(1, dx / pageW));
                liveAngle  = pct * 180;
            } else {
                /* drag right to flip backward */
                const pct  = Math.max(0, Math.min(1, -dx / pageW));
                liveAngle  = 180 - pct * 180;
            }
            dragPaper.style.transform = `rotateY(-${liveAngle}deg)`;
            if(e.preventDefault) e.preventDefault();
        }
    
        /* ── Release drag ── */
        function onDragEnd(){
            if(!dragging || !dragPaper) return;
            dragging = false;
    
            if(dragDir === 'fwd'){
                if(liveAngle > 60) doFlipFwd(dragPaper);
                else               springBack(dragPaper, false);
            } else {
                if(liveAngle < 120) doFlipBwd(dragPaper);
                else                springBack(dragPaper, true);
            }
            dragPaper = null;
            dragDir   = null;
        }
    
        /* Attach drag events to each face */
        papers.forEach(paper => {
            const front = paper.querySelector('.bk-face--f');
            const back  = paper.querySelector('.bk-face--b');
    
            if(front){
                front.addEventListener('mousedown',  e => onDragStart(e,'f'), {passive:false});
                front.addEventListener('touchstart', e => onDragStart(e,'f'), {passive:false});
            }
            if(back){
                back.addEventListener('mousedown',  e => onDragStart(e,'b'), {passive:false});
                back.addEventListener('touchstart', e => onDragStart(e,'b'), {passive:false});
            }
        });
    
        /* Global move / up so drag works even if mouse leaves the element */
        document.addEventListener('mousemove',  onDragMove, {passive:false});
        document.addEventListener('touchmove',  onDragMove, {passive:false});
        document.addEventListener('mouseup',    onDragEnd);
        document.addEventListener('touchend',   onDragEnd);
    
        /* ── Button fallback ── */
        document.getElementById('bk-next').addEventListener('click', () => {
            if(current >= papers.length) return;
            doFlipFwd(papers[current]);
        });
        document.getElementById('bk-prev').addEventListener('click', () => {
            if(current <= 0) return;
            doFlipBwd(papers[current - 1]);
        });
    
        /* ── Corner curl proximity shadow (visual only) ── */
        papers.forEach(paper => {
            const front      = paper.querySelector('.bk-face--f');
            const curlShadow = paper.querySelector('.bk-curl-shadow');
            if(!front || !curlShadow) return;
    
            front.addEventListener('mousemove', e => {
                if(paper.classList.contains('bk-flipped')) return;
                const r    = front.getBoundingClientRect();
                const dx   = r.right  - e.clientX;
                const dy   = r.bottom - e.clientY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                const maxD = 160;
                if(dist < maxD){
                    const t  = 1 - dist/maxD;
                    const sz = Math.round(t * 90);
                    curlShadow.style.width   = sz + 'px';
                    curlShadow.style.height  = sz + 'px';
                    curlShadow.style.opacity = String(t * 0.85);
                } else {
                    curlShadow.style.width = curlShadow.style.height = '0';
                    curlShadow.style.opacity = '0';
                }
            });
            front.addEventListener('mouseleave', () => {
                curlShadow.style.width = curlShadow.style.height = '0';
                curlShadow.style.opacity = '0';
            });
        });
    
        /* ── Individual corner folds — JS-inserted, only nearest visible corner activates ── */
        papers.forEach(paper => {
            ['f','b'].forEach(side => {
                const face = paper.querySelector(`.bk-face--${side}`);
                if(!face) return;
    
                /* Insert 4 fold divs into this face */
                ['tl','tr','bl','br'].forEach(c => {
                    const d = document.createElement('div');
                    d.className = `bk-fold bk-fold--${c}`;
                    face.appendChild(d);
                });
    
                let lastFold = null;
    
                face.addEventListener('mousemove', e => {
                    /* Gate: only respond when this face is actually visible */
                    const flipped = paper.classList.contains('bk-flipped');
                    if((side === 'f' && flipped) || (side === 'b' && !flipped)){
                        if(lastFold){ lastFold.classList.remove('bk-fold--on'); lastFold = null; }
                        return;
                    }
    
                    const r  = face.getBoundingClientRect();
                    /* Screen-relative mouse coords */
                    const sx = e.clientX - r.left;
                    const sy = e.clientY - r.top;
                    const w  = r.width, h = r.height;
                    const RADIUS = 80;
    
                    /* Distance to each SCREEN corner */
                    const dists = {
                        tl: Math.hypot(sx,     sy),
                        tr: Math.hypot(w - sx, sy),
                        bl: Math.hypot(sx,     h - sy),
                        br: Math.hypot(w - sx, h - sy)
                    };
                    const [screenCorner, dist] =
                        Object.entries(dists).reduce((a, b) => b[1] < a[1] ? b : a);
    
                    /*  Back face has rotateY(180deg) so its local X axis is MIRRORED.
                        Map screen-left ↔ DOM-right:
                        tl→tr, tr→tl, bl→br, br→bl                              */
                    let domCorner = screenCorner;
                    if(side === 'b'){
                        domCorner = screenCorner
                            .replace('r','_').replace('l','r').replace('_','l');
                    }
    
                    /* Deactivate previous */
                    if(lastFold) lastFold.classList.remove('bk-fold--on');
    
                    if(dist < RADIUS){
                        lastFold = face.querySelector(`.bk-fold--${domCorner}`);
                        if(lastFold) lastFold.classList.add('bk-fold--on');
                    } else {
                        lastFold = null;
                    }
                });
    
                face.addEventListener('mouseleave', () => {
                    face.querySelectorAll('.bk-fold--on')
                        .forEach(f => f.classList.remove('bk-fold--on'));
                    lastFold = null;
                });
            });
        });
    
        updateCounter();
    })();

});
