document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Abrir y cerrar menú en móvil
    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("open");
    });

    // Resaltar la página activa en el menú
    const links = document.querySelectorAll("#menu a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});
