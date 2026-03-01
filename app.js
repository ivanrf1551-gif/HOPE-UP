/* =====================================================
   HOPE-UP JAVASCRIPT
   Funcionalidad Profesional Interactiva
   ===================================================== */

/* ------------------------------
   NAVBAR EFECTO SCROLL
--------------------------------*/
window.addEventListener("scroll", function () {
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
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 10);
        } else {
            counter.innerText = target;
        }
    });
};

const observerCounters = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
});

counters.forEach(counter => observerCounters.observe(counter));

/* ------------------------------
   SCROLL REVEAL SUAVE
--------------------------------*/
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

/* ------------------------------
   SISTEMA MULTIIDIOMA ES / EN
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

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Por favor completa todos los campos.");
            return;
        }

        alert("Mensaje enviado correctamente. Gracias por contactar con HOPE-UP.");
        form.reset();
    });
}

/* ------------------------------
   SISTEMA VALORACIÓN ESTRELLAS
--------------------------------*/
const stars = document.querySelectorAll(".star");
let ratingValue = 0;

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        ratingValue = index + 1;
        stars.forEach((s, i) => {
            s.classList.toggle("active", i < ratingValue);
        });
    });
});

/* ------------------------------
   SIMULADOR DETECCIÓN RIESGO
--------------------------------*/
function simulateRisk() {
    const randomRisk = Math.random();

    if (randomRisk < 0.3) {
        showNotification("Nivel bajo detectado. Sigue cuidándote 💙");
    } else if (randomRisk < 0.6) {
        showNotification("Nivel moderado. Considera hablar con alguien de confianza.");
    } else {
        showNotification("Nivel alto detectado. Te recomendamos contactar con ayuda profesional.");
    }
}

function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

/* ------------------------------
   EFECTO SUAVE BOTONES
--------------------------------*/
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});

/* ------------------------------
   KPI PROGRESO ANIMADO
--------------------------------*/
const progressBars = document.querySelectorAll(".progress-bar-fill");

progressBars.forEach(bar => {
    const width = bar.getAttribute("data-progress");
    bar.style.width = width + "%";
});

/* ------------------------------
   MODO OSCURO OPCIONAL
--------------------------------*/
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

/* ------------------------------
   SMOOTH SCROLL
--------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

/* ------------------------------
   EFECTO CONTADOR TIEMPO REAL
--------------------------------*/
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById("currentTime");
    if (timeElement) {
        timeElement.innerText = now.toLocaleTimeString();
    }
}

setInterval(updateTime, 1000);

/* ------------------------------
   MENSAJE EMERGENCIA RÁPIDO
--------------------------------*/
function emergencyCall() {
    alert("Si estás en crisis inmediata, llama al 024 o al 112.");
}

/* ------------------------------
   INICIALIZACIÓN
--------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    revealOnScroll();
    updateTime();
});