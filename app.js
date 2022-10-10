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
<div class="collapse navbar-collapse " id="navbarTogglerDemo02">
    <div class="navbar-nav p-5">
        <a class="nav-link active text-white" aria-current="page" href="#">Inicio</a>
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

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 5,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
      });
});
