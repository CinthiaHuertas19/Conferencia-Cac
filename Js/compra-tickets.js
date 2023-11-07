
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