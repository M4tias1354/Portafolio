// Agregar un evento al cargar la página para restablecer el estado del menú
document.addEventListener("DOMContentLoaded", function() {
    menuVisible = false;
    document.getElementById("secciones").classList = "";
});

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    const seccionesDiv = document.getElementById("secciones");

    if (menuVisible) {
        seccionesDiv.classList = "";
        menuVisible = false;
    } else {
        seccionesDiv.classList = "responsive";
        menuVisible = true;
    }
}

// Función que se llama al seleccionar una opción del menú
function seleccionar() {
    const seccionesDiv = document.getElementById("secciones");

    // Oculto el menú una vez que selecciono una opción
    seccionesDiv.classList = "";
    menuVisible = false;
}
