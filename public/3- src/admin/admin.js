let users = JSON.parse(localStorage.getItem('users')) || [];
let miTabla = document.getElementById('miTabla');

function main (){
    ReadFunction();
}

function ReadFunction() {
    let arrayUsers = [];
    let getlocalStorage = JSON.parse(localStorage.getItem("users"));

    if (getlocalStorage != null) {
        for (let index = 0; index < getlocalStorage.length; index++) {
            arrayUsers.push(`
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${getlocalStorage[index].name}</td>
            <td>${getlocalStorage[index].email}</td>
            <td>${getlocalStorage[index].password}</td>
            <td>${getlocalStorage[index].admin}</td>
            <td> <div class="d-flex"><button class="nav-link text-dark m-3 w-25 h-50" role="" onclick="DeleteContact('${index}')">X</button> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="ViewInput('${index}')">
            A
          </button> </div> </td>
          </tr>
        `);
        }
        miTabla.innerHTML = arrayUsers.join('');
    } else {
        arrayUsers = [];
        miTabla.innerHTML = arrayUsers.join('');
    }
}

function DeleteContact(id){
    users.splice(id,1);
    localStorage.setItem("users", JSON.stringify(users));
    ReadFunction();
}

let newnidAdmin = document.getElementById("newnidAdmin")
let newnameAdmin = document.getElementById("newnameAdmin");
let newemailAdmin = document.getElementById("newemailAdmin");
let newpasswordAdmin = document.getElementById("newpasswordAdmin");
let newadminAdmin = document.getElementById("newadminAdmin");



let identifier;

function ViewInput (id) {
    identifier= id;
    newnidAdmin.value = users[id].id;
    newnameAdmin.value = users[id].name;
    newemailAdmin.value = users[id].email;
    newpasswordAdmin.value = users[id].password;
    newadminAdmin.value = users[id].admin;
}

function UpdateAdmin() {
    users.splice(identifier,1,{
        id: newnidAdmin.value,
        name: newnameAdmin.value,
        email: newemailAdmin.value,
        password: newpasswordAdmin.value,
        admin: newadminAdmin.value
    })
    localStorage.setItem("users", JSON.stringify(users));
    ReadFunction();
}

main();

