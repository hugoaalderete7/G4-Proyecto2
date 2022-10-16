/*
Codigo para mostrar y ocultar la ventana modal
const openModal = document.getElementById('openModal'); //Traigo el boton para mostrar la ventana modal
const modal = document.getElementById('modal'); //Traigo la ventana modal

openModal.addEventListener('click', () => {
    Le saco o le añado la clase 'modal--show'
    modal.classList.add('modal--show');
});

Traigo el boton para cerrar el modal
const buttonCancelar = document.getElementById('cancelar-modal');

buttonCancelar.addEventListener('click', () => cancelarModal());

const cancelarModal = () => {
    Le saco o le añado la clase 'modal--show'
    modal.classList.remove('modal--show');
}
*/

let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');
let id = document.getElementById('id');
let fila = document.getElementById('datatable-tbody');
let search = document.getElementById('search-movie');
let filtrarbtn = document.getElementById('filtrarbtn');
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
            publicado: false,
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
            <!--<td>${pelicula[index].url}</td>-->
            <!--<td class="hide">${pelicula[index].img}</td>-->
            <!--<td id="fav">${pelicula[index].fav}</td>-->
            <div>
            ${pelicula[index].publicado == true ?
                `<td><input type="checkbox" checked onclick="updatePublicado(${pelicula[index].id})"></td>`
                :
                `<td><input type="checkbox" onclick="updatePublicado(${pelicula[index].id})"></td>`
            }
            </div>
            <td class="d-flex">
            <button class="btn deleteMovies" onclick="deleteMovies(${pelicula[index].id})"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn editMovies" onclick="viewMovie('${pelicula[index].id}')" data-bs-toggle="modal" data-bs-target="#updateModal"> <i class="fa-solid fa-pen-to-square"></i></button>
            <div>
            ${pelicula[index].fav == true ?
                `<button  class="btn favMovies" onclick="favMovies(${pelicula[index].id})"><i class="fa-solid fa-star"></i></button>`
                :
                `<button  class="btn favMovies" onclick="favMovies(${pelicula[index].id})"><i class="fa fa-star-o"></i></button>`
            }
            </div>
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

// Check Publicado

let identificador;

function updatePublicado (id) {
    identificador = id;
    let response = pelicula.map((mess) => {
        if (mess.id == id) {
            let update = {
                ...mess,
                publicado: !mess.publicado
            }
            return update;
        } else {
            return mess;
        }
    })
    localStorage.setItem("Peliculas", JSON.stringify(response));
    console.log(pelicula)
    ReadFunction();
}

//------------------ favMovies () ------------------------------------

function favMovies(id) {

    identificador = id;
    let response = pelicula.map((mess) => {
        if (mess.id == id) {
            let update = {
                ...mess,
                fav: true
            }
            return update;
        } else {
            let update = {
                ...mess,
                fav: false
            } 
            return update;
            }
    })
    console.log(response)
    localStorage.setItem("Peliculas", JSON.stringify(response));
    ReadFunction();
    //Favorita();
}

/*------------------------------------- HUGO FAVORITA 1 -----------------------------------------------------------*/
/*

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

        window.onload = (function (){document.getElementById("destacada").innerHTML += seccionImagen})

    } else {
        seccionImagen = [];

        window.onload = (function (){document.getElementById("destacada").innerHTML += seccionImagen})
    }
*/
/*------------------------------------ HUGO FAVORITA 2 -----------------------------------------------------------------------------*/
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
/*------------------------------------------------------------------------------------------------------------------*/
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


//Buscador
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
                                <!--<td>true/false</td>-->
                                <!--<td>${peli.url}</td>-->
                                <div>
                                    ${peli.publicado == true ?
                                        `<td><input type="checkbox" checked onclick="updatePublicado(${peli.id})"></td>`
                                        :
                                        `<td><input type="checkbox" onclick="updatePublicado(${peli.id})"></td>`
                                    }
                                </div>
                                <td class="d-flex">
                                    <button class="btn deleteMovies" onclick="deleteMovies(${peli.id})"><i class="fa-solid fa-trash-can"></i></ button>
                                    <button class="btn editMovies" onclick="viewMovie('${peli.id}')" data-bs-toggle="modal" data-bs-target="#updateModal"> <i class="fa-solid fa-pen-to-square"></i></button>
                                    <div>
                                    ${peli.fav == true ?
                                        `<button  class="btn favMovies" onclick="favMovies(${peli.id})"><i class="fa-solid fa-star"></i></button>`
                                        :
                                        `<button  class="btn favMovies" onclick="favMovies(${peli.id})"><i class="fa fa-star-o"></i></button>`
                                    }
                                    </div>
                                </td>
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

inputbuscar.addEventListener('keyup', filtrar)





ReadCarrusel();
/*
buttonSave.addEventListener('click', () => {
  if (title.value != "" && description.value != "") {
    pelicula.push({
      id: Math.round(Math.random() * 100000),
      title: title.value,
      category: category.value,
      description: description.value,
      url: url.value,

    })
    localStorage.setItem('Peliculas', JSON.stringify(pelicula));

    title.value = "";
    category.value = "";
    description.value = "";
    url.value = "";

    ReadCarrusel()
    
  } else {
    alert("Campos vacíos")
  }
  location.reload()

})
*/

function ReadCarrusel() {

    let arrayPeliculasaction = [];
    let arrayPeliculasterror = [];
    let arrayPeliculasinfantil = [];
  
    let carruselaction = document.getElementById('carruselaction');
    let carruselterror = document.getElementById('carruselterror');
    let carruselinfantil = document.getElementById('carruselinfantil');
  
    if (pelicula != null) {
      for (let index = 0; index < pelicula.length; index++) {
        //creo carrusel action
        if (pelicula[index].category == "Acción") {
          arrayPeliculasaction.push(`
  
      <div class="tarjeta">
      <img src="${pelicula[index].img}" width="400px" height="250px" type="button" class="btn" data-bs-target="#exampleModalaction${index}" data-bs-toggle="modal">
  
  
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModalaction${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg-dark">
            <div class="modal-body m-0 p-0 bg-dark">
              <div class="modalimagen p-0"><img src="${pelicula[index].img}" class="mx-0"></div>
              <h3 class="m-2 text-light">${pelicula[index].title}</h3>
              <h6 class="m-2 text-light">${pelicula[index].description}</h6>
            </div>
          
          </div>
        </div>
      </div>                   
                          `)
          carruselaction.innerHTML = arrayPeliculasaction
        }
  
        //creo carrusel terror
        if (pelicula[index].category == "Terror") {
          arrayPeliculasterror.push(`
  
                  <div class="tarjeta">
                  <img src="${pelicula[index].img}" width="400px" height="250px" type="button" class="btn" data-bs-target="#exampleModalterror${index}" data-bs-toggle="modal">
              
              
                  <!-- Modal -->
      <div class="modal fade" id="exampleModalterror${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg-dark">
            <div class="modal-body m-0 p-0 bg-dark">
              <div class="modalimagen p-0"><img src="${pelicula[index].img}" class="mx-0"></div>
              <h3 class="m-2 text-light">${pelicula[index].title}</h3>
              <h6 class="m-2 text-light">${pelicula[index].description}</h6>
            </div>
          
          </div>
        </div>
      </div>   
              
                  `)
          carruselterror.innerHTML = arrayPeliculasterror
  
        }
  
        //creo carrusel infantiles
        if (pelicula[index].category == "Infantil") {
          arrayPeliculasinfantil.push(`
  
                  <div class="tarjeta">
                  <img src="${pelicula[index].img}" width="400px" height="250px" type="button" class="btn" data-bs-target="#exampleModalinfantil${index}" data-bs-toggle="modal">
              
              
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModalinfantil${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content bg-dark">
                        <div class="modal-body m-0 p-0 bg-dark">
                          <div class="modalimagen p-0"><img src="${pelicula[index].img}" class="mx-0"></div>
                          <h3 class="m-2 text-light">${pelicula[index].title}</h3>
                          <h6 class="m-2 text-light">${pelicula[index].description}</h6>
                        </div>
                      
                      </div>
                    </div>
                  </div>   
              
                  `)
          carruselinfantil.innerHTML = arrayPeliculasinfantil
  
        }
      }
  
    }
  }




