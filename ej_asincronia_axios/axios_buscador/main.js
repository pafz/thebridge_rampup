/* Lo primero que haremos será crear un input de tipo texto y un botón para buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después crearemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición a la API para obtener información de ese usuario y así mostrarla en nuestra página: */
const inputName = document.getElementById('site-search');
const btn = document.getElementById('btn');

const searchUsers = async e => {
  e.preventDefault();
  try {
    const user = inputName.value;

    const res = await axios.get(`https://api.github.com/users/${user}`);
    console.log(res.data.name);
    console.log(res.data.avatar_url);

    const reposData = await axios.get(res.data.repos_url);
    console.log(reposData.data.length);
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener('click', searchUsers);
