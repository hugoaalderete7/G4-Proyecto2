let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let categoria = document.getElementById('categoria');
let descripcion = document.getElementById('descripcion');
let url = document.getElementById('url');
let carrusel = document.getElementById('carrusel');
let fila = document.getElementById('fila');

ReadFunction();

let pelicula = JSON.parse(localStorage.getItem('Peliculas')) || [];

buttonSave.addEventListener('click', () => {

    if (title.value != "" && categoria.value != "") {
        pelicula.push({
            id: Math.round(Math.random() * 100000),
            title: title.value,
            categoria: categoria.value,
            descripcion: descripcion.value,
            url: url.value,

        })
        localStorage.setItem('Peliculas', JSON.stringify(pelicula));
        title.value = "";
        categoria.value = "";
        descripcion.value = "";
        url.value = "";

        readFunction();
    } else {
        alert("Campos vacios")
    }

})

function ReadFunction() {
    //Actualizar la lista de mensages
    let arrayPeliculas = [];

    let getLocalStorage = JSON.parse(localStorage.getItem("Peliculas"));

    if (getLocalStorage != null) {
        for (let index = 0; index < getLocalStorage.length; index++) {
            arrayPeliculas.push(`
            
                        <td>
                            <p>${getLocalStorage[index].title}</p>
                        </td>
                        <td>
                            <p>${getLocalStorage[index].categoria}</p>
                        </td>
                        <th>
                            <p>${getLocalStorage[index].descripcion}</p>
                        </td>
                    
                        `)
        }
        

        fila.innerHTML = arrayPeliculas
    } else {
        arrayPeliculas = [];
        fila.innerHTML = arrayPeliculas
}
}
