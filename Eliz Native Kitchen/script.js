/* =========================================================
   ELIZ NATIVE KITCHEN — script.js
========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- DATA ---------- */
  const DISHES = [
    // IGBO
    {
      tribe:'igbo', name:'Ofe Nsala', native:'White Soup', accent:'var(--leaf)',
      desc:'A peppery, palm-oil-free pot thickened with pounded yam, lifted with uziza leaf and your choice of catfish, chicken or goat.',
      price:'₦6,500', spice:2, served:'Pounded yam',
      icon:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6 12c0 3.3 2.7 6 6 6s6-2.7 6-6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>'
    },
    {
      tribe:'igbo', name:'Ofe Onugbu', native:'Bitterleaf Soup', accent:'var(--leaf)',
      desc:'Washed bitterleaf slow-cooked with cocoyam thickening, stockfish and assorted meat until the bitterness rounds into depth.',
      price:'₦7,000', spice:2, served:'Fufu / Garri',
      icon:'<path d="M12 3c-4 3-6 7-6 10a6 6 0 0012 0c0-3-2-7-6-10z" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      tribe:'igbo', name:'Ofe Owerri', native:'Mgbam-Mgbam', accent:'var(--leaf)',
      desc:'The lavish Owerri assembly pot — ugu, uziza and oha leaves with a generous mix of meat, fish and stockfish.',
      price:'₦8,000', spice:3, served:'Pounded yam',
      icon:'<path d="M4 14c2-6 6-10 8-10s6 4 8 10-3 7-8 7-10-1-8-7z" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      tribe:'igbo', name:'Ofe Egusi', native:'Melon Seed Soup', accent:'var(--leaf)',
      desc:'Ground melon seed fried in red palm oil with ugu leaf and a hearty mix of meat, dried fish and stockfish.',
      price:'₦6,800', spice:2, served:'Semo / Fufu',
      icon:'<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/>'
    },
    // YORUBA
    {
      tribe:'yoruba', name:'Efo Riro', native:'Rich Vegetable Soup', accent:'var(--gold)',
      desc:'Fresh efo tete simmered in red oil with locust bean, crayfish and a generous mix of assorted meat and fish.',
      price:'₦6,500', spice:3, served:'Amala / Eba',
      icon:'<path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      tribe:'yoruba', name:'Ewedu & Gbegiri', native:'The Ibadan Combo', accent:'var(--gold)',
      desc:'Silky jute-leaf draw soup paired with peppered bean soup and a ladle of stew — the classic double pot.',
      price:'₦7,200', spice:2, served:'Amala',
      icon:'<path d="M4 12h16M4 12c0-4 4-7 8-7s8 3 8 7-4 7-8 7-8-3-8-7z" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      tribe:'yoruba', name:'Gbegiri', native:'Bean Soup', accent:'var(--gold)',
      desc:'Honey beans, boiled soft and blended smooth, seasoned with palm oil, pepper and a touch of locust bean.',
      price:'₦5,800', spice:1, served:'Amala / Eba',
      icon:'<ellipse cx="12" cy="13" rx="8" ry="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6 9c1-2 4-3 6-3" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>'
    },
    {
      tribe:'yoruba', name:'Ogbono', native:'Draw Soup', accent:'var(--gold)',
      desc:'Ground ogbono seed cooked to a silky draw, enriched with palm oil, iru and your choice of protein.',
      price:'₦6,900', spice:2, served:'Eba / Fufu',
      icon:'<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 12c0-3 2-5 4-5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>'
    },
    // EDO
    {
      tribe:'edo', name:'Banga Soup', native:'Ofe Akwu', accent:'var(--clay)',
      desc:'Fresh palm fruit extract simmered with our house banga spice blend and choice fish until the oil turns deep red.',
      price:'₦7,500', spice:3, served:'Starch / Fufu',
      icon:'<path d="M12 4c4 3 7 7 7 11a7 7 0 01-14 0c0-4 3-8 7-11z" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      tribe:'edo', name:'Owo Soup', native:'Benin Light Soup', accent:'var(--clay)',
      desc:'A light, peppery Benin favourite thickened lightly with starch — clean, gently spiced, deeply comforting.',
      price:'₦6,700', spice:2, served:'Starch',
      icon:'<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="1.2" opacity=".5"/>'
    },
    {
      tribe:'edo', name:'Amiedi', native:'Black Soup', accent:'var(--clay)',
      desc:'The distinctive Edo black soup, coloured with unripe plantain skin ash, layered with vegetables and assorted meat.',
      price:'₦8,200', spice:2, served:'Pounded yam',
      icon:'<path d="M4 15c0-5 4-9 8-9s8 4 8 9-4 6-8 6-8-1-8-6z" fill="none" stroke="currentColor" stroke-width="1.6"/>'
    },
  ];

  const INGREDIENTS = [
    {n:'Uziza Leaf', s:'Igbo · aromatic pepper leaf', i:'🌿'},
    {n:'Palm Fruit', s:'Edo · pressed for banga', i:'🌴'},
    {n:'Ogbono Seed', s:'Yoruba/Igbo · draw thickener', i:'🌰'},
    {n:'Locust Bean', s:'Yoruba · iru, fermented depth', i:'🫘'},
    {n:'Bitterleaf', s:'Igbo · washed onugbu', i:'🍃'},
    {n:'Ata Rodo', s:'All three · scotch bonnet heat', i:'🌶️'},
    {n:'Stockfish', s:'Igbo · dried, deep umami', i:'🐟'},
    {n:'Crayfish', s:'Yoruba · smoky ground base', i:'🦐'},
    {n:'Ewedu Leaf', s:'Yoruba · jute leaf draw', i:'🌱'},
    {n:'Banga Spice', s:'Edo · house blend', i:'🧂'},
  ];

  const REVIEWS = [
    {q:'The Ofe Nsala tastes exactly like my mother\u2019s — peppery, light, no shortcuts. I come every week.', n:'Chiamaka O.', r:'Igbo pot regular'},
    {q:'Their Efo Riro and gbegiri combo is the closest to home I\u2019ve had outside Ibadan. Genuinely impressive.', n:'Tunde A.', r:'Yoruba pot regular'},
    {q:'I grew up on Banga soup in Benin City. Eliz Native Kitchen is the first place in Lagos that gets the spice blend right.', n:'Osaretin I.', r:'Edo pot regular'},
    {q:'Three different pots, three different traditions, and every single one is cooked properly. Rare to find.', n:'Feyi B.', r:'First-time guest'},
  ];

  /* ---------- MOBILE NAV ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  }));

  /* ---------- NAV SCROLL STATE + ACTIVE LINK ---------- */
  const nav = document.getElementById('siteNav');
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('toTop').classList.toggle('show', window.scrollY > 600);

    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------- BACK TO TOP ---------- */
  document.getElementById('toTop').addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));

  /* ---------- BUILD MENU GRID ---------- */
  const grid = document.getElementById('menuGrid');
  const spiceDots = (level) => {
    let out = '';
    for (let i=1;i<=3;i++) out += `<span class="${i<=level?'on':''}"></span>`;
    return out;
  };
  grid.innerHTML = DISHES.map(d => `
    <article class="dish-card reveal" data-tribe="${d.tribe}" style="--accent:${d.accent}">
      <div class="dish-top">
        <span class="dish-icon"><svg viewBox="0 0 24 24">${d.icon}</svg></span>
        <span class="dish-tag">${d.tribe}</span>
      </div>
      <h3>${d.name}</h3>
      <span class="dish-native">${d.native}</span>
      <p>${d.desc}</p>
      <div class="dish-meta">
        <span class="dish-price">${d.price}</span>
        <span class="spice" title="Spice level">${spiceDots(d.spice)}</span>
      </div>
    </article>
  `).join('');
  // re-observe newly injected reveal cards
  grid.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- MENU TAB FILTER ---------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      const tribe = btn.dataset.tribe;
      document.querySelectorAll('.dish-card').forEach(card => {
        const match = tribe === 'all' || card.dataset.tribe === tribe;
        card.classList.toggle('hide', !match);
      });
    });
  });

  /* ---------- SIGNATURE SPOTLIGHT ROTATOR ---------- */
  const spotlight = [
    {tribe:'Chef\u2019s Pot — Igbo', name:'Ofe Owerri', desc:'The lavish Owerri assembly pot — ugu, uziza and oha leaves with a generous mix of meat, fish and stockfish.', color:'#4F6B3C'},
    {tribe:'Chef\u2019s Pot — Yoruba', name:'Efo Riro', desc:'Fresh efo tete simmered in red oil with locust bean, crayfish and a generous mix of assorted meat and fish.', color:'#D9A441'},
    {tribe:'Chef\u2019s Pot — Edo', name:'Banga Soup', desc:'Fresh palm fruit, banga spice blend and choice fish, simmered low until the oil rises red. The soup that built Benin kitchens.', color:'#C1440E'},
  ];
  let spotIndex = 2; // start on Edo to match initial HTML
  const spotTribe = document.getElementById('spotlightTribe');
  const spotName = document.getElementById('spotlightName');
  const spotDesc = document.getElementById('spotlightDesc');
  const spotSoup = document.querySelector('.bowl-soup');
  const dots = document.querySelectorAll('#spotlightDots .dot');

  function showSpotlight(i){
    spotIndex = i;
    const s = spotlight[i];
    spotTribe.style.opacity = 0;
    spotName.style.opacity = 0;
    spotDesc.style.opacity = 0;
    setTimeout(() => {
      spotTribe.textContent = s.tribe;
      spotName.textContent = s.name;
      spotDesc.textContent = s.desc;
      if (spotSoup) spotSoup.setAttribute('fill', s.color);
      spotTribe.style.opacity = 1;
      spotName.style.opacity = 1;
      spotDesc.style.opacity = 1;
    }, 260);
    dots.forEach((d,di) => d.classList.toggle('active', di === i));
  }
  dots.forEach(d => d.addEventListener('click', () => { showSpotlight(+d.dataset.i); resetSpotTimer(); }));

  let spotTimer;
  function resetSpotTimer(){
    clearInterval(spotTimer);
    spotTimer = setInterval(() => showSpotlight((spotIndex+1)%spotlight.length), 5000);
  }
  showSpotlight(2);
  resetSpotTimer();

  /* ---------- INGREDIENT MARQUEE ---------- */
  const track = document.getElementById('marqueeTrack');
  const chip = (item) => `
    <div class="ingredient-chip">
      <span class="ic">${item.i}</span>
      <span>
        <span class="name">${item.n}</span>
        <span class="sub">${item.s}</span>
      </span>
    </div>`;
  track.innerHTML = INGREDIENTS.map(chip).join('') + INGREDIENTS.map(chip).join(''); // duplicated for seamless loop

  /* ---------- TESTIMONIAL CAROUSEL ---------- */
  const carTrack = document.getElementById('carouselTrack');
  const carDotsWrap = document.getElementById('carDots');
  carTrack.innerHTML = REVIEWS.map(r => `
    <div class="review-slide">
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <p class="review-quote">“${r.q}”</p>
        <div class="review-name">${r.n}</div>
        <div class="review-role">${r.r}</div>
      </div>
    </div>
  `).join('');
  carDotsWrap.innerHTML = REVIEWS.map((_,i) => `<button class="cdot ${i===0?'active':''}" data-i="${i}" aria-label="Go to review ${i+1}"></button>`).join('');

  let carIndex = 0;
  const carDots = carDotsWrap.querySelectorAll('.cdot');
  function goToSlide(i){
    carIndex = (i + REVIEWS.length) % REVIEWS.length;
    carTrack.style.transform = `translateX(-${carIndex*100}%)`;
    carDots.forEach((d,di) => d.classList.toggle('active', di===carIndex));
  }
  document.getElementById('carPrev').addEventListener('click', () => { goToSlide(carIndex-1); resetCarTimer(); });
  document.getElementById('carNext').addEventListener('click', () => { goToSlide(carIndex+1); resetCarTimer(); });
  carDots.forEach(d => d.addEventListener('click', () => { goToSlide(+d.dataset.i); resetCarTimer(); }));

  let carTimer;
  function resetCarTimer(){
    clearInterval(carTimer);
    carTimer = setInterval(() => goToSlide(carIndex+1), 6000);
  }
  resetCarTimer();

  /* ---------- RESERVATION FORM ---------- */
  const form = document.getElementById('reserveForm');
  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
  }

  function validateField(field, isValid){
    field.classList.toggle('invalid', !isValid);
    return isValid;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameField = document.getElementById('fName').closest('.field');
    const phoneField = document.getElementById('fPhone').closest('.field');
    const dateField = document.getElementById('fDate').closest('.field');
    const timeField = document.getElementById('fTime').closest('.field');

    const nameOk = validateField(nameField, document.getElementById('fName').value.trim().length > 1);
    const phoneOk = validateField(phoneField, /^[0-9+\s-]{7,}$/.test(document.getElementById('fPhone').value.trim()));
    const dateOk = validateField(dateField, !!document.getElementById('fDate').value);
    const timeOk = validateField(timeField, !!document.getElementById('fTime').value);

    if (!(nameOk && phoneOk && dateOk && timeOk)) {
      const firstInvalid = form.querySelector('.invalid input');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const submitBtn = form.querySelector('.btn-block');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      form.reset();
      showToast('Table reserved! We\u2019ll confirm by phone shortly.');
    }, 1100);
  });

  // live-clear invalid state as the guest types/selects
  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => el.closest('.field')?.classList.remove('invalid'));
  });

  /* ---------- FOOTER YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
