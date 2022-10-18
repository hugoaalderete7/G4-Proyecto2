let list = JSON.parse(localStorage.getItem('Peliculas')) || [];

// ReadCarrusel ()
function ReadCarrusel() {
  let arrayPeliculasaction = [];
  let arrayPeliculasterror = [];
  let arrayPeliculasinfantil = [];
  
  let carruselaction = document.getElementById('carruselaction');
  let carruselterror = document.getElementById('carruselterror');
  let carruselinfantil = document.getElementById('carruselinfantil');
  

  if (list != null) {
      for (let index = 0; index < list.length; index++) {

          //creo carrusel action
          if (list[index].category == "Acción") {
              arrayPeliculasaction.push(`

    <div class="tarjeta">
    <img src="${list[index].img}" width="200em" height="200em" type="button" class="btn" data-bs-target="#exampleModalaction${index}" data-bs-toggle="modal">

    <!-- Modal -->
    <div class="modal fade" id="exampleModalaction${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-dark">
          <div class="modal-body m-0 p-0 bg-dark">
            <div class="modalimagen p-0"><img src="${list[index].img}" class="mx-0" height="450em"></div>
            <h3 class="m-2 text-light">${list[index].title}</h3>
            <h6 class="m-2 text-light">${list[index].description}</h6>
          </div>
        
        </div>
      </div>
    </div>                   
                        `)
              carruselaction.innerHTML = arrayPeliculasaction.join('');
          } else 

          //creo carrusel terror
          if (list[index].category == "Terror") {
              arrayPeliculasterror.push(`

                <div class="tarjeta">
                <img src="${list[index].img}" width="400px" height="250px" type="button" class="btn" data-bs-target="#exampleModalterror${index}" data-bs-toggle="modal">
            
            
                <!-- Modal -->
    <div class="modal fade" id="exampleModalterror${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-dark">
          <div class="modal-body m-0 p-0 bg-dark">
            <div class="modalimagen p-0"><img src="${list[index].img}" class="mx-0"></div>
            <h3 class="m-2 text-light">${list[index].title}</h3>
            <h6 class="m-2 text-light">${list[index].description}</h6>
          </div>
        
        </div>
      </div>
    </div>   
            
                `)
              carruselterror.innerHTML = arrayPeliculasterror

          } else

          //creo carrusel infantiles
          if (list[index].category == "Infantil") {
              arrayPeliculasinfantil.push(`

                <div class="tarjeta">
                <img src="${list[index].img}" width="400px" height="250px" type="button" class="btn" data-bs-target="#exampleModalinfantil${index}" data-bs-toggle="modal">
            
            
                <!-- Modal -->
                <div class="modal fade" id="exampleModalinfantil${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content bg-dark">
                      <div class="modal-body m-0 p-0 bg-dark">
                        <div class="modalimagen p-0"><img src="${list[index].img}" class="mx-0"></div>
                        <h3 class="m-2 text-light">${list[index].title}</h3>
                        <h6 class="m-2 text-light">${list[index].description}</h6>
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


ReadCarrusel()


