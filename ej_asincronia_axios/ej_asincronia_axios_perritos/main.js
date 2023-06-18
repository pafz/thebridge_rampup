//para saber si array no está vacía if (dogList[element].length !== 0) {}
// JSON key values https://stackoverflow.com/questions/26901971/how-to-get-all-key-in-json-object-javascript

//1.   Imprimir por consola la lista de razas de todos los perros.
axios
  .get("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    console.log(res.data.message);
    const dogList = res.data.message;

    const allDogListKeys = Object.keys(dogList);
    allDogListKeys.forEach((breedName) => {
      const option = document.createElement("option");
      option.value = breedName;
      option.innerText = breedName;
      document.getElementById("breeds").appendChild(option);
      const liBreeds = document.createElement("li");
      liBreeds.innerText = breedName;
      ulBreeds.appendChild(liBreeds);

      if (dogList[breedName].length !== 0) {
        const olSubBreeds = document.createElement("ul");
        liBreeds.appendChild(olSubBreeds);

        dogList[breedName].forEach((subBreedName) => {
          const liSubBreeds = document.createElement("li");
          liSubBreeds.innerText = subBreedName;
          olSubBreeds.appendChild(liSubBreeds);
        });
      }
    });
  })
  .catch((err) => console.error(err));

//2.    Imprimir por consola una imagen (= url) random de una raza.
axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    const randomImg = res.data.message;
    console.log(randomImg);
    //img
    const imgBreed = document.createElement("img");
    imgBreed.setAttribute("src", randomImg);
    document.getElementById("random-img").appendChild(imgBreed);
  })
  .catch((err) => console.error(err));

//3.   Imprimir por consola todas las imágenes de una raza concreta.

const printRandomBreedImages = (breed) => {
  document.getElementById("breed-imgs").innerHTML = "";
  axios
    .get(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => {
      const breedImgs = res.data.message;
      console.log(breedImgs);
      breedImgs.forEach((url) => {
        const imgBreed = document.createElement("img");
        imgBreed.setAttribute("src", url);
        document.getElementById("breed-imgs").appendChild(imgBreed);
      });
    })
    .catch((err) => console.error(err));
};

printRandomBreedImages("affenpinscher");

//DOM
const h1Page = document.getElementById("dog_api_h1");
const divBreeds = document.createElement("div");
h1Page.after(divBreeds);
const ulBreeds = document.createElement("ul");
divBreeds.appendChild(ulBreeds);

document.getElementById("breeds").addEventListener("change", (e) => {
  printRandomBreedImages(e.target.value);
});
