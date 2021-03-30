const Nombre = document.querySelector('#NombreM')
const TelefonoM = document.querySelector('#TelefonoM')
const EmailM = document.querySelector('#EmailM')
const MensajeM = document.querySelector('#MensajeM')
const EnviarM = document.querySelector('#EnviarM')

EnviarM.addEventListener('click', async(e) => {
    e.preventDefault()
    console.log(Nombre.value)
    console.log(TelefonoM.value)
    console.log(EmailM.value)
    console.log(MensajeM.value)
    if (Nombre.value == "" || TelefonoM.value == "" || EmailM.value == "" || MensajeM.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Es obligatorio llenar todos los campos!!!'
        })
        return
    }

    const data = {
        Nombre: NombreM.value,
        Email: EmailM.value,
        Telefono: TelefonoM.value,
        Mensaje: MensajeM.value
    }
    try {
        const respuesta = await fetch(`https://localhost:5001/api/Mensajes`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })

        const datos = await respuesta.json()
        if (datos && datos.status != 400) {
            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'Mensaje enviado correctamente!!'
            })

            NombreM.value = ""
            EmailM.value = ""
            TelefonoM.value = ""
            MensajeM.value = ""
        }
        console.log(datos);

    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: 'OPS',
            text: 'No se pudo enviar el mensaje, Intente de nuevo en un momento!!'
        })
    }
})