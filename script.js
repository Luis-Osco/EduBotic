/* =============================
   SCRIPT GENERAL EDUBOTIC
   ============================= */

console.log("EduBotic website loaded successfully ✔️");

/* =============================
   FILTRO DE TRABAJOS WEB
   ============================= */

const filterButtons = document.querySelectorAll('.filter-btn');
const trabajos = document.querySelectorAll('.trabajo-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        // Quitar clase activa
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        trabajos.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = "block";
                item.style.opacity = "1";
            } else {
                item.style.display = "none";
                item.style.opacity = "0";
            }
        });
    });
});

/* =============================
   SCROLL SUAVE PARA ANCLAS
   ============================= */

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', e => {
        const seccion = document.querySelector(enlace.getAttribute('href'));
        if (seccion) {
            e.preventDefault();
            seccion.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* =============================
   ANIMACIÓN DE TARJETAS AL PASAR
   ============================= */

const cards = document.querySelectorAll('.curso-card, .producto-card, .trabajo-card');

cards.forEach(card => {

    card.addEventListener('mousemove', () => {
        card.style.transform = "scale(1.02)";
        card.style.transition = "0.2s";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });

});

/* =============================
   FORMULARIO (ENVÍO SIMULADO)
   ============================= */

const formulario = document.querySelector('form');

if (formulario) {
    formulario.addEventListener('submit', e => {
        e.preventDefault();
        alert('Mensaje enviado correctamente ✔️ Nos contactaremos pronto.');
        formulario.reset();
    });
}
