//Imprimir por consola la lista de razas de todos los perros.

axios
  .get("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    console.log(res.data.message);
    const dogList = res.data.message;
  })
  .catch((err) => console.error(err));

//Imprimir por consola una imagen (= url) random de una raza.
axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    console.log(res.data.message);
    const randomImg = res.data.message;
  })
  .catch((err) => console.error(err));

//Imprimir por consola todas las imágenes de una raza concreta.
axios
  .get("https://dog.ceo/api/breed/hound/images")
  .then((res) => {
    console.log(res.data.message);
    const breedImg = res.data.message;
  })
  .catch((err) => console.error(err));

let breedImg = "hound-afghan";
//nombre-especifico[0]   nombre + '-' + nombre[i]

// Adapta las URLs que ya tenías para que puedas pasarle argumentos de otras razas.
const imgByBreed = (breedImg) => {
  axios
    .get("https://dog.ceo/api/breed/" + breedImg + "/images")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
};
