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

