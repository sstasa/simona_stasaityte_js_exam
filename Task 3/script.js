/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const outputEl = document.getElementById("output");
const showUsersBtn = document.getElementById("btn");

let users = [];

function getUsers(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => console.warn("klaida getUsers", err));
}

async function mainInit() {
  users = await getUsers(ENDPOINT);
  console.log(`users = `, users);
  outputEl.textContent = "";
  outputEl.className = "outputGrid";
  users.forEach((user) => {
    createList(user);
  });
}

showUsersBtn.addEventListener("click", mainInit);

function createList(obj) {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const loginEl = document.createElement("h3");
  loginEl.textContent = obj.login;
  const imgEl = document.createElement("img");
  imgEl.src = obj.avatar_url;
  cardEl.append(loginEl, imgEl);
  outputEl.append(cardEl);
}
