
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

    if(categoriaSelect == "-- Seleccione --"){
        //el mismo precio
        precio = 200;
    }else if(categoriaSelect == "estudiante"){
        //Estudiante 80%
        precio = 200 - (200*0.80);
    
    }else if (categoriaSelect == "trainee") {
        //Trainee 50%
        precio = 200 - (200*0.50)
    }else{
        //Junior 15 %
        precio = 200 - (200 *0.15);
    }    

    // Mostrar el total en la página
    totalPago.textContent = precio;
}