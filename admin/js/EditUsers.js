const nameE = document.getElementById('nameE')
const emailE = document.getElementById('emailE')
const passwordE = document.getElementById('passwordE')
const matriculaE = document.getElementById('matriculaE')
const btnAceptar = document.getElementById('btnAceptar')
const btnCancelar = document.getElementById('btnCancelar')
const id = sessionStorage.getItem("idUsuario")

document.addEventListener('DOMContentLoaded', async() => {
   
   
    const respuesta = await fetch('https://localhost:5001/api/Usuario/'+id)
    const datos = await respuesta.json()

    console.log(datos)
    nameE.value= datos.name;
    emailE.value=datos.email;
    passwordE.value=datos.password;
    matriculaE.value=datos.matricula;
   
})

btnCancelar.addEventListener('click',()=>{
window.location='./tabla_usuarios.html'
})

btnAceptar.addEventListener('click', async(e) => {
    e.preventDefault();
    console.log(nameE.value);
    console.log(emailE.value);
    console.log(passwordE.value);
    console.log(matriculaE.value);
   
    const data = {
       Name:nameE.value,
       Email:emailE.value,
       Password:passwordE.value,
       Matricula:matriculaE.value,
       Id:id

    }
    try {
        const respuesta = await fetch(`https://localhost:5001/api/Usuario/`+id, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
console.log(respuesta)
        const datos = await respuesta.json()
        if (datos && datos.status != 400) {
            Swal.fire({
                icon: 'success',
                title: 'Completado',
                text: 'Datos actualizados correctamente!!'
            })
            window.location='./tabla_usuarios.html'
        }
        console.log(datos);

    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: 'OPS',
            text: 'No se pudo aplicar los cambios!!'
        })
    }

    

})
