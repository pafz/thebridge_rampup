//1 lo traigo
let nombre = document.getElementById('nombre');
let correo = document.getElementById('email');
let mensaje = document.getElementById('mensaje');
let btn = document.getElementById('btn');

let users = JSON.parse(localStorage.getItem('users'));
if(!users) {
    users = [];
}


//2 función onSubmit
const onSubmit = e => {
    e.preventDefault();
    //4 en la función crear una constate nameValue
    const nameValue = nombre.value;  //ahora la KEY se llama nameValue !!!!!!!!!!
    const correoValue = correo.value;
    const mensajeValue = mensaje.value;
    console.log(nameValue, correoValue, mensajeValue)

    //crear const usuario
    const user = {
        nameValue, //es lo mismo, la variable previamente guardada
        correoValue, //mensaje: mensajeValue es lo mismo, uno desde key: value
        mensajeValue
    }

    //5. valor que hemos recogido lo guardamos en el localStorage:
    localStorage.setItem('user', JSON.stringify(user))

    const userGuardado = JSON.parse(localStorage.getItem('user')); //no hace falta igualar, se parasea
    console.log(userGuardado);

    //inner el archivo
    let p = document.createElement('p');
    console.log(userGuardado)
    p.innerHTML =`${userGuardado.nameValue} ${userGuardado.correoValue} ${userGuardado.mensajeValue}` ;
    document.body.appendChild(p);

    
    users.push(userGuardado);
    localStorage.setItem('users', JSON.stringify(users));

    const storedUsers = JSON.parse(localStorage.getItem('users'));
    console.log(storedUsers);
    
    let usersP = document.createElement('p');
    let html = '';
    storedUsers.forEach(user => {
       html += `- ${user.nameValue} ${user.correoValue} ${user.mensajeValue} <br>`;
    });
    usersP.innerHTML = html;
    document.body.appendChild(usersP);
}

//3 escuche el evento
btn.addEventListener('click', onSubmit);

/////////////////////////Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos). Pista: tendrás que ir guardando los datos en un array

/////////////////////////Mostrar los datos de los contactos guardados en el DOM

/////////////////////////Crea un botón para borrar todos los contactos guardados en Local Storage
let deleteBtn = document.createElement('button');
deleteBtn.innerHTML = 'Delete users';
deleteBtn.addEventListener('click', () => {
    localStorage.setItem('users', JSON.stringify([]));
})
document.body.appendChild(deleteBtn);



