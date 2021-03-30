const Datos = document.querySelector('#DatosH')


document.addEventListener('DOMContentLoaded', async() => {
    const respuesta = await fetch('https://localhost:5001/api/Horarios')
    const datos = await respuesta.json()
    console.log(datos)

    mostrarDatos(datos)
})

function mostrarDatos(datos) {

    let html = ''
    for (let i = 0; i < datos.length; i++) {
        console.log(datos.id)
        html += `<tr>
        <td>${datos[i].dia}</td>
        <td>${datos[i].desde}</td>
        <td>${datos[i].hasta}</td>
       
    </tr>`
    }
    Datos.innerHTML = html
}