// ─── LOADER ───
window.addEventListener('load', ()=>{
  setTimeout(()=>{ document.getElementById('loader').classList.add('hidden'); }, 1800);
});

// ─── NAV SCROLL ───
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('scrolled', window.scrollY > 60);
  const prog = document.getElementById('scrollProgress');
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  prog.style.width = pct + '%';
});

// ─── HAMBURGER ───
function toggleMenu(){
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileMenu(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

// ─── REVEAL ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// ─── TOAST ───
function showToast(title, msg, duration=3500){
  const t=document.getElementById('toast');
  document.getElementById('toastTitle').textContent=title;
  document.getElementById('toastMsg').textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), duration);
}

// ─── THEME TOGGLE ───
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('glonaxTheme', theme);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = theme === 'dark' ? '☾' : '☀';
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}
// Init: default is LIGHT, honour saved preference
(function() {
  const saved = localStorage.getItem('glonaxTheme') || 'light';
  applyTheme(saved);
})();

// ─── HERO VIDEO SWITCHER ─────────────────────
(function () {
  const vids = document.querySelectorAll('.hero-vid');
  const dotsContainer = document.querySelector('.hero-dots');
  let current = 0, timer;

  // Create dot buttons dynamically
  vids.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'hero-dot' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', `Video ${i + 1}`);
    btn.dataset.i = i;
    dotsContainer.appendChild(btn);
  });

  const dots = document.querySelectorAll('.hero-dot');

  function goTo(idx) {
    vids[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = idx;
    vids[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startTimer() {
    timer = setInterval(() => goTo((current + 1) % vids.length), 5000);
  }

  dots.forEach(d => {
    d.addEventListener('click', () => {
      clearInterval(timer);
      goTo(parseInt(d.dataset.i));
      startTimer();
    });
  });

  // Attempt autoplay on all videos
  vids.forEach(v => v.play().catch(() => {}));
  startTimer();
})();


// ─── TESTIMONIAL SPECIFIC SCRIPTS ───
// ─── TESTIMONIAL FILTER ───
function filterTestimonials(btn, division) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.testi-card').forEach(card => {
    if (division === 'all' || card.dataset.division === division) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// ─── STAR RATING ───
let selectedRating = 0;
function setRating(val) {
  selectedRating = val;
  document.getElementById('testiRating').value = val;
  document.querySelectorAll('.star-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < val);
  });
}

// ─── SUBMIT TESTIMONIAL ───
function submitTestimonial() {
  const name = document.getElementById('testiName').value.trim();
  const role = document.getElementById('testiRole').value.trim();
  const division = document.getElementById('testiDivision').value;
  const text = document.getElementById('testiText').value.trim();
  if (!name || !role || !division || !text || selectedRating === 0) {
    showToast('Incomplete Form', 'Please fill in all fields and select a rating.');
    return;
  }
  showToast('Thank You! ✦', 'Your testimonial has been submitted for review.');
  document.getElementById('testiName').value = '';
  document.getElementById('testiRole').value = '';
  document.getElementById('testiDivision').value = '';
  document.getElementById('testiText').value = '';
  setRating(0);
}

// ─── FAQ TOGGLE ───
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}


// ─── Oppotunities FILTER ───
function filterOpportunities(btn, division) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.opp-card').forEach(card => {
    if (division === 'all' || card.dataset.division === division) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterProps(btn,cat){
  document.querySelectorAll('.prop-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.prop-card').forEach(card=>{
    if(cat==='all'||card.dataset.cat.includes(cat))card.style.display='';
    else card.style.display='none';
  });
}

function switchPricingTab(btn,panelId){
  document.querySelectorAll('.pricing-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.pricing-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}
function switchProjectTab(btn,panelId){
  document.querySelectorAll('.projects-tabs-wrap .pricing-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.projects-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}



// ─── BLOG FILTER ───
function filterBlog(btn, category) {
  document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.blog-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
  // Also handle featured post
  const featured = document.querySelector('.blog-featured');
  if (featured) {
    if (category === 'all' || featured.dataset.category === category) {
      featured.style.display = '';
    } else {
      featured.style.display = 'none';
    }
  }
}

// ─── NEWSLETTER ───
function subscribeNewsletter() {
  const email = document.getElementById('nlEmail').value.trim();
  if (!email || !email.includes('@')) {
    showToast('Invalid Email', 'Please enter a valid email address.');
    return;
  }
  showToast('Subscribed! ✦', "You're now on the Glonax insights list.");
  document.getElementById('nlEmail').value = '';
}

// ─── LOGIN SPECIFIC SCRIPTS ───

(function() {
  const t = localStorage.getItem('glonaxTheme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();

function setDiv(btn, val) {
  document.querySelectorAll('.auth-div-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('loginDivision').value = val;
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;
  const alert = document.getElementById('loginAlert');
  alert.className = 'auth-alert';

  if (!email || !pass) {
    alert.className = 'auth-alert error show';
    alert.textContent = 'Please enter your email and password.';
    return;
  }
  if (!email.includes('@')) {
    alert.className = 'auth-alert error show';
    alert.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate login — in production this POSTs to Django
  alert.className = 'auth-alert success show';
  alert.textContent = 'Signing you in…';
  setTimeout(() => window.location.href = './account.html', 1000);
}

function showToast(title, msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}


// ─── PASSWORD RESET SPECIFIC SCRIPTS ───

(function() {
  const t = localStorage.getItem('glonaxTheme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();

let currentStep = 1;

function goToStep(n) {
  document.querySelectorAll('.reset-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step'+n).classList.add('active');
  ['sd1','sd2','sd3'].forEach((id,i) => {
    const el = document.getElementById(id);
    if(i+1 < n) { el.classList.add('done'); el.classList.remove('active'); }
    else if(i+1 === n) { el.classList.add('active'); el.classList.remove('done'); }
    else { el.classList.remove('active','done'); }
  });
  const labels = ['Enter Email','Check Email','New Password','Done'];
  document.getElementById('stepLabel').textContent = labels[n-1];
  currentStep = n;
}

function requestReset() {
  const email = document.getElementById('resetEmail').value.trim();
  const alert = document.getElementById('s1Alert');
  alert.className='auth-alert';
  if(!email || !email.includes('@')) {
    alert.className='auth-alert error show'; alert.textContent='Please enter a valid email address.'; return;
  }
  document.getElementById('sentTo').textContent = email;
  goToStep(2);
}

function checkPw(val) {
  const fill = document.getElementById('pwsFill');
  const label = document.getElementById('pwsLabel');
  let score = 0;
  if(val.length>=8) score++;
  if(/[A-Z]/.test(val)) score++;
  if(/[0-9]/.test(val)) score++;
  if(/[^A-Za-z0-9]/.test(val)) score++;
  fill.style.width=(score/4*100)+'%';
  fill.style.background=score<=1?'#ff6b6b':score===2?'#ffb347':score===3?'#ffd700':'#5ee87c';
  label.textContent=['','Weak','Fair','Good','Strong!'][score];
}

function setNewPassword() {
  const pass = document.getElementById('newPass').value;
  const passC = document.getElementById('newPassC').value;
  const alert = document.getElementById('s3Alert');
  alert.className='auth-alert';
  if(pass.length < 8) { alert.className='auth-alert error show'; alert.textContent='Password must be at least 8 characters.'; return; }
  if(pass !== passC) { alert.className='auth-alert error show'; alert.textContent='Passwords do not match.'; return; }
  goToStep(4);
}


// ─── VERIFY OTP SPECIFIC SCRIPTS ───


(function() {
  const t = localStorage.getItem('glonaxTheme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();

// OTP navigation
function moveNext(el, nextId) {
  if(el.value.length === 1) {
    el.classList.add('filled');
    if(nextId) document.getElementById(nextId).focus();
  } else { el.classList.remove('filled'); }
}
function movePrev(e, el, prevId) {
  if(e.key === 'Backspace' && !el.value && prevId) {
    document.getElementById(prevId).focus();
  }
}

// Timer
let secs = 299;
const timer = setInterval(() => {
  secs--;
  const m = Math.floor(secs/60);
  const s = secs%60;
  document.getElementById('timerVal').textContent = m+':'+(s<10?'0':'')+s;
  if(secs <= 0) {
    clearInterval(timer);
    document.getElementById('timerVal').textContent = 'Expired';
    document.getElementById('resendBtn').disabled = false;
  }
}, 1000);

function resendOtp() {
  const btn = document.getElementById('resendBtn');
  btn.disabled = true;
  btn.textContent = 'Code Sent!';
  setTimeout(() => { btn.textContent = 'Resend Code'; }, 30000);
}

function verifyOtp() {
  const digits = ['d1','d2','d3','d4','d5','d6'].map(id => document.getElementById(id).value).join('');
  const alert = document.getElementById('otpAlert');
  alert.className = 'auth-alert';

  if(digits.length < 6) {
    alert.className='auth-alert error show'; alert.textContent='Please enter all 6 digits.'; return;
  }
  // Accept any 6-digit code for frontend demo
  alert.className='auth-alert success show'; alert.textContent='Verified! Redirecting to your account…';
  setTimeout(() => window.location.href = './account.html', 1200);
}

// Paste support
document.addEventListener('paste', e => {
  const paste = (e.clipboardData||window.clipboardData).getData('text').replace(/\D/g,'').slice(0,6);
  ['d1','d2','d3','d4','d5','d6'].forEach((id,i) => {
    const el = document.getElementById(id);
    el.value = paste[i]||'';
    if(paste[i]) el.classList.add('filled');
  });
  if(paste.length === 6) document.getElementById('d6').focus();
});