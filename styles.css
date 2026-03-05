// ==========================
// 1️⃣ GESTIÓN DE IDIOMA PROFESIONAL
// ==========================
const LanguageManager = (() => {
  let currentLang = "es";

  const toggle = () => {
    currentLang = currentLang === "es" ? "en" : "es";
    updatePage();
  };

  const updatePage = () => {
    document.querySelectorAll("[data-es]").forEach(el => {
      const tag = el.tagName.toUpperCase();

      if (tag === "INPUT" || tag === "TEXTAREA") {
        if (el.dataset[currentLang]) el.placeholder = el.dataset[currentLang];
      } else if (tag === "SELECT") {
        Array.from(el.options).forEach(opt => {
          if (opt.dataset && opt.dataset[currentLang]) opt.textContent = opt.dataset[currentLang];
        });
      } else {
        if (el.dataset[currentLang]) el.textContent = el.dataset[currentLang];
      }
    });
  };

  return {
    toggle,
    setLang: (lang) => { currentLang = lang; updatePage(); },
    getLang: () => currentLang
  };
})();

document.querySelectorAll(".language-btn").forEach(btn => {
  btn.addEventListener("click", () => LanguageManager.toggle());
});

document.addEventListener("DOMContentLoaded", () => LanguageManager.setLang("es"));


// ==========================
// 2️⃣ VALORACIÓN POR ESTRELLAS
// ==========================
const stars = document.querySelectorAll(".star");
const ratingResult = document.getElementById("rating-result");

stars.forEach(star => {
  star.addEventListener("click", () => {
    let rating = star.dataset.value;
    stars.forEach(s => {
      s.classList.remove("active");
      if (s.dataset.value <= rating) s.classList.add("active");
    });
    ratingResult.innerText = `Valoración: ${rating} / 5`;
  });
});


// ==========================
// 3️⃣ VALORACIÓN POR EMOJIS
// ==========================
const emojis = document.querySelectorAll(".emoji");
const emotionResult = document.getElementById("emotion-result");

emojis.forEach(emoji => {
  emoji.addEventListener("click", () => {
    let value = emoji.dataset.value;
    let text = "";
    switch(value){
      case "5": text="¡Muy bien! 😄"; break;
      case "4": text="Bien 🙂"; break;
      case "3": text="Normal 😐"; break;
      case "2": text="Triste 🙁"; break;
      case "1": text="Muy triste 😢"; break;
    }
    emotionResult.innerText = text;
    showRecommendations(value);
  });
});


// ==========================
// 4️⃣ FORMULARIO DE CONTACTO PROFESIONAL
// ==========================
const ContactFormManager = (() => {
  const form = document.getElementById("contactForm");
  const mensaje = document.getElementById("mensaje");
  const contador = document.getElementById("contador");
  const MAX_CHARS = 500;

  const updateCounter = () => {
    if (contador && mensaje) {
      contador.textContent = `${mensaje.value.length}/${MAX_CHARS} caracteres`;
    }
  };

  const resetForm = () => {
    if(form) form.reset();
    if(contador) contador.textContent = `0/${MAX_CHARS} caracteres`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form) return;
    alert("✅ Mensaje enviado correctamente. Gracias por contactar con HOPE-UP.");
    resetForm();
  };

  const init = () => {
    if(mensaje) mensaje.addEventListener("input", updateCounter);
    if(form) form.addEventListener("submit", handleSubmit);
    updateCounter();
  };

  return { init, resetForm };
})();

document.addEventListener("DOMContentLoaded", () => ContactFormManager.init());


// ==========================
// 5️⃣ RECOMENDACIONES Y EJERCICIOS DE CALMA
// ==========================
function showRecommendations(moodValue){
  const recContainer = document.getElementById("recommendations");
  if(!recContainer) return;

  let content = "";
  switch(moodValue){
    case "5": 
      content = "<p>🎬 Te recomendamos ver comedias o series ligeras para mantener tu buen ánimo.</p>"; 
      break;
    case "4": 
      content = "<p>🎬 Puedes disfrutar de películas inspiradoras o documentales motivadores.</p>"; 
      break;
    case "3": 
      content = "<p>🧘 Realiza ejercicios de respiración profunda y escucha música relajante.</p>"; 
      break;
    case "2": 
      content = "<p>🧘 Prueba meditación guiada o estiramientos suaves para mejorar tu ánimo.</p>"; 
      break;
    case "1": 
      content = "<p>🚨 Si te sientes muy mal, llama al 112 o 024. También recomendamos ejercicios de calma y hablar con un profesional.</p>"; 
      break;
  }
  recContainer.innerHTML = content;
}


// ==========================
// 6️⃣ BOTONES DE EMERGENCIA
// ==========================
const emergency112 = document.getElementById("call112");
const emergency024 = document.getElementById("call024");

if(emergency112){
  emergency112.addEventListener("click", () => window.location.href = "tel:112");
}
if(emergency024){
  emergency024.addEventListener("click", () => window.location.href = "tel:024");
}
