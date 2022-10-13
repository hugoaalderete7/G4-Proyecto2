/*let navbar = document.getElementById('navbar')
navbar.innerHTML = `<!-- Inicio Navbar -->
<nav class="navbar navbar-expand-sm">
    <div class="d-flex">
        <button class="Logo m-1" type="button">
            <h5><b>RF</b></h5>
        </button>
        <a class="navbar-brand nav-link text-white" href="#">
            <h4>Rolling Flow</h4>
        </a>
    </div>
    <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
        <div class="navbar-nav p-5 w-50">
            <a class="nav-link active text-white" aria-current="page" href="/index.html">Inicio</a>
            <a class="nav-link text-white" data-bs-toggle="modal" href="#exampleModalToggle" role="">Login</a>
            <div id="Admin">

            </div>
        </div>
    </div>
    <button class="navbar-toggler m-3" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-white"></span>
    </button>
    </nav>;
<!-- Fin Navbar -->`*/

const grande = document.querySelector ('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach ((cadaPunto, i)=>{

    punto[i].addEventListener ('click', ()=>{

        let posicion = i
        let operacion = posicion * (-50)

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i)=> {
            punto[i].classList.remove('activo')
        })
        
        punto[i].classList.add('activo')
    })
})