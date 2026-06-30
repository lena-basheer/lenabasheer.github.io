// ===== Theme toggle =====
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme){ body.setAttribute('data-theme', savedTheme); }

themeToggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== Mobile nav =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Scroll-triggered reveals =====
const revealEls = document.querySelectorAll('.section-inner, .skill-block, .project-card, .edu-card, .cert-list');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');

      // Trigger skill bars when skills section is visible
      if(entry.target.id === 'skills' || entry.target.closest?.('#skills')){
        document.querySelectorAll('.bar').forEach(bar => bar.classList.add('filled'));
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Separate observer just for skills section bars (robust trigger)
const skillsSection = document.getElementById('skills');
if(skillsSection){
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        document.querySelectorAll('.bar').forEach(bar => bar.classList.add('filled'));
        skillObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });
  skillObserver.observe(skillsSection);
}

// ===== KPI counters =====
const counters = document.querySelectorAll('.kpi-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
counters.forEach(c => counterObserver.observe(c));

function animateCounter(el){
  const target = parseInt(el.getAttribute('data-count'), 10);
  const duration = 900;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if(progress < 1){ requestAnimationFrame(tick); }
    else { el.textContent = target; }
  }
  requestAnimationFrame(tick);
}

// ===== Scroll to top button =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 480);
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Contact form (client-side only demo) =====
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!form.checkValidity()){
    formNote.textContent = 'Please fill in all fields with a valid email.';
    formNote.style.color = 'var(--amber)';
    return;
  }
  formNote.textContent = 'Thanks! Your message has been noted — connect this form to a backend or service like Formspree to send it live.';
  formNote.style.color = 'var(--green)';
  form.reset();
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
