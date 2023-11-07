// Función para calcular el total y mostrarlo
function calcularTotal() {

    // Obtener el valor de la categoría seleccionada y la cantidad de boletos
    const categoriaSelect = document.getElementById('categoriaSelect');
    const cantidadTickets = document.getElementById('cantidadTickets');
    const totalPago = document.getElementById('totalPago');

    const categoria = parseInt(categoriaSelect.value);
    const cantidad = parseInt(cantidadTickets.value);

    // Definir los precios y descuentos para cada categoría
    const precios = [0, 200, 100, 170]; // Índice 0 no se usa
    const descuentos = [0, 0.8, 0.5, 0.85]; // Índice 0 no se usa

    // Calcular el total
    const total = cantidad * precios[categoria] * descuentos[categoria];

    // Mostrar el total en la página
    totalPago.textContent = total.toFixed(2);
}

// Agregar un event listener al botón "Resumen" para llamar a la función calcularTotal
const btnResumen = document.getElementById('btnResumen');
btnResumen.addEventListener('click', calcularTotal);


// Defino valor de ticket
const valorTicket = 200;

// Defino porcentajes de descuento segÃºn categorÃ­a
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria       = document.getElementById("categoriaSelect");

// FunciÃ³n para quitar el estilo de error a los elementos del form
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

// Calculo total a pagar
function total_a_pagar() {

    // Ejecuto funcion para que quite todos los estilos de error en los campos que los tuvieran
    quitarClaseError();

    // Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
   /* if (nombre.value === "") {
        alert("Por favor, escriba­ tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    if (apellido.value === "" ) {
        alert("Por favor, escribÃ­ tu apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (mail.value === "") {
        alert("Por favor, escribÃ­ tu email.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    // Para determinar si el correo electrÃ³nico es vÃ¡lido o no
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(mail.value)) {
        alert("Por favor, escribÃ­ un correo electrÃ³nico vÃ¡lido.");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    */
    // Verifico si estÃ¡ ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
   /*
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingresÃ¡ correctamente cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    // Verifico que haya seleccionado una categorÃ­a, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (categoria.value == "") {
        alert("Por favor, seleccionÃ¡ una categorÃ­a.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
*/
    // Multiplico cantidad de tickets por el valor
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    // Aplico descuentos segÃºn categorÃ­a
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - ( (descuentoEstudiante / 100) * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    // Inserto el valor en el HTML
    totalPago.innerHTML = totalValorTickets;
}

// BotÃ³n Resumen recibe un escuchador y la funcion del cÃ¡lculo
btnResumen.addEventListener('click', total_a_pagar);

// FunciÃ³n para el botÃ³n Borrar para que borre el valor
function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);