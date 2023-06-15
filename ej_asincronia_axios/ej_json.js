//Imprimir por consola la lista (array) de usuarios READ. https://jsonplaceholder.typicode.com/users CRUD
let users = [];
const printAll = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
printAll();

//Imprimir por consola solo el nombre de los usuarios. SE PUEDE HACER UN BUCLE EN console.log()

const printAllUsersName = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      users = res.data;
      users.forEach((user) => {
        console.log(user.name);
      });
    })
    .catch((error) => console.error(error));
};
printAllUsersName();

/*
Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API. 
Este proceso debe realizarse fuera de cualquier función.
Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que JavaScript no es bloqueante y 
el console.log se ejecuta antes de que la variable sea llenada con la información de la solicitud.
*/

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    users = res.data; //TODO: nota: mete los datos dentro de la var
  })
  .catch((err) => console.error(err));

//Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.

const showUsers = (e) => {
  console.log(users);
};
showUsers();

//TODO: DOM btn con Click me! y continuar
/*Crea un botón que, cuando lo cliques, ejecute la función que habías creado: OK
    const bntShowUsers = (e) => {
        showUsers();
    };
*/

//muestra el nombre de cada uno en el DOM ( en el HTML)
const bntShowUsers = () => {
  showUsers();
};

const createButton = () => {
  const btn = document.createElement("button");
  btn.innerText = "Click me!";
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "btn");
  document.body.appendChild(btn);
};

const createParagraph = () => {
  const p = document.createElement("p");
  const names = users.map((user) => user.name);
  const pText = document.createTextNode(names.join(" - "));
  p.appendChild(pText);
  document.body.appendChild(p);
};

//add info to DOM
createButton();

document.querySelector("body").addEventListener("click", bntShowUsers);
document.querySelector("body").addEventListener("click", createParagraph);
