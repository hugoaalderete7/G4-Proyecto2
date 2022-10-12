//--------------------------------------------------- navbar-----------------------------------------------------------
let navbar = document.getElementById('navbar')
navbar.innerHTML = `<nav class="navbar navbar-expand-sm">
<div class="d-flex">
    <button class="Logo m-1" type="button">
        <h5><b>RF</b></h5>
    </button>
    <a class="navbar-brand nav-link text-white" href="/index.html">
        <h4>Rolling Flow</h4>
    </a>
</div>
<div class="collapse navbar-collapse d-flex justify-content-end " id="navbarTogglerDemo02">
    <div class="navbar-nav p-5 ">
        <a class="nav-link active text-white" aria-current="page"  href="/index.html" >Inicio</a>
        <a class="nav-link text-white" data-bs-toggle="modal" href="#exampleModalToggle" role="">Login</a>
        <a class="nav-link text-white" href="public/3- src/pagina administracion/admin.html" >Admin</a>
    </div>
</div>
<button class="navbar-toggler m-3" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon bg-white"></span>
</button>
</nav>`

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