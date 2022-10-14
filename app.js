let navbar = document.getElementById('navbar')
navbar.innerHTML = ` <!--Inicio Navbar-->
<nav class="navbar navbar-expand-sm">
    <div class="d-flex">
        <button class="Logo m-1" type="button">
            <h5><b>RF</b></h5>
        </button>
        <a class="navbar-brand nav-link text-white" href="#">
            <h4>Rolling Flow</h4>
        </a>
    </div>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <div class="navbar-nav">
            <a class="nav-link active text-white" aria-current="page" href="/index.html">Inicio</a>
            <a class="nav-link text-white" data-bs-toggle="modal" href="#exampleModalToggle" role="">Login</a>

            <div id="Admin">

            </div>

        </div>
    </div>
</nav>
<!--Fin Navbar-->`

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