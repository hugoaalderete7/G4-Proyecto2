let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');
let id = document.getElementById('id');
let fila = document.getElementById('datatable-tbody');
let search = document.getElementById('search-movie');
let filtrarbtn = document.getElementById('filtrarbtn');

let pelicula = JSON.parse(localStorage.getItem('Peliculas')) || [];

ReadFunction();
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
                        fila.innerHTML = arrayPeliculas
        }

    } else {
        arrayPeliculas = [];
        fila.innerHTML = arrayPeliculas
    }
}


//Delete
 const deleteMovies = (id) => {
    
     let deleteMovie = []
     pelicula.map((item) => {
         if (id != item.id) {
             deleteMovie.push(item);
         }
     })
     localStorage.setItem('Peliculas', JSON.stringify(deleteMovie));
     location.reload()
     ReadFunction();
 }

// function deleteMovie(index) {

//     let newgetLocalStorage = JSON.parse(localStorage.getItem("Peliculas"));
//     let movie = [];

//     newgetLocalStorage.splice(index, 1);

//     for (let i = 0; i < newgetLocalStorage.length; i++) {
//         movie.push(newgetLocalStorage[i]);
//     }

//     localStorage.setItem('Peliculas', JSON.stringify(movie));

//     ReadFunction();
//     window.location.reload()
// }

