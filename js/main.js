const datosEmpleado = [];

function agregarDatos(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNaci = document.getElementById('fechaNaci').value;
    const cargo = document.getElementById('cargo').value;

    if(nombre && apellido && fechaNaci && cargo){
        const empleado = {
            nombre: nombre,
            apellido: apellido,
            fechaNaci: fechaNaci,
            cargo: cargo
        };
    
        datosEmpleado.push(empleado);
    
        alert('empleado cargado correctamente');
    
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('fechaNaci').value = '';
        document.getElementById('cargo').value = '';
    }
    
}


function mostrarEmpleados() {
    if (datosEmpleado.length > 0) {
        for (let i = 0; i < datosEmpleado.length; i++) {
            const empleado = datosEmpleado[i];
            let mensaje = `Empleado ${i + 1}:\n`;
            
            for (let propiedad in empleado) {
                mensaje += `${propiedad}: ${empleado[propiedad]}\n`;
            }

            alert(mensaje);
        }
        
    } else {
        alert('No hay empleados registrados.');
    }
}