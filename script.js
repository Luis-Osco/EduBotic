
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

const navbar = document.querySelector(".custom-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 70) navbar.classList.add("nav-scrolled");
  else navbar.classList.remove("nav-scrolled");
});




/* ventana emergente para los robots*/
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

//validacion del formulario y envio al whatsap
document.getElementById("contactForm")?.addEventListener("submit", e => {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Número de WhatsApp (cámbialo por el tuyo)
    const telefono = "62456246";

    // Crear mensaje usando encodeURIComponent
    const texto = encodeURIComponent(
        `Hola, soy ${nombre}.\nMi correo es: ${correo}.\n\n${mensaje}`
    );

    // Enlace a WhatsApp
    const url = `https://wa.me/591${telefono}?text=${texto}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(url, "_blank");

    // Limpiar formulario
    e.target.reset();
});





