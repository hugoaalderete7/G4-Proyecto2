let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');
let id = document.getElementById('id');
let img = document.getElementById('input-img');


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
            img: img.value,
            fav: false

        })
        localStorage.setItem('Peliculas', JSON.stringify(pelicula));
        title.value = "";
        category.value = "";
        description.value = "";
        url.value = "";
        img.value = "";




        ReadFunction();
    } else {
        alert("Campos vacíos")
    }

})

function ReadFunction() {

    let arrayPeliculas = [];
let fila = document.getElementById("datatable-tbody");

    if (pelicula != null) {
        for (let index = 0; index < pelicula.length; index++) {
            arrayPeliculas.push(`
            <tr>
           
            <td>${pelicula[index].id}</td>
            <td>${pelicula[index].title}</td>
            <td>${pelicula[index].category}</td>
            <td>${pelicula[index].description}</td>
            
            <td>
            <div  class="hide">${pelicula[index].img}</div>
            <div  id="fav">${pelicula[index].fav}</div>
            </td>

            <td>
            <button class="btn deleteMovies" onclick="deleteMovies(${pelicula[index].id})"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn editMovies" onclick="viewMovie('${pelicula[index].id}')" data-bs-toggle="modal" data-bs-target="#updateModal"> <i class="fa-solid fa-pen-to-square"></i></button>
            <button  class="btn favMovies" onclick="favMovies(${pelicula[index].id})"><i class="fa-solid fa-star"></i></button>
            </td>
        </tr>                    
                        `)

        }
        fila.innerHTML = arrayPeliculas.join('');
    } else {
        arrayPeliculas = [];
        fila.innerHTML = arrayPeliculas
    }
}

//favorito
const pelidestacada = document.getElementById("pelidestacada");

const favMovies = (id) => {

    let destacada = [];
    pelicula.map((item) => {

        if (id == item.id) {

                item.fav = true;
                destacada.push({
                    ...item,
                    fav : true
                }
                    
                )
            
        } else {
            destacada.push({
                ...item,
                fav : false

            }
                
            )
        }

    })
    console.log(destacada)
    localStorage.setItem('Peliculas', JSON.stringify(destacada));
    ReadFunction();
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

//Editar


let updateTitle = document.getElementById('updateTitle');
let updateCategory = document.getElementById('updateCategory');
let updateDescription = document.getElementById('updateDescription');
let updateUrl = document.getElementById('updateUrl');
let updateImg = document.getElementById('updateImg');


let identifier;
const viewMovie = (id) => {
    identifier = id;
    pelicula.map((item) => {
        if (item.id == id) {
            updateTitle.value = item.title,
                updateCategory.value = item.category,
                updateDescription.value = item.description,
                updateUrl.value = item.url,
                updateImg.value = item.img
        }
    })
}
const updateMovie = () => {
    let updateMovie = []
    pelicula.map((item) => {
        if (item.id == identifier) {
            updateMovie.push({
                ...item,
                title: updateTitle.value,
                category: updateCategory.value,
                description: updateDescription.value,
                url: updateUrl.value,
                img: updateImg.value

            });
        } else {
            updateMovie.push(item);
        }
    })
    localStorage.setItem('Peliculas', JSON.stringify(updateMovie));
    location.reload()
    ReadFunction();
}



// Buscador
const inputbuscar = document.querySelector('#search-movie');
let btn = document.getElementById('btn');
const filtrar = () => {

    let fila = document.getElementById("datatable-tbody");
    fila.innerHTML = '';

    const texto = inputbuscar.value.toLowerCase();
    for (let peli of pelicula) {
        let titulo = peli.title.toLowerCase();
        if (titulo.indexOf(texto) !== -1) {
            fila.innerHTML += `<tr>
           
<td>${peli.id}</td>
<td>${peli.title}</td>
<td>${peli.category}</td>
<td>${peli.description}</td>
<td>true/false</td>
<td></td>
<td>
<button class="btn deleteMovies" onclick="deleteMovies(${peli.id})"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn editMovies" onclick="viewMovie('${peli.id}')" data-bs-toggle="modal" data-bs-target="#updateModal"> <i class="fa-solid fa-pen-to-square"></i></button>
            <button id="fav${pelicula.id}" class="btn favMovies" onclick="favMovies(${peli.id})"><i class="fa-solid fa-star"></i></button>


</tr>`
        }
    }
    if (fila.innerHTML === '') {
        fila.innerHTML += `td></td>
        <td>Película no encontrada  </td>
        <td></td>
        <td></td>
        <td class="hide">${pelicula[index].img}</td>
        <td id="fav">${pelicula[index].fav}</td>

        <td>
        <button class="btn deleteMovies" onclick="deleteMovies(${pelicula[index].id})"><i class="fa-solid fa-trash-can"></i></button>
        <button class="btn editMovies" onclick="viewMovie('${pelicula[index].id}')" data-bs-toggle="modal" data-bs-target="#updateModal"> <i class="fa-solid fa-pen-to-square"></i></button>
        <button  class="btn favMovies" onclick="favMovies(${pelicula[index].id})"><i class="fa-solid fa-star"></i></button>
        </td>`
    }
}

inputbuscar.addEventListener('keyup', filtrar);


