/* ============================================================
   SCRIPT SUPER PREMIUM – EDUBOTIC 2025
============================================================ */

/* ============================================================
   1. SCROLL REVEAL (animación suave)
============================================================ */
const revealElements = document.querySelectorAll(
  '.service-card, .product-card, .portfolio-card, .curso-card2, .contact-card2, .valor-card2, .team-card, .timeline-content'
);

function revealOnScroll() {
  const trigger = window.innerHeight * 0.86;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ============================================================
   2. NAVBAR SOMBRA AL HACER SCROLL
============================================================ */
const navbar = document.querySelector(".custom-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 70) navbar.classList.add("nav-scrolled");
  else navbar.classList.remove("nav-scrolled");
});


/* ============================================================
   3. HOVER 3D EN TARJETAS (robots, cursos, portafolio)
============================================================ */
const cards3D = document.querySelectorAll(".product-card, .curso-card2, .portfolio-card");

cards3D.forEach(card => {
  card.addEventListener("mousemove", e => {
    const x = e.offsetX, y = e.offsetY;
    const midX = card.clientWidth / 2, midY = card.clientHeight / 2;
    const rotX = ((y - midY) / 25) * -1;
    const rotY = (x - midX) / 25;

    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});


/* ============================================================
   4. FILTROS PREMIUM (robots, cursos, portafolio)
============================================================ */
const filterBtns = document.querySelectorAll(".filter-btn2");
const items = document.querySelectorAll(".producto-item, .curso-item, .trabajo-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.filter;

    items.forEach(item => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
        item.style.opacity = "1";
      } else {
        item.style.opacity = "0";
        setTimeout(() => (item.style.display = "none"), 300);
      }
    });
  });
});


/* ============================================================
   5. MODAL DE PRODUCTOS (ROBOTS)
============================================================ */
const modal = new bootstrap.Modal(document.getElementById("productModal"));
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalAddCart = document.getElementById("modalAddCart");
const modalWhatsapp = document.getElementById("modalWhatsapp");

document.querySelectorAll(".view-product").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const desc = btn.dataset.desc;
    const img = btn.dataset.img;

    modalImg.src = img;
    modalName.textContent = name;
    modalPrice.textContent = price;
    modalDesc.textContent = desc;

    modalAddCart.dataset.name = name;
    modalAddCart.dataset.price = price;

    modalWhatsapp.href =
      `https://wa.me/59162456246?text=Hola,%20quiero%20comprar:%20${encodeURIComponent(name)}%20-%20Bs${price}`;

    modal.show();
  });
});


/* ============================================================
   6. MODAL PARA CURSOS
============================================================ */
const courseModal = new bootstrap.Modal(document.getElementById("courseModal"));
const courseImg = document.getElementById("courseImg");
const courseName = document.getElementById("courseName");
const coursePrice = document.getElementById("coursePrice");
const courseDesc = document.getElementById("courseDesc");
const courseWhatsapp = document.getElementById("courseWhatsapp");

document.querySelectorAll(".view-course").forEach(btn => {
  btn.addEventListener("click", () => {
    courseImg.src = btn.dataset.img;
    courseName.textContent = btn.dataset.name;
    coursePrice.textContent = btn.dataset.price;
    courseDesc.textContent = btn.dataset.desc;

    courseWhatsapp.href =
      `https://wa.me/59162456246?text=Hola,%20quiero%20inscribirme%20al%20curso:%20${encodeURIComponent(btn.dataset.name)}`;

    courseModal.show();
  });
});


/* ============================================================
   7. MODAL PARA TRABAJOS WEB
============================================================ */
const projectModal = new bootstrap.Modal(document.getElementById("projectModal"));
const projectImg = document.getElementById("projectImg");
const projectName = document.getElementById("projectName");
const projectDesc = document.getElementById("projectDesc");
const projectURL = document.getElementById("projectURL");

document.querySelectorAll(".view-project").forEach(btn => {
  btn.addEventListener("click", () => {
    projectImg.src = btn.dataset.img;
    projectName.textContent = btn.dataset.name;
    projectDesc.textContent = btn.dataset.desc;
    projectURL.href = btn.dataset.url;

    projectModal.show();
  });
});




/* ============================================================
   9. FORMULARIO CONTACTO – VALIDACIÓN
============================================================ */
document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensaje enviado correctamente 🎉");
  e.target.reset();
});


/* ============================================================
   10. SCROLL SUAVE PARA ANCLAS
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


/* ============================================================
   11. INICIALIZAR CARRITO AL CARGAR
============================================================ */
updateCartCount();
