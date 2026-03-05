<script>
// ==========================
// 1️⃣ CAMBIO DE IDIOMA COMPLETO
// ==========================
let lang = "es";

function toggleLanguage() {
    lang = lang === "es" ? "en" : "es";
    
    // Recorrer todos los elementos con data-es / data-en
    document.querySelectorAll("[data-es]").forEach(el => {
        // Si es un input, textarea o select, cambiar placeholder o value
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT") {
            if(el.dataset[lang]) el.placeholder = el.dataset[lang];
        } else {
            // Texto normal
            el.textContent = el.dataset[lang];
        }
    });
}

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

// ==========================
// 4️⃣ FORMULARIO DE CONTACTO
// ==========================
const form = document.getElementById("contactForm");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

// Contador de caracteres
if(mensaje && contador){
    mensaje.addEventListener("input", () => {
        contador.textContent = mensaje.value.length + "/500 caracteres";
    });
}

// Envío simulado
if(form){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensaje enviado correctamente. Gracias por contactar con HOPE-UP.");
        form.reset();
        if(contador) contador.textContent = "0/500 caracteres";
    });
}
</script>

