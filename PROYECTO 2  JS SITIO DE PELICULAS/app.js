window.addEventListener('load', function () {
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


let buttonSave = document.getElementById('buttonSave');
let title = document.getElementById('title');
let category = document.getElementById('categoria');
let description = document.getElementById('descripcion');
let url = document.getElementById('url');
let id = document.getElementById('id');
let image = document.getElementById("image");
let carousel = document.getElementById("carousel__lista");
// let fila = document.getElementById('datatable-tbody');
// let search = document.getElementById('search-movie');
// let filtrarbtn = document.getElementById('filtrarbtn');


let pelicula = JSON.parse(localStorage.getItem('Peliculas')) || [];

// createFunction();
buttonSave.addEventListener('click', () => {


  if (title.value != "" && description.value != "" && image.value != "") {
    pelicula.push({

      id: Math.round(Math.random() * 10000),
      title: title.value,
      category: categoria.value,
      description: descripcion.value,
      url: url.value,
      image: image.value,

    })
    localStorage.setItem('Peliculas', JSON.stringify(pelicula));
    title.value = "";
    category.value = "";
    description.value = "";
    url.value = "";
    image.value = "";

    ReadFunction();
  } else {
    alert("Falta informacion para cargar nueva pelicula")
  }

})

function ReadFunction() {

  let arrayPeliculas = [];

  if (pelicula != null) {
    for (let index = 0; index < pelicula.length; index++) {
      arrayPeliculas.push(`  

            <div  class="carousel__elemento">
            <img  src="${pelicula[index].image}" alt="">
            <a href="" id="link-trailer">${pelicula[index].url}</a>
            <p class="text" id="title">${pelicula[index].title}</p>
            <p class="text" id="descripcion">${pelicula[index].description}</p>
            </div>
            `)
    }

    carousel__lista.innerHTML = arrayPeliculas.join("")

  } else {
    carousel__lista.innerHTML = arrayPeliculas.join("")
    arrayPeliculas = [];
  }
  ReadFunction()
}
