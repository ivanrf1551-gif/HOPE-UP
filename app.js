<script>
<script>
// ==========================
// 1️⃣ GESTIÓN DE IDIOMA PROFESIONAL
// ==========================
const LanguageManager = (() => {
  let currentLang = "es"; // idioma inicial

  // Cambiar idioma
  const toggle = () => {
    currentLang = currentLang === "es" ? "en" : "es";
    updatePage();
  };

  // Actualizar todos los elementos de la página
  const updatePage = () => {
    document.querySelectorAll("[data-es]").forEach(el => {
      const tag = el.tagName.toUpperCase();

      // INPUT y TEXTAREA: placeholder
      if (tag === "INPUT" || tag === "TEXTAREA") {
        if (el.dataset[currentLang]) el.placeholder = el.dataset[currentLang];
      }
      // SELECT: actualizar cada opción si tiene data-es / data-en
      else if (tag === "SELECT") {
        Array.from(el.options).forEach(opt => {
          if (opt.dataset && opt.dataset[currentLang]) opt.textContent = opt.dataset[currentLang];
        });
      }
      // Elementos normales: h1, p, span, a...
      else {
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

// Botón de idioma
document.querySelectorAll(".language-btn").forEach(btn => {
  btn.addEventListener("click", () => LanguageManager.toggle());
});

// Inicializar página con idioma por defecto
document.addEventListener("DOMContentLoaded", () => LanguageManager.setLang("es"));
</script>
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
            if (s.dataset.value <= rating) {
                s.classList.add("active");
            }
        });
        ratingResult.innerText = "Valoración: " + rating + " / 5";
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
        // Mostrar texto según emoji seleccionado
        let text = "";
        switch(value){
            case "5": text="¡Muy bien! 😄"; break;
            case "4": text="Bien 🙂"; break;
            case "3": text="Normal 😐"; break;
            case "2": text="Triste 🙁"; break;
            case "1": text="Muy triste 😢"; break;
        }
        emotionResult.innerText = text;
    });
});

<script>
// ==========================
// 4️⃣ FORMULARIO DE CONTACTO PROFESIONAL
// ==========================
const ContactFormManager = (() => {
  const form = document.getElementById("contactForm");
  const mensaje = document.getElementById("mensaje");
  const contador = document.getElementById("contador");
  const MAX_CHARS = 500;

  // Actualiza el contador de caracteres
  const updateCounter = () => {
    if (contador && mensaje) {
      const length = mensaje.value.length;
      contador.textContent = `${length}/${MAX_CHARS} caracteres`;
    }
  };

  // Resetear formulario y contador
  const resetForm = () => {
    if(form) form.reset();
    if(contador) contador.textContent = `0/${MAX_CHARS} caracteres`;
  };

  // Envío simulado
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form) return;

    // Aquí podrías agregar validación extra o envío real a un servidor
    alert("✅ Mensaje enviado correctamente. Gracias por contactar con HOPE-UP.");
    resetForm();
  };

  // Inicializar eventos
  const init = () => {
    if(mensaje) mensaje.addEventListener("input", updateCounter);
    if(form) form.addEventListener("submit", handleSubmit);
    updateCounter(); // mostrar contador inicial
  };

  return { init, resetForm };
})();

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  ContactFormManager.init();
});
</script>

