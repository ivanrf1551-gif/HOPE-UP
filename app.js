/* =====================================================
   HOPE-UP JAVASCRIPT 3.3 – OPTIMIZADO
   Funcionalidad interactiva profesional
===================================================== */

/* ------------------------------
   NAVBAR EFECTO SCROLL Y STICKY
--------------------------------*/
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#081730";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.background = "rgba(10,31,68,0.95)";
        navbar.style.boxShadow = "none";
    }
});

/* ------------------------------
   CONTADORES ANIMADOS KPI
--------------------------------*/
const counters = document.querySelectorAll(".counter");
const speed = 200;
const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 10);
        } else counter.innerText = target;
    });
};

new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) animateCounters(); });
}).observe(document.querySelector(".dashboard"));

/* ------------------------------
   SCROLL REVEAL
--------------------------------*/
const revealElements = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 100) el.classList.add("active");
    });
};
window.addEventListener("scroll", revealOnScroll);

/* ------------------------------
   MULTIIDIOMA ES / EN
--------------------------------*/
const translations = {
    es: {
        heroTitle: "No estás solo. La tecnología también puede cuidar de ti.",
        heroSubtitle: "HOPE-UP es una herramienta basada en inteligencia artificial para la detección temprana del malestar emocional.",
        contactSuccess: "Mensaje enviado correctamente."
    },
    en: {
        heroTitle: "You are not alone. Technology can take care of you too.",
        heroSubtitle: "HOPE-UP is an AI-based tool for early emotional distress detection.",
        contactSuccess: "Message sent successfully."
    }
};
function changeLanguage(lang) {
    document.getElementById("hero-title").innerText = translations[lang].heroTitle;
    document.getElementById("hero-subtitle").innerText = translations[lang].heroSubtitle;
}

/* ------------------------------
   FORMULARIO CONTACTO
--------------------------------*/
const form = document.getElementById("contactForm");
if(form) form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.name.value, email = form.email.value, message = form.message.value;
    if(!name || !email || !message) return alert("Por favor completa todos los campos.");
    alert("Mensaje enviado correctamente. Gracias por contactar con HOPE-UP.");
    form.reset();
});

/* ------------------------------
   SISTEMA ESTRELLAS
--------------------------------*/
let ratingValue = 0;
document.querySelectorAll(".star").forEach((star,i) =>
    star.addEventListener("click", () => {
        ratingValue = i+1;
        document.querySelectorAll(".star").forEach((s,j) => s.classList.toggle("active", j<ratingValue));
    })
);

/* ------------------------------
   SIMULADOR DETECCIÓN RIESGO
--------------------------------*/
function simulateRisk() {
    const r = Math.random();
    showNotification(r<0.3?"Nivel bajo 💙":r<0.6?"Nivel moderado":"Nivel alto. Contacta ayuda");
}
function showNotification(msg) {
    const notif = document.createElement("div");
    notif.className = "notification"; notif.innerText = msg; document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 5000);
}
document.getElementById("simulateRisk")?.addEventListener("click", simulateRisk);

/* ------------------------------
   EFECTO BOTONES Y DARK MODE
--------------------------------*/
document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{
    btn.addEventListener("mouseover",()=>btn.style.transform="scale(1.05)");
    btn.addEventListener("mouseout",()=>btn.style.transform="scale(1)");
});
function toggleDarkMode(){ document.body.classList.toggle("dark-mode"); }

/* ------------------------------
   SMOOTH SCROLL
--------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", e=>{
        e.preventDefault();
        document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"});
    });
});

/* ------------------------------
   TIEMPO REAL
--------------------------------*/
setInterval(()=>{
    const el = document.getElementById("currentTime");
    if(el) el.innerText = new Date().toLocaleTimeString();
},1000);

/* ------------------------------
   MENSAJE EMERGENCIA
--------------------------------*/
function emergencyCall(){ alert("Si estás en crisis inmediata, llama al 024 o al 112."); }

/* ------------------------------
   TOOLTIP DINÁMICO
--------------------------------*/
document.querySelectorAll("[data-tooltip]").forEach(el=>{
    el.addEventListener("mouseenter",()=>{
        const tip = document.createElement("div");
        tip.className="tooltip"; tip.innerText=el.dataset.tooltip; document.body.appendChild(tip);
        const r = el.getBoundingClientRect();
        tip.style.top=r.top-tip.offsetHeight-5+"px";
        tip.style.left=r.left+r.width/2-tip.offsetWidth/2+"px";
    });
    el.addEventListener("mouseleave",()=>document.querySelector(".tooltip")?.remove());
});

/* ------------------------------
   INICIALIZACIÓN
--------------------------------*/
document.addEventListener("DOMContentLoaded", ()=>{
    animateCounters();
    revealOnScroll();
    updateTime?.();
    checkCookies?.();
});
