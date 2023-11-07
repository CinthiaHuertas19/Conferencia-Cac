
// Agregar un event listener al botón "Resumen" para llamar a la función calcularTotal
const btnResumen = document.getElementById('btnResumen');
btnResumen.addEventListener('click', calcularTotal);

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

// Función para calcular el total y mostrarlo
function calcularTotal() {

    // Obtener el valor de la categoría seleccionada y la cantidad de boletos
    const categoriaSelect = document.getElementById('categoriaSelect').value;
    const cantidadTickets = document.getElementById('cantidadTickets').value;
    const totalPago = document.getElementById('totalPago');

    //const categoria = parseInt(categoriaSelect.value);
    const cantidad = parseInt(cantidadTickets);

    let precio = 200;

    if(categoriaSelect == "estudiante"){
        //Estudiante 80%
        precio = 200 - (200 * 0.80);
    }else if(categoriaSelect == "trainee"){
        //Trainee 50%
        precio = 200 / 2;
    }else{
        //Junior 15 %
        precio = 200 - (200 * 0.15);
    }    

    // Mostrar el total en la página
    totalPago.textContent = precio;
}