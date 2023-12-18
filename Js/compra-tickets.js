// Obtener referencia al botón "Borrar"
const btnBorrar = document.getElementById('btnBorrar');

// Agregar un event listener al botón "Borrar" para llamar a la función borrarTotal
btnBorrar.addEventListener('click', borrarTotal);

// Función para borrar el contenido de "Total a pagar"
function borrarTotal() {
    const totalPago = document.getElementById('totalPago');
    totalPago.innerHTML = ''; 
}

// Agregar un event listener al botón "Resumen" para llamar a la función calcularTotal
const btnResumen = document.getElementById('btnResumen');
btnResumen.addEventListener('click', calcularTotal);

// Función para calcular el total y mostrarlo
function calcularTotal() {

    // Obtener el valor de la categoría seleccionada y la cantidad de boletos
    const categoriaSelect = document.getElementById('categoriaSelect').value;
    const cantidadTickets = document.getElementById('cantidadTickets').value;
    const totalPago = document.getElementById('totalPago');

    //const categoria = parseInt(categoriaSelect.value);
    const cantidad = parseInt(cantidadTickets);

    let precio = 200;

    switch (categoriaSelect) {
        case "-- Seleccione --":
            // el mismo precio
            precio = 200;
            break;
        case "estudiante":
            // Estudiante 80%
            precio = 200 - (200 * 0.80);
            break;
        case "trainee":
            // Trainee 50%
            precio = 200 - (200 * 0.50);
            break;
        case "junior":
            // Junior 15%
            precio = 200 - (200 * 0.15);
            break;
        default:
            // el mismo precio por defecto
            precio = 200;
            break;
    }

    // Mostrar el total en la página
    totalPago.textContent = precio;
}