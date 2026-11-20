

import { getall } from "./services/serieService.js";
import { affichercarte } from "./ui/cards.js";
import { stockSeries,arr } from "./data/store.js";
import { recherchetfitre, remplirgenre } from "./ui/filters.js";
import { afficheformule } from "./ui/form.js";

async function init() {
    const series = await getall();
   console.log(series);
    stockSeries(series)
    affichercarte(arr);
    recherchetfitre()
    remplirgenre()
   

    const formulaire = document.querySelector("#formulaire-serie");
    formulaire.addEventListener("submit", async(e) => {
        e.preventDefault();
         await afficheformule();
        const nouvelleseries = await getall();
        stockSeries(nouvelleseries);
      affichercarte(arr);
      formulaire.reset();
});
    
}

init();
