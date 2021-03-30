const txtUsuarios = document.getElementById('usuario');
const txtContrasena = document.getElementById('contrasena');
const txtFormulario = document.getElementById('formulario');

txtFormulario.addEventListener('submit',async(e)=>{
    e.preventDefault();
    if(txtUsuarios.value == '' || txtContrasena == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          })
          return;
    }
    const data = {Name:txtUsuarios.value, Password: txtContrasena.value}

    try {
        const respuesta = await fetch(`https://localhost:5001/api/Usuario/login/${txtUsuarios.value}&${txtContrasena.value}`,{
        method:'POST', 
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)
    })
    const datos = await respuesta.json()
    console.log(datos);
    if(datos.status == 400)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o Contraseña incorrecta!!'
          })
          return
    }
    sessionStorage.setItem("USUARIO",datos.id)
    const IdUser = sessionStorage.getItem("USUARIO")
    console.log(IdUser);

        if(datos.roleId == 1){
        location.href ="../admin/index.html"
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usted no tiene permisos de administrador!!'
              })
        }


    } catch (error) {
        console.log(error)
        
    }
})