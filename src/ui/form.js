import { create } from "../services/serieService.js";
const nom = document.querySelector("#nom");
const genrr = document.querySelector("#genre");
const text = document.querySelector("#description");
const langue = document.querySelector("#language");
const message = document.querySelector("#message");

export async function afficheformule() {
  if (
    nom.value.trim() === "" ||
    langue.value.trim() === "" ||
    genrr.value.trim() === "" ||
    text.value.trim() === ""
) {
    alert("remplir tous les champ")
    return false;
}
  let newserie = {
    name: nom.value.toLowerCase(),
    language: langue.value,
    genres: genrr.value.split(",").map((g) => g.trim()),
  };

  

//   try {
    await create(newserie);
    alert("ajoute succée")
//     afficherMessage("Série ajoutée avec succès !");
//     return true;
// } catch (error) {
//     afficherMessage("Erreur lors de l'ajout de la série.");
//     return false;
// }
}



