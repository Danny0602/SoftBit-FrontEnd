const diaE = document.getElementById('diaE')
const desdeE = document.getElementById('desdeE')
const hastaE = document.getElementById('hastaE')

const btnAceptar = document.getElementById('btnAceptar')
const btnCancelar = document.getElementById('btnCancelar')

const id = sessionStorage.getItem("idHorarios")
document.addEventListener('DOMContentLoaded', async() => {
    console.log(id)
   
   
    const respuesta = await fetch('https://localhost:5001/api/Horarios/'+id)
    const datos = await respuesta.json()

    console.log(datos)
    diaE.value= datos.dia;
    desdeE.value=datos.desde
    hastaE.value=datos.hasta;
    
   
})



btnCancelar.addEventListener('click',()=>{
    window.location='./tabla_horarios.html'
})

btnAceptar.addEventListener('click', async(e) => {
    e.preventDefault();
    console.log(diaE.value);
    console.log(desdeE.value);
    console.log(hastaE.value);

    const data = {
        Dia:diaE.value,
        Desde:desdeE.value,
        hasta:hastaE.value,
        Id:id
 
     }
     try {
        const respuesta = await fetch(`https://localhost:5001/api/Horarios/`+id, {

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
            window.location='./tabla_horarios.html'
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