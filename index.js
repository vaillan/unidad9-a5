// Import stylesheets
import './style.css';

//Variables globales
let token = "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";

/**
 * Obtien un usuario del repositorio publico de usuarios de github
 * @returns {Promise}
 */
function getUser(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
  });
}

/**
 * Función para mostrar resultado
 * @param {string}  
 * @return {void}
 */
 function setAlert(value) {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    Values: [${value}]
  </div>
  `;
}


function onInit() {
  let url = "https://api.github.com/users/mojodna";
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  }
  getUser(url, options)
  .then(data => {
    const values = Object.values(data);
    setAlert(values)
  });
}

onInit();
