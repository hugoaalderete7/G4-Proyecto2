window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 5,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente',
        }
      });
});


// // prueba agregado de pelicula en carrusel


// // variables juli 

let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');
let id = document.getElementById('id');
// let fila = document.getElementById('datatable-tbody');
let search = document.getElementById('search-movie');
let filtrarbtn = document.getElementById('filtrarbtn');


let pelicula = JSON.parse(localStorage.getItem('Peliculas')) || [];
// CREAR


createFunction();
buttonSave.addEventListener('click', () => {

   
    if (title.value != "" && description.value != "" && category.value != "") {
        pelicula.push({

            // id: Math.round(Math.random() * 100000),
            title: title.value,
            category: categoria.value,
            // description: descripcion.value,
            url: url.value,

        })
        localStorage.setItem('Peliculas', JSON.stringify(pelicula));
        title.value = "";
        category.value = "";
        description.value = "";
        url.value = "";

        ReadFunction();
    } else {
        alert("Campos vacíos")
    }

})

function ReadFunction() {

    let arrayPeliculas = [];

    if (pelicula != null) {
        for (let index = 0; index < pelicula.length; index++) {
            arrayPeliculas.push(`
            <tr>
           
            <td>${pelicula[index].id}</td>
            <td>${pelicula[index].title}</td>
            <td>${pelicula[index].category}</td>
            <td>${pelicula[index].description}</td>
            <td>${pelicula[index].url}</td>
            <td><button class="btn btn-secondary" onclick="deleteMovies(${pelicula[index].id})">delete</button></td>
            
            

        </tr>
                    
                        `)
    
        }

    } else {
        arrayPeliculas = [];
        fila.innerHTML = arrayPeliculas
    }
}
