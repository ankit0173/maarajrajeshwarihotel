# 3D Interactive Flip-Book Menu Code

Below is the complete HTML, CSS, and embedded JavaScript code for the 3D Flip-Book Menu used on the website.

## HTML & JavaScript
Add this inside your `<body>` tag where you want the menu to appear.

```html
<!-- ===================== MENU — REAL BOOK FLIP ===================== -->
<section class="menu" id="menu">
    <div class="container">
        <div class="section-header reveal">
            <span class="section-header__label">देसी रसोई</span>
            <h2 class="section-header__title">The Desi Kitchen</h2>
            <div class="section-header__line"></div>
            <p class="section-header__desc">Corner ko hover karo aur palat do — bilkul asli kitaab ki tarah.</p>
        </div>

        <div class="bk-scene">
            <!-- Drop-shadow platform below book -->
            <div class="bk-shadow"></div>

            <div class="bk-book" id="bk-book">

                <!-- ═══ STATIC LEFT SIDE (shows ornament when no page flipped yet) ═══ -->
                <div class="bk-static-left" id="bk-static-left">
                    <div class="bk-pg-border"></div>
                    <div class="bk-pg-inner bk-ornament-page">
                        <div class="bk-mandala">
                            <span class="bk-mandala-ring bk-mandala-ring--1">✦ ❋ ✦ ❋ ✦</span>
                            <span class="bk-mandala-ring bk-mandala-ring--2">— ✿ — ✿ —</span>
                            <span class="bk-mandala-center">🍽️</span>
                            <span class="bk-mandala-ring bk-mandala-ring--2">— ✿ — ✿ —</span>
                            <span class="bk-mandala-ring bk-mandala-ring--1">✦ ❋ ✦ ❋ ✦</span>
                        </div>
                    </div>
                </div>

                <!-- ═══ PAPER 0 — Cover (front) / Tandoor Text (back) ═══ -->
                <div class="bk-paper" id="bkp-0">
                    <div class="bk-face bk-face--f">
                        <div class="bk-pg-border"></div>
                        <div class="bk-pg-inner bk-cover-page">
                            <span class="bk-orn">✦</span>
                            <h2 class="bk-cover-h">Maa Rajrajeshwari<br>Hotel &amp; Dhaba</h2>
                            <p class="bk-cover-s">~ The Desi Kitchen Menu ~</p>
                            <span class="bk-orn">✦</span>
                        </div>
                        <div class="bk-curl-shadow"></div>
                    </div>
                    <div class="bk-face bk-face--b">
                        <div class="bk-pg-border"></div>
                        <div class="bk-pg-inner">
                            <div class="bk-pg-card">
                                <h3 class="bk-cat">🫓 Tandoor &amp; Rotis</h3>
                                <ul class="bk-items">
                                    <li>Tandoori Roti</li><li>Butter Roti</li><li>Malai Roti</li>
                                    <li>Aloo Paratha</li><li>Pyaaz Paratha</li>
                                    <li>Missi Roti</li><li>Laccha Paratha</li>
                                </ul>
                                <span class="bk-tag">🔥 Fresh 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ═══ PAPER 1 — Tandoor Image (front) / Dal Text (back) ═══ -->
                <div class="bk-paper" id="bkp-1">
                    <div class="bk-face bk-face--f">
                        <div class="bk-pg-img-face" style="background-image:url('Lacha-Paratha.jpg')">
                            <div class="bk-img-caption">🫓 Tandoor &amp; Rotis</div>
                        </div>
                        <div class="bk-curl-shadow"></div>
                    </div>
                    <div class="bk-face bk-face--b">
                        <div class="bk-pg-border"></div>
                        <div class="bk-pg-inner">
                            <div class="bk-pg-card">
                                <h3 class="bk-cat">🍲 Dal &amp; Sabziyan</h3>
                                <ul class="bk-items">
                                    <li>Dal Tadka</li><li>Dal Makhani</li><li>Sev Bhaji</li>
                                    <li>Sev Tamatar</li><li>Besan Gatta</li>
                                    <li>Seasonal Sabzi</li><li>Chana Masala</li><li>Aloo Matar</li>
                                </ul>
                                <span class="bk-tag">🚛 Truckers Fav</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ═══ PAPER 2 — Dal Image (front) / Paneer Text (back) ═══ -->
                <div class="bk-paper" id="bkp-2">
                    <div class="bk-face bk-face--f">
                        <div class="bk-pg-img-face" style="background-image:url('MoongDalTadka.webp')">
                            <div class="bk-img-caption">🍲 Dal &amp; Sabziyan</div>
                        </div>
                        <div class="bk-curl-shadow"></div>
                    </div>
                    <div class="bk-face bk-face--b">
                        <div class="bk-pg-border"></div>
                        <div class="bk-pg-inner">
                            <div class="bk-pg-card">
                                <h3 class="bk-cat">🧀 Paneer &amp; Specials</h3>
                                <ul class="bk-items">
                                    <li>Paneer Butter Masala</li><li>Kadhai Paneer</li>
                                    <li>Shahi Paneer</li><li>Matar Paneer</li>
                                    <li>Paneer Bhurji</li><li>Matar Masala</li><li>Mix Veg</li>
                                </ul>
                                <span class="bk-tag">✨ Premium</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ═══ PAPER 3 — Paneer Image (front) / Chai Text (back) ═══ -->
                <div class="bk-paper" id="bkp-3">
                    <div class="bk-face bk-face--f">
                        <div class="bk-pg-img-face" style="background-image:url('kadhai paneer.png')">
                            <div class="bk-img-caption">🧀 Paneer Specials</div>
                        </div>
                        <div class="bk-curl-shadow"></div>
                    </div>
                    <div class="bk-face bk-face--b">
                        <div class="bk-pg-border"></div>
                        <div class="bk-pg-inner">
                            <div class="bk-pg-card">
                                <h3 class="bk-cat">☕ Chai &amp; Nashta</h3>
                                <ul class="bk-items">
                                    <li>Masala Chai</li><li>Kulhad Chai</li>
                                    <li>Hot Coffee</li><li>Hot Milk</li>
                                    <li>Special Doodh Chai</li><li>Biscuit &amp; Namkeen</li>
                                </ul>
                                <span class="bk-tag">⏰ 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ═══ PAPER 4 — Chai Image (front) / Rice Text (back) ═══ -->
                <div class="bk-paper" id="bkp-4">
                    <div class="bk-face bk-face--f">
                        <div class="bk-pg-img-face" style="background-image:url('kulhad chai.webp')">
                            <div class="bk-img-caption">☕ Chai &amp; Nashta</div>
                        </div>
                        <div class="bk-curl-shadow"></div>
                    </div>
                    <div class="bk-face bk-face--b">
                        <div class="bk-pg-border"></div>
                        <div class="bk-pg-inner">
                            <div class="bk-pg-card">
                                <h3 class="bk-cat">🍚 Rice &amp; Chawal</h3>
                                <ul class="bk-items">
                                    <li>Jeera Rice</li><li>Veg Pulao</li><li>Plain Rice</li>
                                    <li>Khichdi</li><li>Dahi Chawal</li>
                                </ul>
                                <span class="bk-tag">🍱 Comfort Food</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ═══ PAPER 5 — Rice Image (front) / Beverages Text (back) ═══ -->
                <div class="bk-paper" id="bkp-5">
                    <div class="bk-face bk-face--f">
                        <div class="bk-pg-img-face" style="background-image:url('jeera-rice-1-500x500.webp')">
                            <div class="bk-img-caption">🍚 Rice &amp; Chawal</div>
                        </div>
                        <div class="bk-curl-shadow"></div>
                    </div>
                    <div class="bk-face bk-face--b">
                        <div class="bk-pg-border"></div>
                        <div class="bk-pg-inner">
                            <div class="bk-pg-card">
                                <h3 class="bk-cat">🥤 Beverages &amp; Extras</h3>
                                <ul class="bk-items">
                                    <li>Lassi (Sweet / Salt)</li><li>Chaach</li>
                                    <li>Cold Drinks</li><li>Lemon Water</li>
                                    <li>Masala Papad</li><li>Green Salad</li>
                                </ul>
                                <span class="bk-tag">🌿 Fresh Always</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ═══ PAPER 6 — Beverages Image (front) / Back Cover (back) ═══ -->
                <div class="bk-paper" id="bkp-6">
                    <div class="bk-face bk-face--f">
                        <div class="bk-pg-img-face" style="background-image:url('cold drinks.webp')">
                            <div class="bk-img-caption">🥤 Beverages &amp; Extras</div>
                        </div>
                        <div class="bk-curl-shadow"></div>
                    </div>
                    <div class="bk-face bk-face--b">
                        <div class="bk-pg-border"></div>
                        <div class="bk-pg-inner bk-cover-page">
                            <span class="bk-orn">✦</span>
                            <h2 class="bk-cover-h">Enjoy Your Meal!</h2>
                            <p class="bk-cover-s">~ शुभ भोजन ~<br>Thank you for visiting!</p>
                            <span class="bk-orn">✦</span>
                        </div>
                    </div>
                </div>

                <!-- ═══ SPINE ═══ -->
                <div class="bk-spine"></div>
            </div>

            <div class="bk-controls">
                <button class="btn btn--secondary" id="bk-prev">&#8249; Prev Page</button>
                <span class="bk-counter" id="bk-counter">1 / 8</span>
                <button class="btn btn--primary" id="bk-next">Next Page &#8250;</button>
            </div>
        </div>
    </div>
</section>

<script>
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
</script>
```

## CSS Code
Add this to your CSS file (e.g. `styles.css`) or inside a `<style>` block.

```css
/* ============================================
   MENU — THE DESI KITCHEN (Digital Flip-Book)
   ============================================ */
.menu {
    padding: var(--section-pad) 0;
    background: var(--bg-primary);
    position: relative;
    border-top: none;
}

/* ============================================
   REAL 3-D STACKED PAGE FLIP BOOK  (bk-*)
   ============================================ */

.bk-scene {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    margin: 50px auto;
    position: relative;
}

/* Blurred shadow on the "table" below the book */
.bk-shadow {
    position: absolute;
    bottom: 60px;
    left: 50%; transform: translateX(-50%);
    width: 80%;
    height: 30px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.28) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    filter: blur(6px);
}

/* ── Open-book container ── */
.bk-book {
    position: relative;
    width: 100%;
    max-width: 940px;
    height: 560px;
    /* Perspective on the PARENT so children share it */
    perspective: 2200px;
    perspective-origin: 50% 50%;
    filter: drop-shadow(0 24px 48px rgba(0,0,0,0.22))
            drop-shadow(0 4px 10px rgba(128,0,0,0.15));
}

/* ── Static left page (shows ornament at start) ── */
.bk-static-left {
    position: absolute;
    left: 0; top: 0;
    width: 50%; height: 100%;
    /* Rich warm parchment — layered gradient */
    background:
        linear-gradient(160deg, #fdf6e3 0%, #f7e9c8 40%, #f0ddb0 100%),
        url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 0v28M0 14h28' stroke='%23c8983a' stroke-opacity='0.06' stroke-width='1'/%3E%3C/svg%3E");
    background-blend-mode: normal;
    border-radius: 4px 0 0 4px;
    box-shadow: inset -8px 0 22px rgba(100,60,10,0.10);
    z-index: 0;
    transition: opacity 0.5s;
}

/* ── Each paper (stacked on the right) ── */
.bk-paper {
    position: absolute;
    right: 0; top: 0;
    width: 50%; height: 100%;
    transform-origin: left center;
    transform-style: preserve-3d;
    transition: transform 0.85s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}

/* When flipped: swing from right half to left half */
.bk-paper.bk-flipped {
    transform: rotateY(-180deg);
}

/* ── A face of a paper (front = right side, back = left side) ── */
.bk-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    /* Warm aged parchment — slightly different on each face for depth */
    background:
        linear-gradient(155deg,
            #fdf8f0 0%,
            #f9edd5 35%,
            #f3e2c0 70%,
            #ecd6aa 100%
        );
    overflow: hidden;
}

.bk-face--f {
    box-shadow: inset 8px 0 20px rgba(0,0,0,0.05);
    border-radius: 0 4px 4px 0;
    cursor: grab !important;
}
.bk-face--f:active { cursor: grabbing !important; }

.bk-face--b {
    transform: rotateY(180deg);
    box-shadow: inset -8px 0 20px rgba(0,0,0,0.05);
    border-radius: 4px 0 0 4px;
    cursor: grab !important;
}
.bk-face--b:active { cursor: grabbing !important; }

/* ── Corner fold elements (JS-inserted, 1 per corner per face) ── */
.bk-fold {
    position: absolute;
    width: 80px; height: 80px;   /* fixed size — clip-path controls visibility */
    pointer-events: none;
    z-index: 35;
    /* Springy bezier: fold peels from corner outward naturally */
    transition: clip-path 0.32s cubic-bezier(0.34, 1.4, 0.64, 1);
}

/* ── Bottom-right corner ──
   Invisible: all 3 points collapsed at bottom-right (100%,100%)
   Visible:   triangle from (100%,0) → (100%,100%) → (0,100%)          */
.bk-fold--br {
    bottom: 0; right: 0;
    clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
    background:
        /* crease/edge: darkest at the corner tip */
        linear-gradient(225deg,
            #8b5e1a 0%,
            #c4913a 18%,
            #debb72 36%,
            #f0e0b0 58%,
            rgba(245,234,195,0) 80%
        );
    filter: drop-shadow(-4px -4px 14px rgba(0,0,0,0.30));
}
.bk-fold--br.bk-fold--on {
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
}

/* ── Top-right corner ──
   Invisible: (100%,0),(100%,0),(100%,0)
   Visible:   (100%,0) → (100%,100%) → (0,0)                           */
.bk-fold--tr {
    top: 0; right: 0;
    clip-path: polygon(100% 0, 100% 0, 100% 0);
    background:
        linear-gradient(135deg,
            #8b5e1a 0%,
            #c4913a 18%,
            #debb72 36%,
            #f0e0b0 58%,
            rgba(245,234,195,0) 80%
        );
    filter: drop-shadow(-4px 4px 14px rgba(0,0,0,0.30));
}
.bk-fold--tr.bk-fold--on {
    clip-path: polygon(100% 0, 100% 100%, 0 0);
}

/* ── Bottom-left corner ──
   Invisible: (0,100%),(0,100%),(0,100%)
   Visible:   (0,0) → (100%,100%) → (0,100%)                           */
.bk-fold--bl {
    bottom: 0; left: 0;
    clip-path: polygon(0 100%, 0 100%, 0 100%);
    background:
        linear-gradient(315deg,
            #8b5e1a 0%,
            #c4913a 18%,
            #debb72 36%,
            #f0e0b0 58%,
            rgba(245,234,195,0) 80%
        );
    filter: drop-shadow(4px -4px 14px rgba(0,0,0,0.30));
}
.bk-fold--bl.bk-fold--on {
    clip-path: polygon(0 0, 100% 100%, 0 100%);
}

/* ── Top-left corner ──
   Invisible: (0,0),(0,0),(0,0)
   Visible:   (0,0) → (100%,0) → (0,100%)                              */
.bk-fold--tl {
    top: 0; left: 0;
    clip-path: polygon(0 0, 0 0, 0 0);
    background:
        linear-gradient(45deg,
            #8b5e1a 0%,
            #c4913a 18%,
            #debb72 36%,
            #f0e0b0 58%,
            rgba(245,234,195,0) 80%
        );
    filter: drop-shadow(4px 4px 14px rgba(0,0,0,0.30));
}
.bk-fold--tl.bk-fold--on {
    clip-path: polygon(0 0, 100% 0, 0 100%);
}

/* ── Ornate double border ── */
.bk-pg-border {
    position: absolute;
    inset: 14px;
    border: 2px solid #6b2020;          /* deep maroon */
    pointer-events: none;
    z-index: 2;
}
.bk-pg-border::before {
    content: '';
    position: absolute;
    inset: 5px;
    border: 1px solid rgba(180, 100, 20, 0.28);  /* warm gold inner ring */
}
/* top center ornament */
.bk-pg-border::after {
    content: '✦';
    position: absolute;
    top: -13px; left: 50%;
    transform: translateX(-50%);
    font-size: 1.1rem;
    color: #6b2020;
    background: transparent;            /* see-through to show page gradient */
    padding: 0 6px;
}

/* ── Content area inside border ── */
.bk-pg-inner {
    position: absolute;
    inset: 38px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

/* ── Full-bleed IMAGE face (no border, covers entire face) ── */
.bk-pg-img-face {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
    border-radius: inherit;
    /* Layered gradients: vignette darkens edges, bottom gradient for caption */
    box-shadow:
        inset 0 0 60px rgba(50, 20, 0, 0.25),
        inset 0 -120px 80px rgba(50, 15, 0, 0.55);
}
/* Subtle maroon frame on image pages */
.bk-pg-img-face::before {
    content: '';
    position: absolute;
    inset: 12px;
    border: 2px solid rgba(255,240,210,0.35);
    border-radius: 2px;
    pointer-events: none;
    z-index: 3;
}

/* ── Caption bar pinned to bottom of image ── */
.bk-img-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 18px 20px 20px;
    font-family: var(--font-heading);
    font-size: clamp(1.1rem, 2vw, 1.45rem);
    font-weight: 700;
    color: #fff8e8;
    letter-spacing: 0.04em;
    text-align: center;
    text-shadow: 0 2px 12px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.4);
    z-index: 4;
}

/* ── Clickable curl zone (transparent, bottom-right corner) ── */
.bk-curl-zone {
    position: absolute;
    bottom: 0; right: 0;
    width: 80px; height: 80px;
    z-index: 20;
    cursor: pointer !important;
}

/* ── CSS curl shadow that grows via JS ── */
.bk-curl-shadow {
    position: absolute;
    bottom: 0; right: 0;
    width: 0; height: 0;
    background: linear-gradient(
        225deg,
        rgba(240,228,195,1) 0%,
        rgba(230,210,165,0.85) 40%,
        rgba(200,175,130,0.1) 100%
    );
    box-shadow: -4px -4px 10px rgba(0,0,0,0.18);
    border-radius: 80px 0 0 0;
    pointer-events: none;
    z-index: 15;
    opacity: 0;
    transition: border-radius 0.15s;
}

/* ── Spine ── */
.bk-spine {
    position: absolute;
    left: 50%; top: 0; bottom: 0;
    width: 18px;
    transform: translateX(-50%);
    z-index: 30;
    pointer-events: none;
    background: linear-gradient(90deg,
        rgba(0,0,0,0.02) 0%,
        rgba(0,0,0,0.10) 30%,
        rgba(128,0,0,0.40) 48%,
        rgba(128,0,0,0.40) 52%,
        rgba(0,0,0,0.10) 70%,
        rgba(0,0,0,0.02) 100%
    );
}
.bk-spine::before, .bk-spine::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0; width: 1.5px;
    background: rgba(128,0,0,0.55);
}
.bk-spine::before { left: 28%; }
.bk-spine::after  { right: 28%; }

/* ── Controls ── */
.bk-controls {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
}
.bk-counter {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    color: var(--maroon);
    opacity: 0.7;
    min-width: 60px;
    text-align: center;
}

/* ────────── COVER PAGE CONTENT ────────── */
.bk-ornament-page {
    flex-direction: column;
    gap: 14px;
    text-align: center;
    justify-content: center;
}

/* ── Mandala ornament (static left page) ── */
.bk-mandala {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.bk-mandala-ring {
    font-family: var(--font-heading);
    letter-spacing: 0.18em;
    display: block;
}
.bk-mandala-ring--1 {
    font-size: 1.1rem;
    color: rgba(128, 0, 0, 0.45);
}
.bk-mandala-ring--2 {
    font-size: 0.95rem;
    color: rgba(180, 110, 10, 0.5);
}
.bk-mandala-center {
    font-size: 2.8rem;
    display: block;
    filter: drop-shadow(0 2px 6px rgba(128,0,0,0.2));
    margin: 4px 0;
}

.bk-orn {
    font-size: 2rem;
    color: rgba(128,0,0,0.4);
    display: block;
    line-height: 1;
}
.bk-cover-page {
    flex-direction: column;
    text-align: center;
    gap: 12px;
}
.bk-cover-h {
    font-family: var(--font-heading);
    font-size: clamp(1.6rem, 2.8vw, 2.5rem);
    color: var(--maroon);
    font-weight: 700;
    line-height: 1.25;
}
.bk-cover-s {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--maroon-light);
    opacity: 0.85;
}

/* ────────── ITEM PAGE CONTENT ────────── */
.bk-pg-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.bk-cat {
    font-family: var(--font-heading);
    font-size: clamp(1.15rem, 2.2vw, 1.65rem);
    font-weight: 700;
    color: var(--maroon);
    border-bottom: 2.5px solid var(--maroon);
    padding-bottom: 10px;
    margin-bottom: 14px;
    text-align: center;
    letter-spacing: 0.02em;
}
.bk-items {
    list-style: none;
    padding: 0; margin: 0;
    flex: 1;
}
.bk-items li {
    font-size: clamp(0.92rem, 1.35vw, 1.07rem);
    font-weight: 500;
    color: var(--text-primary);
    padding: 7px 0;
    border-bottom: 1px dashed rgba(128,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 8px;
}
.bk-items li::before {
    content: '•';
    color: var(--maroon);
    font-size: 1.1rem;
    flex-shrink: 0;
}
.bk-items li:last-child { border-bottom: none; }
.bk-tag {
    display: inline-block;
    margin-top: 12px;
    font-size: 0.75rem;
    background: rgba(128,0,0,0.07);
    color: var(--maroon);
    border: 1px solid rgba(128,0,0,0.28);
    border-radius: 20px;
    padding: 3px 12px;
    font-family: var(--font-body);
    text-align: center;
    align-self: center;
}
```
