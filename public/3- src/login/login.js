let loginModal = document.getElementById('loginModal');
loginModal.innerHTML =`<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header" id="modalClose">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Iniciar Sesion</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email
                        address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp"
                        id="emailLogin">
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="passwordLogin">
                </div>
                <button class="btn btn-primary w-100" id="buttonLogin">Iniciar
                    Sesion</button>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary w-100" data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal">Registrarse</button>
        </div>
    </div>
</div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true"
aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Registrate !</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input class="form-control" type="text" placeholder=""
                        aria-label="default input example" id="nameRegister">
                    <label for="exampleInputEmail1" class="form-label">Email
                        address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp"
                        id="emailRegister">
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="passwordRegister">
                </div>
                <button class="btn btn-primary w-100" id="buttonRegister">Crear
                    Cuenta</button>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal">Volver</button>
        </div>
    </div>
</div>
</div>`;

const emailLogin = document.getElementById('emailLogin');
const passwordLogin = document.getElementById('passwordLogin');
const buttonLogin = document.getElementById('buttonLogin');

const nameRegister = document.getElementById('nameRegister');
const emailRegister = document.getElementById('emailRegister');
const passwordRegister = document.getElementById('passwordRegister');
const buttonRegister = document.getElementById('buttonRegister');


buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (emailLogin.value != "" && passwordLogin.value != "") {
        let response = users.find((item) => item.email == emailLogin.value && item.password == passwordLogin.value) || []
        if (response != [] && response.id != null && response.admin == 'false') {
            window.location.href = "index.html"
        } else if (response != [] && response.id != null && response.admin != 'false'){
            Admin();
        }else {
            alert("Campos Incorrectos")
        }
    } else {
        alert("Campos Incompletos")
    }
});
function Admin() {
    let Admin =document.getElementById('Admin');
    Admin.innerHTML = `<a class="nav-link text-white" href="/public/3- src/admin/admin.html">Admin</a>`
    let modalClose = document.getElementById('modalClose')
    modalClose.innerHTML = `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
}
    
buttonRegister.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (nameRegister.value != "" && emailRegister.value != "" && passwordRegister.value != "") {
        users.push({
            id: Math.round(Math.random() * 10000),
            name: nameRegister.value,
            email: emailRegister.value,
            password: passwordRegister.value,
            admin: false
        })
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        alert("Campos Incompletos");
    }
})





