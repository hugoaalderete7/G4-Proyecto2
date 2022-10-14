
/*Codigo para mostrar y ocultar la ventana modal*/
const openModal = document.getElementById('openModal'); //Traigo el boton para mostrar la ventana modal
const modal= document.getElementById('modal'); //Traigo la ventana modal

openModal.addEventListener('click', () => {
    /*Le saco o le añado la clase 'modal--show'*/
    modal.classList.add('modal--show');
}); 
/*
/*Traigo el boton para cerrar el modal*/
const buttonCancelar = document.getElementById('cancelar-modal');

buttonCancelar.addEventListener('click', () => cancelarModal());

const cancelarModal = () => {
    /*Le saco o le añado la clase 'modal--show'*/
    modal.classList.remove('modal--show');
}

