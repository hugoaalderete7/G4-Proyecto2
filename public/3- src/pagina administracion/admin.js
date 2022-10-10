
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

// *footer*//
let footerAdmin = document.getElementById('footerAdmin')
footerAdmin.innerHTML = ` <footer id="footer-contacto" class="footer_movies conteiner m-0 align-items-center text-center py-2 row">
<aside class="publicidad_footer order-2 order-md-1 col-xl-4 col-12 mx-0 my-2">
    <a href="https://rollingcodeschool.com/" target="_blank"><img
            src="https://rollingcodeschool.com/wp-content/uploads/2021/07/Grupo-8.png" alt="rollingcode" /></a>
</aside>
<div class="footer_derechos order-1 order-md-2 col-xl-4 col-12 mx-0 py-4">
    <p>Todos los derechos reservados</p>
    <p>Rolling Movies ©</p>
</div>
<div class="footer_redes order-2 order-md-3 col-xl-4 col-12 mx-md-0 my-4">
    <a class="mx-auto" href="/public/3- src/error/error.html"><i
            class="fa-brands fa-instagram icon-footer icon d-flex align-items-center justify-content-center p-4"></i></a>
    <a class="mx-auto" href="/public/3- src/error/error.html"><i
            class="fa-brands fa-facebook icon-footer icon d-flex align-items-center justify-content-center p-4"></i></a>
    <a class="mx-auto" href="/public/3- src/error/error.html"><i
            class="fa-brands fa-whatsapp icon d-flex align-items-center justify-content-center p-4"></i></a>
    <a class="mx-auto" href="/public/3- src/error/error.html"><i
            class="fa-brands fa-twitter icon d-flex align-items-center p-4 justify-content-center"></i></a>
</div>
</footer>`
