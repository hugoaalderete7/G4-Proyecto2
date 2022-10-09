



// FUNCION DE ELIMINADO

function DeleteFunction() {
    localStorage.clear()
    movie = [];
  
    if (JSON.parse(localStorage.getItem("movie")) != null) {
      swal({
        title: "Estas seguro que quieres eliminar toda la lista?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
    } else {
      alert("No tienes ninguna pelicula cargada ");
    }
  
    ReadFunction()
  }
 