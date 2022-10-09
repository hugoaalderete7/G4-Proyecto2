




// FUNCION DE ELIMINADO

function DeleteFunction() {
    localStorage.clear()
    actividades = [];
  
    if (JSON.parse(localStorage.getItem("actividades")) != null) {
      swal({
        title: "Estas seguro que quieres eliminar toda la lista?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
    } else {
      swal("No tienes ningun item en la lista ");
    }
  
    ReadFunction()
  }
  
  function DeleteItem(id) {
    actividades.splice(id, 1)
    localStorage.setItem("actividades", JSON.stringify(actividades))
    ReadFunction()
  }