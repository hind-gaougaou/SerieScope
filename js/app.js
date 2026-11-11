const catalogue = document.querySelector("#catalogue");
const search=document.querySelector("#search")
let series = [];
async function getdata() {
  try {
    const responce = await fetch('https://api.tvmaze.com/shows?page=0');
    const data = await responce.json();
    console.log(data);
    series = data.slice(0,20)
   affichercarte();
  } catch (error) {
    console.error("Erreur :", error);

  }
}


function affichercarte() {
catalogue.innerHTML = "";
    series.forEach((serie) => {
        
   
  const carte = document.createElement("article");
  carte.classList ="bg-[#191919] border border-[#303030] rounded-xl overflow-hidden"
    

  const image = document.createElement("img");
  image.src =serie.image.medium;
  image.alt =serie.name;
  image.classList = "w-full h-64 object-cover block";
  



  const infos = document.createElement("div");
  infos.classList = "p-3 space-y-2";
  const titre = document.createElement("h3");
  titre.classList = "font-semibold text-white";
  titre.textContent=serie.name

  const description = document.createElement("p");
  description.classList = "line-clamp-2 text-neutral-400 text-sm";
  description.innerHTML =serie.summary
   
  const categorie = document.createElement("div");
  categorie.classList = "flex flex-wrap gap-1";

  const cat = document.createElement("span");
  cat.classList = "bg-[#292929] text-xs text-white px-2 py-0.5 rounded-full";
  cat.textContent= serie.genres

  categorie.append(cat);
  infos.append(titre, categorie, description);
  carte.append(image, infos);
  catalogue.appendChild(carte);




   });

}
getdata();

function recherchetfitre(){

  //  RECHERCHER
  const  divrecherche=document.createElement("div")
  divrecherche.classList ="space-y-1"
    const labelrecherche=document.createElement("label")
    labelrecherche.classList="block font-semibold text-white text-sm"
    labelrecherche.textContent="Recherche"
    labelrecherche.htmlFor="recherche"



    const rechercheinput=document.createElement("input")
    rechercheinput.classList="text-neutral-400 text-sm "
    rechercheinput.type="text"
    rechercheinput.placeholder="Ex. Breaking Bad"
divrecherche.append(labelrecherche, rechercheinput);
     //  FILTRER
     const divfiltrer=document.createElement("div")
     divfiltrer.classList="space-y-1"



const labelfiltrer=document.createElement("label")
    labelfiltrer.classList="block font-semibold text-white text-sm "
    labelfiltrer.textContent="Genre"
    labelfiltrer.htmlFor="genre"



const filtrerinput=document.createElement("input")
    filtrerinput.classList="text-neutral-400 text-sm"
    filtrerinput.type="text"

  filtrerinput.placeholder="Tous les genres"

divfiltrer.append(labelfiltrer,filtrerinput)






const btn=document.createElement("button")
btn.type="button"
btn.textContent="↻ Réinitialiser"
btn.classList="bg-[#292929] border border-[#303030] rounded-lg px-4 py-2 text-sm font-semibold text-white"
 search.append(divrecherche,divfiltrer,btn)



}
recherchetfitre()





