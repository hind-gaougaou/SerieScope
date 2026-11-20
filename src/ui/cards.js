import { deleteserie } from "../services/serieService.js";
import { getall } from "../services/serieService.js";
import { stockSeries, arr } from "../data/store.js";
const catalogue = document.querySelector("#catalogue");
export function affichercarte(series) {
  catalogue.innerHTML = "";
  series.forEach((serie) => {
    const carte = document.createElement("article");
    carte.classList =
      "bg-[#191919] border border-[#303030] rounded-xl overflow-hidden";

    const image = document.createElement("img");
    if (serie.image && serie.image.medium) {
      image.src = serie.image.medium;
    } else {
      image.style.display = "none";
    }
    image.alt = serie.name;
    image.classList = "w-full h-64 object-cover block";

    const infos = document.createElement("div");
    infos.classList = "p-3 space-y-2";
    const titre = document.createElement("h3");
    titre.classList = "font-semibold text-white";
    titre.textContent = serie.name;

    const description = document.createElement("p");
    description.classList = "line-clamp-2 text-neutral-400 text-sm";
    description.textContent = serie.summary;

    const categorie = document.createElement("div");
    categorie.classList = "flex flex-wrap gap-1";
    const actions = document.createElement("div");
    actions.classList = "flex gap-3";
    // button de supprime
    const supprimer =document.createElement("button")
    supprimer.style.backgroundColor = "#991B1B";
    supprimer.classList ="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-lg"
    supprimer.textContent="Delete"
    supprimer.addEventListener("click", async () => {
      const confirmation = confirm("Voulez-vous vraiment supprimer cette série ?");

    if (!confirmation) {
        return;
    }
    await deleteserie(serie.id);
     const nouvelleseries = await getall();
    stockSeries(nouvelleseries);
  
    affichercarte(arr);
});
    // button modifier
    const modifier=document.createElement("button")
    modifier.style.backgroundColor = "#059669";
      // modifier.className.add("bg-[#059669]")
      modifier.className = "bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg";
     modifier.textContent="Edit"
     actions.append(supprimer,modifier)

    //  genres

    serie.genres.forEach((genre) => {
      const cat = document.createElement("span");
      cat.classList = "text-white bg-[#292929] border-[#303030] rounded-xl p-2";
      cat.textContent = genre;
      categorie.append(cat);
    });
    infos.append(titre, categorie, description,actions);
    carte.append(image, infos);
    catalogue.appendChild(carte);
  });
}



