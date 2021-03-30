/*Contador automatico de Usuarios*/
const cantUsuarios = document.querySelector('#usuariosCant')

document.addEventListener('DOMContentLoaded', async() => {
    const respuesta = await fetch('https://localhost:5001/api/Usuario/cantidad/')
    const datos = await respuesta.json()
    cantUsuarios.textContent = datos
})


/*Contador automatico de mensajes*/
const cantMensajes = document.querySelector('#mensajesCant')

document.addEventListener('DOMContentLoaded', async() => {
    const respuesta = await fetch('https://localhost:5001/api/Mensajes/cantidad/')
    const datos = await respuesta.json()
    cantMensajes.textContent = datos
})

/*Contador automatico de Citas*/
const cantCita = document.querySelector('#citasCant')

document.addEventListener('DOMContentLoaded', async() => {
    const respuesta = await fetch('https://localhost:5001/api/Cita/cantidad/')
    const datos = await respuesta.json()
    cantCita.textContent = datos
})