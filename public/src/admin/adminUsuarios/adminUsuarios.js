let users = JSON.parse(localStorage.getItem('users')) || [];
let miTabla = document.getElementById('miTabla');

function main() {
    ReadFunction();
}

function ReadFunction() {
    let arrayUsers = [];
    let getlocalStorage = JSON.parse(localStorage.getItem("users"));

    if (getlocalStorage != null) {
        for (let i = 0; i < getlocalStorage.length; i++) {
            arrayUsers.push(`
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${getlocalStorage[i].name}</td>
            <td>${getlocalStorage[i].email}</td>
            <td>${getlocalStorage[i].password}</td>
            <td>${getlocalStorage[i].admin}</td>
            <td> <div class="d-flex"><button class="nav-link text-dark m-3 w-25 h-50" role="" onclick="DeleteContact('${i}')">X</button> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="ViewInput('${getlocalStorage[i].id}')">
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

const searchs = document.getElementById('search');
const searchButtons = document.getElementById('searchButton');
const searchUsersView = document.getElementById('searchUsersView');

/*searchButton.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users'));
    if (search.value != "") {
        let response = users.find((item) => item.name == search.value) || [];
        console.log(response.id);
        searchUsersView.innerHTML = `<tr>
        <th scope="row"></th>
        <td>${response.name}</td>
        <td>${response.email}</td>
        <td>${response.password}</td>
        <td>${response.admin}</td>
        <td> <div class="d-flex"><button class="nav-link text-dark m-3 w-25 h-50" role="" onclick="DeleteContact('${response.id}')">X</button> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="ViewInput('${response.id}')">
        A
      </button> </div> </td>
      </tr>`
    } else {
        alert("campo vacio");
    }
})*/

// Buscador
searchButtons.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (searchs.value != "") {
        let response = users.filter((item) => item.name == searchs.value)
        console.log(response);
        let array = [];
        for (let i = 0; i < response.length; i++) {
            
            array.push(
                `<tr>
        <th scope="row">${i+1}</th>
        <td>${response[i].name}</td>
        <td>${response[i].email}</td>
        <td>${response[i].password}</td>
        <td>${response[i].admin}</td>
        <td> <div class="d-flex">
        <button class="nav-link text-dark m-3 w-25 h-50" role="" onclick="DeleteContact('${response[i].id}')">X</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="ViewInput('${response[i].id}')">
        A
        </button> 
        </div> 
        </td>
      </tr>`)
        }
        searchUsersView.innerHTML = array.join('');
    } else {
        alert("campo vacio");
    }
})


//Delete
function DeleteContact(i) {
    const indice = users.findIndex ((item) => {
        return item.id == i 
    })
    console.log(indice)
    users.splice(indice, 1);
    localStorage.setItem("users", JSON.stringify(users));
    ReadFunction();
    location.reload()
}

//Editar
let newidAdmin = document.getElementById("newnidAdmin")
let newnameAdmin = document.getElementById("newnameAdmin");
let newemailAdmin = document.getElementById("newemailAdmin");
let newpasswordAdmin = document.getElementById("newpasswordAdmin");
let newadminAdmin = document.getElementById("newadminAdmin");

let identifiers;

function ViewInput(id) {
    identifiers = id;
    let user = users.find ((item)=> item.id == id)
    newidAdmin.value = user.id                                     
    newnameAdmin.value = user.name                               
    newemailAdmin.value = user.email 
    newpasswordAdmin.value = user.password
    newadminAdmin.value = user.admin                                        
    /*newnidAdmin.value = users[id].id;
    newnameAdmin.value = users[id].name;
    newemailAdmin.value = users[id].email;
    newpasswordAdmin.value = users[id].password;
    newadminAdmin.value = users[id].admin;*/
}

function UpdateAdmin() {
    let response = users.map((item) => {
        if (item.id == identifiers) {
            let update = {
                ...item,
                id: newidAdmin.value,
                name: newnameAdmin.value,
                email: newemailAdmin.value,
                password: newpasswordAdmin.value,
                admin: newadminAdmin.value
            }
            return update;
        } else {
            return item;
        }
    });
    /*users.splice(identifier, 1, {
        id: newnidAdmin.value,
        name: newnameAdmin.value,
        email: newemailAdmin.value,
        password: newpasswordAdmin.value,
        admin: newadminAdmin.value
})*/
localStorage.setItem("users", JSON.stringify(response));
ReadFunction();
location.reload()
}

main();