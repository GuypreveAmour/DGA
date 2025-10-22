//Choix du système de coloration 
const System = document.getElementsByName("system");
let ChoixSystem;
System.forEach(el =>{
  
  el.addEventListener("change", ()=>{
    ChoixSystem = el.value;
    console.log(ChoixSystem);
  });
})
//Couleur à afficher 
let Couleur;

//Afficheur de couleur
let color_display = document.querySelector(".color-disp");

//Afficher le code de la couleur 
let code_color = document.querySelector("#code")

//Fonction Générateur de couleur 
function generate() {
  if(ChoixSystem === "rgb"){
    rgb_func()
  }else if (ChoixSystem === "rgba") {
    rgba_func()
  } else if (ChoixSystem === "hexa") {
    hexa_func()
  } else if (ChoixSystem === "hsl") {
    hsl_func()
  }else{
    alert("ChoixSystem Invalid !")
  }
  color_display.style = `background:${Couleur}`;
  code_color.innerHTML = `${Couleur}`
}

//Fonction RGB
function rgb_func() {
  let red = Math.floor(Math.random()*256),
  green = Math.floor(Math.random()*256),
  blue = Math.floor(Math.random()*256);
  Couleur = `rgb(${red},${green},${blue})`
}

//Fonction RGBA
function rgba_func() {
  let red = Math.floor(Math.random() * 256),
    green = Math.floor(Math.random() * 256),
    blue = Math.floor(Math.random() * 256),
    alpha = Math.random().toFixed(3);
  Couleur = `rgba(${red},${green},${blue},${alpha})`
}
//Fonction hexagonale 
function hexa_func() {
  const chars = "0123456789abcdef"
  let col_char = [];
  
  for (var i = 0; i <6; i++) {
    col_char[i] = chars[Math.floor(Math.random()*chars.length)];
  }
  Couleur = `#${col_char[0]}${col_char[1]}${col_char[2]}${col_char[3]}${col_char[4]}${col_char[5]}`
}
//Fonction hsl
function hsl_func() {
  let h = Math.floor(Math.random() * 355),
  s = Math.floor(Math.random() * 101),
  l = Math.floor(Math.random() * 101);
  Couleur = `hsl(${h},${s}%,${l}%)`
}




const dga = document.querySelector("#color-choix");
dga.addEventListener("change", ()=>{
  //alert(dga.value);
  Couleur = dga.value;
  color_display.style = `background:${Couleur}`;
  code_color.innerHTML = `${Couleur}`
}
)
console.log(dga)