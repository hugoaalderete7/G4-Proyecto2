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
            
            <tr>
            <th scope="row">${(index + 1)}</th>
            
            <td>${getLocalStorage[index].title}</td>
            <td>${getLocalStorage[index].categoria}</td>
            <td>${getLocalStorage[index].descripcion}</td>
            <td>${getLocalStorage[index].url}</td>
            <td><button class="delete btn btn-white"><img src="/images/eliminar.png" alt=""></button></td>
            <td><button class="add btn btn-white" onclick="addMovieCarousel()"><img src="/images/mas.png" alt=""></button></td>

        </tr>
                    
                        `)
        }


        fila.innerHTML = arrayPeliculas
    } else {
        arrayPeliculas = [];
        fila.innerHTML = arrayPeliculas
    }
}

function addMovieCarousel() {
    let carousel = [];

    let getLocalStorage = JSON.parse(localStorage.getItem("Peliculas"));

    
        for (let index = 0; index < getLocalStorage.length; index++) {
            carousel.push(`
            
            <div class="carousel-item active">
            <img src="${getLocalStorage[index].url}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${getLocalStorage[index].title}</h5>
                <p><td>${getLocalStorage[index].categoria}</td></p>
            </div>
        </div> 
                        `)
        }


        carrusel.innerHTML = carousel
    }
