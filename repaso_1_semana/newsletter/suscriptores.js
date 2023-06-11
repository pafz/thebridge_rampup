/* MOSTRAR Crea una vista Suscripciones y muestra en esa página la suscripción que habías guardado previamente en el localStorage
acceder usuario.name vs usuario.nameValue
 */

let usuarios = JSON.parse(localStorage.getItem("users"));
if (usuarios === null) {
  usuarios = [];
}

const usuariosList = document.querySelector(".list-users");

const ul = document.createElement("ul");
ul.setAttribute("class", "list-group");

usuarios.forEach((user) => {
  console.log(user);
  ul.innerHTML += `<li class="list-group-item">
  ${user.name} | ${user.email}<br>
  Subscription: ${user.suscription}<br>
  hobbies: ${user.hobbies.join(" - ")}<br>
  </li>`;
});

usuariosList.appendChild(ul);
