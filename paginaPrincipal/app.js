let navbar = document.getElementById('navbar')
navbar.innerHTML = `<nav class="navbar navbar-expand-lg bg-dark ">
<div class="container-fluid">
    <button class="Logo m-1 p-1" type="button">
        <h5><b>RF</b></h5>
    </button>
    <a class="navbar-brand text-white mx-3 " href="/index.html"> <h2>Rolling Flow</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="/paginaPrincipal/index.html">Inicio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" data-bs-toggle="modal" href="#exampleModalToggle" role="">Login</a>  
            </li>
            <li class="nav-item" id="Admin">
                
            
        </ul>
    </div>
</div>
</nav>`

// *footer*//
/*
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
*/
/*------------ INICIO CARRUSEL HUGO ---------------------------------*/
/*

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')
const celu = document.querySelector('.celu')
let fondo = window.getComputedStyle(grande, null).getPropertyValue("width");

punto.forEach((cadaPunto, i) => {

    punto[i].addEventListener('click', () => {

        let posicion = i
        console.log(fondo)
        let operacion;
        if (fondo > '2000px') {
            operacion = posicion * (-50)
        } else {
            operacion = posicion * (-25)
        }

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')
    })
})
*/
/*------------ FIN CARRUSEL HUGO ---------------------------------*/


