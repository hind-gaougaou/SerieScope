import { arr } from "../data/store.js";
import { affichercarte } from "./cards.js";

const search = document.querySelector("#search");

let rechercheinput;
let genreselect;
export function recherchetfitre() {
  //  RECHERCHER

  const divrecherche = document.createElement("div");
  divrecherche.classList = "space-y-1";
  const labelrecherche = document.createElement("label");
  labelrecherche.classList = "block font-semibold text-white text-sm";
  labelrecherche.textContent = "Recherche";
  labelrecherche.htmlFor = "recherche";

  rechercheinput = document.createElement("input");
  rechercheinput.classList = "text-neutral-400 text-sm ";
  rechercheinput.type = "text";
  rechercheinput.placeholder = "Ex. Breaking Bad";
  divrecherche.append(labelrecherche, rechercheinput);

  rechercheinput.addEventListener("input", filtrer);

  //  FILTRER
  const divfiltrer = document.createElement("div");
  divfiltrer.classList = "space-y-1";

  const labelfiltrer = document.createElement("label");
  labelfiltrer.classList = "block font-semibold text-white text-sm ";
  labelfiltrer.textContent = "Genre";
  labelfiltrer.htmlFor = "genre";

  //   filtrerinput=document.createElement("input")
  //     filtrerinput.classList="text-neutral-400 text-sm"
  //     filtrerinput.type="text"

  //   filtrerinput.placeholder="Tous les genres"
  genreselect = document.createElement("select");
  genreselect.id = "genre";
  genreselect.classList =
    "w-full bg-[#292929] text-white text-sm rounded-lg px-3 py-2 outline-none";
  genreselect.innerHTML = `<option value="all">Tous les genres</option>`;

  genreselect.addEventListener("change", filtrer);

  divfiltrer.append(labelfiltrer, genreselect);

  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "↻ Réinitialiser";
  btn.classList =
    "bg-[#292929] border border-[#303030] rounded-lg px-4 py-2 text-sm font-semibold text-white";
  search.append(divrecherche, divfiltrer, btn);
  btn.addEventListener("click", () => {
    location.reload();
  });
}
// FONCTION RECHERCHE
export function filtrer() {
  const text = rechercheinput.value.toLowerCase();
  const genres = genreselect.value;

  const result = arr.filter((ser) => {
    const recherche = ser.name.toLowerCase().includes(text);

    const genre = genres === "all" || ser.genres.includes(genres);

    return recherche && genre;
  });

  affichercarte(result);
}

// FUNCTION FILTRER
export function remplirgenre() {
  let genres = [];
  const optiongenre = arr.forEach((serie) => {
    serie.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
  });

  genres.forEach((g) => {
    const genr = document.createElement("option");
    genr.textContent = g;
    genr.value = g;
    genreselect.appendChild(genr);
  });
}
