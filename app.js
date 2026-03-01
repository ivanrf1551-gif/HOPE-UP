/* =====================================================
   HOPE-UP JAVASCRIPT 3.1
   Funcionalidad Profesional Interactiva – Parte 1
   ===================================================== */

/* ------------------------------
   NAVBAR EFECTO SCROLL Y STICKY
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
   FORMULARIO CONTACTO CON VALIDACIÓN
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
/* =====================================================
   HOPE-UP JAVASCRIPT 3.2
   Funcionalidad Profesional Interactiva – Parte 2
   ===================================================== */

/* ------------------------------
   TOOLTIP INTERACTIVO
--------------------------------*/
const tooltipElements = document.querySelectorAll("[data-tooltip]");

tooltipElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
        let tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = el.getAttribute("data-tooltip");
        document.body.appendChild(tooltip);

        const rect = el.getBoundingClientRect();
        tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + "px";
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
    });

    el.addEventListener("mouseleave", () => {
        const tooltip = document.querySelector(".tooltip");
        if (tooltip) tooltip.remove();
    });
});

/* ------------------------------
   DRAG & DROP DINÁMICO
--------------------------------*/
const draggables = document.querySelectorAll(".draggable");
let dragged = null;

draggables.forEach(item => {
    item.setAttribute("draggable", true);

    item.addEventListener("dragstart", (e) => {
        dragged = item;
        setTimeout(() => item.style.opacity = "0.5", 0);
    });

    item.addEventListener("dragend", () => {
        dragged.style.opacity = "1";
        dragged = null;
    });
});

const dropZones = document.querySelectorAll(".dropzone");

dropZones.forEach(zone => {
    zone.addEventListener("dragover", e => e.preventDefault());
    zone.addEventListener("dragenter", e => e.preventDefault());
    zone.addEventListener("drop", e => {
        if (dragged) zone.appendChild(dragged);
    });
});

/* ------------------------------
   FILTROS DINÁMICOS DE TARJETAS
--------------------------------*/
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".filter-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        cards.forEach(card => {
            if (filter === "all" || card.getAttribute("data-category") === filter) {
                card.style.display = "block";
                card.classList.add("fade-in");
            } else {
                card.style.display = "none";
                card.classList.remove("fade-in");
            }
        });
    });
});

/* ------------------------------
   LOCALSTORAGE PARA PREFERENCIAS
--------------------------------*/
const savePreference = (key, value) => {
    localStorage.setItem(key, value);
};

const getPreference = (key) => {
    return localStorage.getItem(key);
};

// Ejemplo: guardar idioma seleccionado
const langButtons = document.querySelectorAll(".lang-toggle button");

langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.innerText.toLowerCase();
        changeLanguage(lang);
        savePreference("preferredLang", lang);
    });
});

// Al cargar, aplicar idioma guardado
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = getPreference("preferredLang");
    if (savedLang) changeLanguage(savedLang);
});

/* ------------------------------
   ANIMACIONES AVANZADAS CON INTERSECT OBSERVER
--------------------------------*/
const animatedElements = document.querySelectorAll(".animate-on-scroll");

const observerAnim = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.3 });

animatedElements.forEach(el => observerAnim.observe(el));

/* ------------------------------
   NOTIFICACIONES MODALES AVANZADAS
--------------------------------*/
function showModal(message, type="info") {
    const modal = document.createElement("div");
    modal.className = `modal ${type}`;
    modal.innerHTML = `<p>${message}</p><span class="close-modal">✖</span>`;
    document.body.appendChild(modal);

    modal.querySelector(".close-modal").addEventListener("click", () => {
        modal.remove();
    });

    setTimeout(() => modal.remove(), 7000);
}

/* ------------------------------
   COOKIE CONSENT BANNER
--------------------------------*/
function checkCookies() {
    if (!getPreference("cookiesAccepted")) {
        const banner = document.createElement("div");
        banner.className = "cookie-banner";
        banner.innerHTML = `
            <p>Usamos cookies para mejorar la experiencia. <button id="acceptCookies">Aceptar</button></p>
        `;
        document.body.appendChild(banner);

        document.getElementById("acceptCookies").addEventListener("click", () => {
            savePreference("cookiesAccepted", true);
            banner.remove();
        });
    }
}

document.addEventListener("DOMContentLoaded", checkCookies);

/* ------------------------------
   ACCESIBILIDAD MEJORADA (TECLADO)
--------------------------------*/
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => modal.remove());
    }
});

/* ------------------------------
   HERRAMIENTA DE FEEDBACK RÁPIDO
--------------------------------*/
function quickFeedback(type) {
    showModal(`Gracias por tu feedback: ${type}`, "success");
}

const feedbackButtons = document.querySelectorAll(".feedback-btn");
feedbackButtons.forEach(btn => {
    btn.addEventListener("click", () => quickFeedback(btn.getAttribute("data-feedback")));
});

/* ------------------------------
   INICIALIZACIÓN ADICIONAL
--------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    observerAnim.disconnect(); // para performance
});
/* =====================================================
   HOPE-UP JAVASCRIPT 3.3
   Funcionalidad Profesional Interactiva – Parte 3
   ===================================================== */

/* ------------------------------
   DASHBOARD KPI DINÁMICO
--------------------------------*/
const kpiElements = document.querySelectorAll(".metric h3");
const kpiTargets = [4000, 850, 15, 25, 20];
kpiElements.forEach((el, idx) => {
    let count = 0;
    const target = kpiTargets[idx];
    const interval = setInterval(() => {
        count += Math.ceil(target / 50);
        if (count > target) count = target;
        el.innerText = idx === 4 ? count + "%" : count;
        if (count === target) clearInterval(interval);
    }, 50);
});

/* ------------------------------
   CHART.JS AVANZADO
--------------------------------*/
const chartOptions = {
    responsive: true,
    plugins: {
        legend: { display: true, position: "top", labels: { font: { size: 14 } } },
        title: { display: true, text: "Alertas detectadas semanalmente", font: { size: 16 } }
    },
    scales: {
        x: { title: { display: true, text: "Semana", font: { size: 14 } } },
        y: { title: { display: true, text: "Número de alertas", font: { size: 14 } }, beginAtZero: true }
    }
};

const ctxGraf1 = document.getElementById("grafico1").getContext("2d");
const grafico1 = new Chart(ctxGraf1, {
    type: "bar",
    data: {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [{ label: "Alertas detectadas", data: [5, 10, 7, 12], backgroundColor: "#FF6600" }]
    },
    options: chartOptions
});

const ctxGraf2 = document.getElementById("grafico2").getContext("2d");
const grafico2 = new Chart(ctxGraf2, {
    type: "line",
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril"],
        datasets: [{ label: "Reducción Riesgo (%)", data: [2, 5, 10, 15], borderColor: "#FF6600", fill: false, tension: 0.4 }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: "Reducción de riesgo mensual (%)", font: { size: 16 } }
        },
        scales: {
            x: { title: { display: true, text: "Mes", font: { size: 14 } } },
            y: { title: { display: true, text: "Reducción (%)", font: { size: 14 } }, beginAtZero: true }
        }
    }
});

/* ------------------------------
   EMOJIS INTERACTIVOS
--------------------------------*/
const emojiContainer = document.querySelector(".emojis");
const emojiDisplay = document.getElementById("emoji-seleccionado");

if (emojiContainer && emojiDisplay) {
    emojiContainer.addEventListener("click", e => {
        if (e.target.tagName === "SPAN") {
            const estado = e.target.innerText;
            emojiDisplay.innerText = `Has seleccionado: ${estado}`;
            showModal(`Estado registrado: ${estado}`, "info");
        }
    });
}

/* ------------------------------
   SIMULACIÓN INTERACTIVA DE RIESGO
--------------------------------*/
const riskBtn = document.getElementById("simulateRisk");
if (riskBtn) {
    riskBtn.addEventListener("click", () => {
        const random = Math.random();
        let msg = "";
        if (random < 0.3) msg = "Nivel bajo detectado. Mantén tus hábitos saludables 💙";
        else if (random < 0.6) msg = "Nivel moderado. Revisa tu estado emocional y cuida tu bienestar.";
        else msg = "Nivel alto detectado. Se recomienda asistencia profesional inmediata.";

        showModal(msg, random < 0.3 ? "success" : random < 0.6 ? "warning" : "danger");
    });
}

/* ------------------------------
   KPIS Y PROGRESS BARS ANIMADOS
--------------------------------*/
const progressElements = document.querySelectorAll(".progress-bar-fill");

progressElements.forEach(bar => {
    const targetWidth = bar.getAttribute("data-progress");
    let width = 0;
    const anim = setInterval(() => {
        if (width >= targetWidth) clearInterval(anim);
        else width++;
        bar.style.width = width + "%";
    }, 15);
});

/* ------------------------------
   NOTIFICACIONES EN TIEMPO REAL
--------------------------------*/
function showLiveNotification(text) {
    const notif = document.createElement("div");
    notif.className = "live-notification";
    notif.innerText = text;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 4000);
}

// Ejemplo de notificación simulada
setInterval(() => {
    const alerts = ["Nueva alerta detectada en estudiante A", "Alerta moderada registrada", "Nivel de riesgo actualizado"];
    const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
    showLiveNotification(randomAlert);
}, 15000);

/* ------------------------------
   FEEDBACK EN TIEMPO REAL
--------------------------------*/
const liveFeedbackButtons = document.querySelectorAll(".live-feedback-btn");
liveFeedbackButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const feedback = btn.getAttribute("data-feedback");
        showModal(`Feedback recibido: ${feedback}`, "success");
    });
});

/* ------------------------------
   VISUALIZACIÓN DE DATOS INTERACTIVA
--------------------------------*/
const dataCards = document.querySelectorAll(".data-card");

dataCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("expanded");
    });
});

/* ------------------------------
   TOOLTIP DINÁMICO EN DASHBOARD
--------------------------------*/
const dashboardMetrics = document.querySelectorAll(".metric");
dashboardMetrics.forEach(metric => {
    metric.addEventListener("mouseenter", () => {
        const info = metric.getAttribute("data-info");
        if (!info) return;
        const tooltip = document.createElement("div");
        tooltip.className = "dashboard-tooltip";
        tooltip.innerText = info;
        document.body.appendChild(tooltip);
        const rect = metric.getBoundingClientRect();
        tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + "px";
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
    });
    metric.addEventListener("mouseleave", () => {
        const tooltip = document.querySelector(".dashboard-tooltip");
        if (tooltip) tooltip.remove();
    });
});

/* ------------------------------
   INICIALIZACIÓN FINAL
--------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    animateCounters();
    revealOnScroll();
    updateTime();
    checkCookies();
});
