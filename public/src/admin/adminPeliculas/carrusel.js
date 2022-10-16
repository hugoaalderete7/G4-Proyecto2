/*
let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');*/
/*
let pelicula = JSON.parse(localStorage.getItem('Peliculas')) || [];
*/

ReadCarrusel();

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

  