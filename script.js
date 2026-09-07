const langToggle=document.getElementById('langToggle');
const translatable=document.querySelectorAll('[data-en][data-es]');
const cvTop=document.getElementById('cvTop');
const cvHero=document.getElementById('cvHero');
let lang=localStorage.getItem('portfolio-lang')||'en';
function applyLanguage(nextLang){
  lang=nextLang; document.documentElement.lang=lang;
  translatable.forEach(el=>{const value=el.dataset[lang]; if(value) el.textContent=value;});
  langToggle.textContent=lang==='en'?'ES':'EN';
  const cv=lang==='en'?'assets/cv/Maycol_Zaraza_Aguilera_CV_EN.pdf':'assets/cv/Maycol_Zaraza_Aguilera_CV_ES.pdf';
  if(cvTop)cvTop.href=cv;if(cvHero)cvHero.href=cv;localStorage.setItem('portfolio-lang',lang);
}
langToggle?.addEventListener('click',()=>applyLanguage(lang==='en'?'es':'en'));applyLanguage(lang);
const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
