let mostrador = document.getElementById("mostrador");
let seleccionContainer = document.getElementById("seleccionContainer");
let imgSeleccionada = document.getElementById("imgSeleccionada");
let modeloSeleccionado = document.getElementById("modeloSeleccionado");
let precioSeleccionado = document.getElementById("precioSeleccionado");
let cerrarBtn = document.getElementById("cerrarBtn");
let agregarCarritoBtn = document.getElementById("agregarCarritoBtn");
let cantidadSelect = document.getElementById("cantidad");
// Agregar un evento al cargar la página para restablecer el estado del menú
document.addEventListener("DOMContentLoaded", function() {
    menuVisible = false;
    document.getElementById("nav").classList = "";
});

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que se llama al seleccionar una opción del menú
function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


// Función para dispositivos móviles
function cargarMobile(item) {
    quitarBordes();

    // Ajustar estilos del mostrador
    mostrador.style.width = "60%";
    mostrador.style.position = "relative";

    // Ajustar estilos del contenedor de selección
    seleccionContainer.style.width = "70%";
    seleccionContainer.style.opacity = "1";
    seleccionContainer.style.position = "fixed";
    seleccionContainer.style.top = "50%";  // Centra verticalmente en relación con mostrador
    seleccionContainer.style.left = "50%";  // Centra horizontalmente en relación con mostrador
    seleccionContainer.style.transform = "translate(-50%, -50%)";  // Ajusta para centrar correctamente

    // Agregar fondo de color gris
    seleccionContainer.style.background = "#CCCCCC"; // Puedes ajustar el color según tus preferencias

    // Ajustar borde del item seleccionado
    item.style.border = "2px solid #e47277";

    // Actualizar contenido del div seleccionado
    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;
    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}

// Función para PC
function cargarPC(item) {
        quitarBordes();
        mostrador.style.width = "60%";
        seleccionContainer.style.width = "40%";
        seleccionContainer.style.opacity = "1";
        item.style.border = "2px solid #e47277";
    
        imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
        modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;
        precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}

// Lógica para determinar el tipo de dispositivo y llamar a la función correspondiente
function cargar(item) {
    if (window.innerWidth < 768) {
        cargarMobile(item);
    } else {
        cargarPC(item);
    }
}


function cerrar() {
    mostrador.style.width = "100%";
    seleccionContainer.style.width = "0%";
    seleccionContainer.style.opacity = "0";
    quitarBordes();
}

function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

cerrarBtn.addEventListener("click", cerrar);






