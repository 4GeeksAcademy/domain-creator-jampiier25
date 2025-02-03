/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let pronoun = ["the", "our", "my"];
let adj = ["great", "big", "awesome"];
let noun = ["jogger", "racoon", "web"];
let ext = [".com", ".es", ".uk", ".de"];

const listaDomi = document.getElementById("resultado");

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        const li = document.createElement("li");
        li.textContent = pronoun[i] + adj[j] + noun[k] + ext[l];

        listaDomi.appendChild(li);
      }
    }
  }
}
