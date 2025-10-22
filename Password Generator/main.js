const $ = (e) => document.querySelector(e)
let Password = [];//le mot de pass

let typePswd;//le type du mdp

const MDP = $(".pswd");//affiche le mdp

const Nombres = "1234567890",
Lettres = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN",
Complexes = Nombres + Lettres + "/()#@&_*?+!$π%£∆∅ΩΠμ∞=";


//récupérer le Type du mdp
let type = document.getElementsByName("type");

type.forEach(el =>{
  el.addEventListener('change', ()=>{
  typePswd = el.value;
  console.log(typePswd);
})
})
//Type ( niveau ) de sécurité 
const secure = $("#secure");
secure.innerHTML = "Mot de Passe Moyen"
    secure.style = "color:red"

//longueur du mot de pass
let lenPswd = $("#len");
const lenDisp = $("#len-disp")
lenDisp.innerHTML = lenPswd.value;
lenDisp.style = "background:red";

//Mise à jour de la Taille en temps réelle 
lenPswd.addEventListener('change', ()=>{
  $("#len-disp").innerHTML = lenPswd.value;
  
  //Mise à jour du niveau de sécurité en fonction de la taille du mdp
  if(lenPswd.value <=8){
    secure.innerHTML = "Mot de Passe Faible";
    lenDisp.style = "background:red";
    secure.style = "color:red"
  } else if (lenPswd.value >=8 && lenPswd.value <= 20) {
    secure.innerHTML = "Mot de Passe Moyen"
    lenDisp.style = "background:green";
    secure.style = "color:green"
  } else {
    secure.innerHTML = "Mot de Passe Fort"
    secure.style = "color:blue"
    lenDisp.style = "background:blue";
  }
})


//Création du Mots de Pass
function generate() {
  Password.length = lenPswd.value;
if(typePswd === "nombre"){
  for (var i = 0; i < Password.length; i++) {
  Password[i] = Nombres[Math.floor(Math.random()*Nombres.length)]
  }
  console.log(Password)
}else if (typePswd === "lettre") {
  for (var i = 0; i < Password.length; i++) {
  Password[i] = Lettres[Math.floor(Math.random() * Lettres.length )]
}
console.log(Password)
} else if (typePswd === "tout") {
  for (var i = 0; i < Password.length; i++) {
  Password[i] = Complexes[Math.floor(Math.random() * Complexes.length)]
}
console.log(Password)
}else{
  alert("Veuillez Sélectionner un Type de Mot de Passe !")
}
MDP.innerHTML = `${Password.join('')}`
}
//Copier le mot de passe 
function CopierMDP() {
  let MDPT = MDP.textContent;
  navigator.clipboard.writeText(MDPT)
}
const cpBtn = $(".copier");
cpBtn.addEventListener('click', CopierMDP);

//Incrémenter la taille du mdp
const plus = $(".plus"),
moins = $(".moins");

plus.addEventListener('click',()=>{
  lenPswd.value++
  $("#len-disp").innerHTML = lenPswd.value;
})
moins.addEventListener('click',()=>{
  lenPswd.value--
  $("#len-disp").innerHTML = lenPswd.value;
})