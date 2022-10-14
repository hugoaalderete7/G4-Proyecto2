
let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');
let id = document.getElementById('id');
let fila = document.getElementById('datatable-tbody');
let img = document.getElementById('input-img');

let carruselaction = document.getElementById('carruselaction');
let carruselterror = document.getElementById('carruselterror');
let carruselinfantil = document.getElementById('carruselinfantil');

let pelicula = JSON.parse(localStorage.getItem('Peliculas')) || [];

ReadFunction();

buttonSave.addEventListener('click', () => {

    if (title.value != "" && description.value != "" && category.value != "") {
        pelicula.push({

            id: Math.round(Math.random() * 100000),
            title: title.value,
            category: category.value,
            description: description.value,
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

    if (pelicula != null) {
        for (let index = 0; index < pelicula.length; index++) {
            arrayPeliculas.push(`
        <tr>
            <td>${pelicula[index].id}</td>
            <td>${pelicula[index].title}</td>
            <td>${pelicula[index].category}</td>
            <td>${pelicula[index].description}</td>
            <td>${pelicula[index].url}</td>
            <td class="hide">${pelicula[index].img}</td>
            <td id="fav">${pelicula[index].fav}</td>
            <td>
            <button class="btn deleteMovies" onclick="deleteMovies(${pelicula[index].id})"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn editMovies" onclick="viewMovie('${pelicula[index].id}')" data-bs-toggle="modal" data-bs-target="#updateModal"> <i class="fa-solid fa-pen-to-square"></i></button>
            <button  class="btn favMovies" onclick="favMovies(${pelicula[index].id})"><i class="fa-solid fa-star"></i></button>
            </td>
        </tr>      
                        `)
            fila.innerHTML = arrayPeliculas
        }
    } else {
        arrayPeliculas = [];
        fila.innerHTML = arrayPeliculas
    }
}

let identificador;

function favMovies(id) {

    identificador = id;
    let response = pelicula.map((mess) => {
        if (mess.id == id) {
            let update = {
                ...mess,
                fav: !mess.fav
            }
            return update;
        } else {
            return mess;
        }
    })
    console.log(response)
    localStorage.setItem("Peliculas", JSON.stringify(response));
    ReadFunction();
    Favorita();

}

function Favorita() {

    let response = pelicula.find((item) => item.id == identificador) || [];

    console.log(response)

    if (response.length != 0) {

        let seccionImagen = [];

        seccionImagen.push(`
        
        <div class="Padre">
        <!--<div class="Imagen">
            <a class="Video" href=""><img class="imagenEnSeccion"
                    src="" alt="" width="100%"></a>
        </div>-->
        <div class="Titulo-Descripcion">
            <h3 class="Titulo">${response.title}</h3>
            <p class="Descripcion">${response.description}</p>
        </div>
    </div> `
        );

        console.log(seccionImagen)

        window.onload = (function (){document.getElementById("favorita").innerHTML += seccionImagen})

    } else {
        seccionImagen = [];

        window.onload = (function (){document.getElementById("favorita").innerHTML += seccionImagen})
    }

    /*
    function Favorita() {

        let response = pelicula.find((item) => item.id == identificador) || [];
    
        console.log(response)
        console.log(response.title)
        console.log(response.description)
    
            window.onload = (function (){document.getElementById("favorita").innerHTML += `<div class="Padre">
            <!--<div class="Imagen">
                <a class="Video" href=""><img class="imagenEnSeccion"
                        src="" alt="" width="100%"></a>
            </div>-->
            <div class="Titulo-Descripcion">
                <h3 class="Titulo">${response.title}</h3>
                <p class="Descripcion">${response.description}</p>
            </div>
        </div> `})
        }
*/
    //favorito
    /*const pelidestacada = document.getElementById("pelidestacada");*/

    /*const favMovies = (id) => {
        
        let destacada = [];
        pelicula.map((item) => {
            
            if (id == item.id) {
                
                item.fav = true;
                destacada.push({
                    ...item,
                    fav: true
                }
                
                )
                
            } else {
                destacada.push({
                    ...item,
                    fav: false
                    
                }
                
                )
            }
    
        })
        console.log(destacada)
        localStorage.setItem('Peliculas', JSON.stringify(destacada));
        ReadFunction();
    }*/

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

    // let celda = document.getElementsByTagName('td');

    // inputbuscar.addEventListener('keyup', (e)=>{
    //     let texto = e.target.value

    //     let er = new RegExp(texto, 'i')

    //     for (let i = 0; i < celda.length; i++) {
    //         let valor = celda[i]


    //         if (er.test(valor.innerText)) {
    // valor.classList.remove("ocultar")
    //         } else {

    //             valor.classList.add("ocultar")
    //         }
    //     }
    // })

    // document.addEventListener("keyup", e=>{
    //     if(e.target.matches("#search-movie")){



    //         document.querySelectorAll(".articulo").forEach(titulo =>{
    //             titulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    //             ?titulo.classList.remove("ocultar")
    //             :titulo.classList.add("ocultar")

    //         })
    // }

    // })

    const inputbuscar = document.querySelector('#search-movie');
    let btn = document.getElementById('btn');
    const filtrar = () => {
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
<td>${peli.url}</td>
<td>
<button class="btn deleteMovies" onclick="deleteMovies(${peli.id})"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn editMovies" onclick="viewMovie('${peli.id}')" data-bs-toggle="modal" data-bs-target="#updateModal"> <i class="fa-solid fa-pen-to-square"></i></button>
            <button id="fav${pelicula.id}" class="btn favMovies" onclick="favMovies(${peli.id})"><i class="fa-solid fa-star"></i></button>


</tr>`
            }
        }
        if (fila.innerHTML === '') {
            File.innerHTML += `td></td>
        <td>Película no encontrada  </td>
        <td></td>
        <td></td>
        <td></td>`
        }
    }

    inputbuscar.addEventListener('keyup', filtrar)
}
