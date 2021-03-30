const Nombre = document.querySelector('#NombreR')
const Matricula = document.querySelector('#MatriculaR')
const Email = document.querySelector('#EmailR')
const Password = document.querySelector('#PasswordR')
const Registrarse = document.querySelector('#RegistrarseR')

Registrarse.addEventListener('click', async(e) => {
    e.preventDefault()
    if (Nombre.value == "" || Matricula.value == "" || Email.value == "" || Password.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'OPS',
            text: 'Es obligatorio todos los datos!!!'
        })
        return
    }



    const data = {
        Name: Nombre.value,
        Email: Email.value,
        Password: Password.value,
        Matricula: Matricula.value
    }
    console.log(data)
    try {
        const respuesta = await fetch(`https://localhost:5001/api/Usuario`, {

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
                text: 'Cuenta creada correctamente!!'
            })
            location.href = "./iniciar-sesion.html"
            Nombre.value = ""
            Email.value = ""
            Password.value = ""
            Matricula.value = ""
        }
        console.log(datos);

    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: 'OPS',
            text: 'No se pudo crear la cuenta, intente de nuevo en un momento!!'
        })

    }

})