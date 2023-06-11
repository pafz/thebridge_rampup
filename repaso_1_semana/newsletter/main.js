/* Modifica tu formulario de Suscripción para que puedas guardar varias suscripciones. Cada vez que escribas una nueva suscripción, guárdala en un array 
junto con las anteriores. Después, muestra todas las suscripciones en la vista de Suscripciones, de forma que se puedan leer todas ellas.
.checked vs .value   //VALIDACIONES, cuidado usar el value y no la key    //dom .remove()    //https://stackoverflow.com/questions/66864969/how-to-save-radio-buttons-and-checkbox-to-localstorage
*/

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputDance = document.getElementById("dance");
const inputFishing = document.getElementById("fishing");
const inputSports = document.getElementById("sports");
const inputClimbing = document.getElementById("climbing");
const inputFreeTrial = document.getElementById("free-trial");
const inputMonthly = document.getElementById("monthly");
const inputAnnual = document.getElementById("annual");
const btn = document.getElementById("btn");

let usuarios = JSON.parse(localStorage.getItem("users"));
if (usuarios === null) {
  usuarios = [];
}

const eventSend = (e) => {
  e.preventDefault();
  const nameValue = inputName.value;
  const emailValue = inputEmail.value;
  const danceValue = inputDance.checked;
  const fishingValue = inputFishing.checked;
  const sportsValue = inputSports.checked;
  const climbingValue = inputClimbing.checked;
  const freeTrialValue = inputFreeTrial.checked;
  const monthlyValue = inputMonthly.checked;
  const annualValue = inputAnnual.checked;

  const usuario = {
    name: nameValue,
    email: emailValue,
    hobbies: [],
    suscription: "free-trial",
  };

  if (annualValue) {
    usuario.suscription = "annual";
  }

  if (monthlyValue) {
    usuario.suscription = "monthly";
  }

  if (danceValue) {
    usuario.hobbies.push("dance");
  }

  if (fishingValue) {
    usuario.hobbies.push("fishing");
  }

  if (sportsValue) {
    usuario.hobbies.push("sports");
  }

  if (climbingValue) {
    usuario.hobbies.push("climbing");
  }

  const createAlertDanger = (field) => {
    let alertDiv = document.createElement("div");
    let textDangerEmail = document.createTextNode(`Sorry, ${field}`);
    alertDiv.appendChild(textDangerEmail);

    document.body.appendChild(alertDiv);
    alertDiv.classList.add("alert");
    alertDiv.classList.add("alert-danger");
    alertDiv.setAttribute("role", "alert");
    alertDiv.setAttribute("id", "danger-alert");
  };

  const createAlertSuccess = () => {
    let alertDiv = document.createElement("div");
    let textSuccess = document.createTextNode("Welcome");
    alertDiv.appendChild(textSuccess);

    document.body.appendChild(alertDiv);
    alertDiv.classList.add("alert");
    alertDiv.classList.add("alert-success");
    alertDiv.setAttribute("role", "alert");
  };

  const validation = () => {
    if (
      (nameValue &&
        emailValue &&
        danceValue &&
        fishingValue &&
        sportsValue &&
        climbingValue &&
        freeTrialValue &&
        freeTrialValue &&
        monthlyValue &&
        annualValue) === ""
    ) {
      console.log("Please, fill in all the form");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
      console.log("wrong email");
      createAlertDanger("wrong email");
      setTimeout(() => {
        const divAlertDanger = document.getElementById("danger-alert");
        console.log(divAlertDanger);
        divAlertDanger.remove();
      }, 3000);
    } else if (
      (danceValue || fishingValue || sportsValue || climbingValue) !== true
    ) {
      console.log("please, choose at least one hobbie");
      createAlertDanger("choose at least one hobbie");
      setTimeout(() => {
        const divAlertDanger = document.getElementById("danger-alert");
        console.log(divAlertDanger);
        divAlertDanger.remove();
      }, 3000);
    } else {
      console.log("Welcome");
      createAlertSuccess();

      usuarios.push(usuario);
      localStorage.setItem("users", JSON.stringify(usuarios));

      setTimeout(() => {
        window.location.href = "./suscriptores.html";
      }, 3000);
    }
  };
  validation();
};

btn.addEventListener("click", eventSend);
