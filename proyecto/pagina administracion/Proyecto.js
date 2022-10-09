let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');
let id = document.getElementById('id');
let fila = document.getElementById('datatable-tbody');



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

        ReadFunction();
    } else {
        alert("Campos vacíos")
    }

})

function ReadFunction() {

    let arrayPeliculas = [];

    let getLocalStorage = JSON.parse(localStorage.getItem("Peliculas"));

    if (getLocalStorage != null) {
        for (let index = 0; index < getLocalStorage.length; index++) {
            arrayPeliculas.push(`
            <tr>
           
            <td>${getLocalStorage[index].id}</td>
            <td>${getLocalStorage[index].title}</td>
            <td>${getLocalStorage[index].category}</td>
            <td>${getLocalStorage[index].description}</td>
            <td>${getLocalStorage[index].url}</td>
            <td><button class="btn btn-white" onclick="deleteMovie (${index})"><img src="/proyecto/pagina administracion/images/basura.png" width="30" alt=""></button></td>
            

        </tr>
                    
                        `)

        }


        fila.innerHTML = arrayPeliculas

    } else {
        arrayPeliculas = [];
        fila.innerHTML = arrayPeliculas
    }
}

// //Delete
// const deleteMovie = (id) => {
//     let deleteMovie = []
//     getLocalStorage.map((item) => {
//         if (id != item.id) {
//             deleteMovie.push(item);
//         }
//     })
//     localStorage.setItem('Peliculas', JSON.stringify(deleteMovie));
//     readFunction();
// }

function deleteMovie(index) {

    let newgetLocalStorage = JSON.parse(localStorage.getItem("Peliculas"));
    let movie = [];

    newgetLocalStorage.splice(index, 1);

    for (let i = 0; i < newgetLocalStorage.length; i++) {
        movie.push(newgetLocalStorage[i]);
    }

    localStorage.setItem('Peliculas', JSON.stringify(movie));

    ReadFunction();
}
