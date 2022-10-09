let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');
let carrusel = document.getElementById('carrusel');
let fila = document.getElementById('fila');



ReadFunction();

let pelicula = JSON.parse(localStorage.getItem('Peliculas')) || [];

buttonSave.addEventListener('click', () => {

    if (title.value != "" && description.value != "" && category.value != "") {
        pelicula.push({

            id: Math.round(Math.random() * 100000),
            title: title.value,
            category: categoria.value,
            description: descripcion.value,
            url: url.value,

        })
        localStorage.setItem('Peliculas', JSON.stringify(pelicula));
        title.value = "";
        category.value = "";
        description.value = "";
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
            arrayPeliculas.push( `
            <tr>
            <th scope="row">${(index + 3)}</th>
            
            <td>${getLocalStorage[index].title}</td>
            <td>${getLocalStorage[index].category}</td>
            <td>${getLocalStorage[index].description}</td>
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
        carousel.push(
            `
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}"
                class="active" aria-current="true" aria-label="Slide ${[index + 1]}"></button>
        </div>
        <div class="carousel-inner">


            <div class="carousel-item">
                <img src="${getLocalStorage[index].url}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${getLocalStorage[index].title}</h5>
                    <p>${getLocalStorage[index].category}</p>
                </div>
            </div>

        </div>
                        `)
    }

    carrusel.innerHTML = carousel
}
 