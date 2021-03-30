const Datos = document.querySelector('#DatosH')

Datos.addEventListener('click', async(e) => {
    const id = e.target.id
    console.log(e.target.id)
    if (e.target.classList.contains("btn-warning")) {
        console.log("Editar")
        sessionStorage.setItem("idHorarios", id)
        location.href = "./update_h.html"

    }

    if (e.target.classList.contains("btn-warning2")) {
        const respuesta = await fetch(`https://localhost:5001/api/Horarios/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(id)
        })
        const datos = await respuesta.json()
        if (datos) {
            Swal.fire({
                icon: 'success',
                title: 'completado',
                text: 'El registro ha sido eliminado correctamente'
            })
            const respuesta = await fetch('https://localhost:5001/api/Horarios')
            const datos = await respuesta.json()

            mostrarDatos(datos)
        }


    }


})

document.addEventListener('DOMContentLoaded', async() => {
    const respuesta = await fetch('https://localhost:5001/api/Horarios')
    const datos = await respuesta.json()

    mostrarDatos(datos)
})

function mostrarDatos(datos) {

    let html = ''
    for (let i = 0; i < datos.length; i++) {
        console.log(datos.id)
        html += `<tr>
        <td>${datos[i].id}</td>
        <td>${datos[i].dia}</td>
        <td>${datos[i].desde}</td>
        <td>${datos[i].hasta}</td>
        

        <td  style="color: white;"><p class="btn btn-warning" id=${datos[i].id}>EDITAR</p></td style="color: white;">
        <td style="color: white;"><p class="btn btn-warning2 d" id=${datos[i].id}>ELIMINAR</p></td>
    </tr>`
    }
    Datos.innerHTML = html
}