let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');

let fila = document.getElementById('datatable-tbody');
let carruselaction = document.getElementById('carruselaction');
let carruselterror = document.getElementById('carruselterror');
let carruselcomedia = document.getElementById('carruselcomedia');



let pelicula = JSON.parse(localStorage.getItem('Peliculas')) || [];
ReadCarrusel();
ReadFunction();
buttonSave.addEventListener('click', () => {


    if (title.value != "" && description.value != "") {
        pelicula.push({

            id: Math.round(Math.random() * 100000),
            title: title.value,
            category: categoria.value,
            description: descripcion.value,
            url: url.value,

        })
        localStorage.setItem('Peliculas', JSON.stringify(pelicula));

        title.value = "";
        categoria.value = "";
        descripcion.value = "";
        url.value = "";

        ReadFunction();
    } else {
        alert("Campos vacíos")
    }
    location.reload()

})

function ReadFunction() {

    let arrayPeliculas = [];
    let arrayPeliculasaction = [];
    let arrayPeliculasterror = [];
    let arrayPeliculascomedia = [];


    if (pelicula != null) {
        for (let index = 0; index < pelicula.length; index++) {

            //creo la tabla
            arrayPeliculas.push(`
            <tr>
           
            <td>${pelicula[index].id}</td>
            <td>${pelicula[index].title}</td>
            <td>${pelicula[index].category}</td>
            <td>${pelicula[index].description}</td>
            <td>true/false</td>
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
<td><button class="btn btn-secondary" onclick="deleteMovies(${peli.id})">delete</button></td>



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

inputbuscar.addEventListener('keyup', filtrar);







function ReadCarrusel() {

    let arrayPeliculasaction = [];
    let arrayPeliculasterror = [];
    let arrayPeliculascomedia = [];


    if (pelicula != null) {
        for (let index = 0; index < pelicula.length; index++) {
            //creo carrusel action
            if (pelicula[index].category == "action") {
                arrayPeliculasaction.push(`

    <div class="tarjeta mx-2">
    <img src="${pelicula[index].url}" width="200px" height="300px" type="button" class="btn" data-bs-target="#exampleModalaction${index}" data-bs-toggle="modal">


    
    <!-- Modal -->
    <div class="modal fade" id="exampleModalaction${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <h3>${pelicula[index].title}</h3>
          <h6>${pelicula[index].description}</h6>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>


    <div class="cuerpocard"></div>
    </div>
                    
                        `)
                        carruselaction.innerHTML = arrayPeliculasaction
            }

            //creo carrusel terror
            if (pelicula[index].category == "terror") {
                arrayPeliculasterror.push(`

                <div class="tarjeta mx-2">
                <img src="${pelicula[index].url}" width="200px" height="300px" type="button" class="btn" data-bs-target="#exampleModalterror${index}" data-bs-toggle="modal">
            
            
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModalterror${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <h3>${pelicula[index].title}</h3>
                      <h6>${pelicula[index].description}</h6>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
            
            
                <div class="cuerpocard"></div>
                </div>
            
                `)
                carruselterror.innerHTML = arrayPeliculasterror

            }

            //creo carrusel comedia
            if (pelicula[index].category == "comedia") {
                arrayPeliculascomedia.push(`

                <div class="tarjeta mx-2">
                <img src="${pelicula[index].url}" width="200px" height="300px" type="button" class="btn" data-bs-target="#exampleModalcomedia${index}" data-bs-toggle="modal">
            
            
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModalcomedia${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <h3>${pelicula[index].title}</h3>
                      <h6>${pelicula[index].description}</h6>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
            
            
                <div class="cuerpocard"></div>
                </div>
            
                `)
                carruselcomedia.innerHTML = arrayPeliculascomedia

            }
        }

    }
}

