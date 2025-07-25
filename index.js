// comment pointer les element 
// les differents selecteurs 

// .comment selctionner les element 
// document.querySelector('h4').style.backgroundColor = 'red';


// const baliseH4 = document.querySelector('h4');
// console.log(baliseH4);

// // baliseH4.style.backgroundColor = 'yellow';

// // les elements sur les click
// // autrement appeler les click event
// const btn1 = document.querySelector('#btn-1');

// // UNE AUTRE MANIERE
// const btn2  = document.getElementById('btn2');

const reponse = document.querySelector('p');
// // console.log('la reponse est ',reponse);

const questionQ = document.querySelector('.click_event');
// console.log(questionQ); 


// ici js sait qu'il doit trouver la variable
// comement selectionner les elements par ID



// btn1.addEventListener("click", () =>{
//    reponse.classList.add("show_response")
//    reponse.style.background = "green";
// })


// // differencier le bonne reponse a la mauvaise 

// btn1.addEventListener("click", () =>{
//    response.style.visibility  = "visible"
// //    reponse.style.background = "red";
// })
// questionQ.addEventListener('click',() => {
//    console.log('clicked!');
// })
// un message en cliquant sur la question
// questionQ.addEventListener('click',() => {
//    console.log('clicked!');
  
// });

//  btn1.addEventListener("click", ()=>{
//    console.log('i have been clicked');
//  });

// btn2.addEventListener("click", ()=>{
//    console.log('i have been clicked');
// });



// maintenant reveler la reponse 



// -------------------------------------------------------------
// 2 Parlons de Mouse move

// MOUSE EVENT 
// cree un petit cercle qui va nous suivre partout

// avant de l'utiliser il faut la pointer 
const  mousemove  =  document.querySelector(".mousemove");
// console.log(mousemove);

// pour faire  l'evenement  avec la souris
window.addEventListener('mousemove',(e) =>{
   mousemove.style.left = e.pageX +'px';
   mousemove.style.top = e.pageY +'px';

   /* une proprieté qui s'appele x et y */
   // mousemove.style.left = e.y +'px';
   // mousemove.style.top = e.y +'px';
   // ici le cercle ne vas pas suivre 
})

// les autre evenement aavec la souris


window.addEventListener("mousedown", () =>{
   mousemove.style.transform = "scale(2) translate(-25%, -25%)";

});

window.addEventListener("mousedUp", () =>{
   mousemove.style.transform = "scale(2) translate(-50%, -50%)";
   mousemove.style.border = "2px solid teal";
});

questionQ.addEventListener('mouseenter',()=>{
   questionQ.style.background = "rgba(0,0,0,0.6)";
} );
// la couleur de font en pink
questionQ.addEventListener("mouseout", ()=>{
   questionQ.style.background = "pink";
});

// en cas de survole de la souris 
reponse.addEventListener("mouseover",()=>{
   reponse.style.transform = "rotate(2deg)";
});

// """"""""""""""""""""""""""""""""""""""""""""""""""""""


// le key press event
const keyppress = document.querySelector(".keypress");
const key = document.getElementById("key");
// un declanchement a partir de la touche 
document.addEventListener("keypress", (e)=>{
   //   savoir suee quelle ouche que nous avons touché
   // console.log(e.key);

   // pour ecrir du text dans la balise il faut 
// identifier la balise 
   key.textContent   = e.key;
   // conditionner les couleurs en fonction de la touche
   // si la touche est a ou b alors la couleur de fond sera rouge
   if(e.key === "a"){
      keyppress.style.background = "red";
   } else if (e.key === "b"){
      keyppress.style.background = "red";
   }else{
      keyppress.style.background = "blue";
   }
});

// 

// comment ajouter les sons
// const ring = (key) => {
//    const audio = new Audio();
//    audio.src =  key + ".mp3";
//    audio.play();
// }

// ring("click");
// pour jouer le son en fonction de la touche
// -----------------------------------------------------------------
// le scroll event

const nav = document.querySelector("nav");
console.log(nav);

window.addEventListener("scroll", () => {
   console.log(window.scrollY);
   // window.scrollY permet de savoir la position du scroll
// si la position du scroll est superieur a 100px alors on change la couleur de

if (window.scrollY > 120) {
      nav.style.top = "0";
   } else {
      nav.style.top = "-50px";
   }

});

// -----------------------------------------------------------------
// LES EVENEMENT SUR LES FORMULAIRES
// et les inputs
// les form event 
const inputName = document.querySelector(".box input[type='text']");
const select = document.querySelector("select");
const form = document.querySelector("form");
 let pseudo = "";
 let language = "";



inputName.addEventListener("input", (e) => {
   pseudo = (e.target.value);
   // e.target.value permet de recuperer la valeur de l'input
   // on peut aussi utiliser e.target.value pour changer la valeur de l'input

   // on peut stocker les donnes dans une boite
   // dans une boite evolutive
   console.log(pseudo);
});
select.addEventListener("input",(e) => {
   language = (e.target.value);
   
})


form.addEventListener("submit", (e) => {
   e.preventDefault(); // pour empecher le rechargement de la page
   // console.log("le formulaire a ete soumis");
   // console.log("yess!!");
   console.log(cgv.checked);

   if (cgv.checked) {
      // ON PEUT ALLEZ CHERCHER UNE BALISE  AVEC
      document.querySelector('form > div').innerHTML  = `Bonjour ${pseudo}, vous avez choisi le langage ${language}`;
   }else{
      alert("Veuillez remplir tous les champs");


   }
});


// -----------------------------------------------------------------
// le load event
// le load event se declenche lorsque la page est chargée

window.addEventListener("load", () => {
   console.log("document chargé");
});

// --------------------------------------------------
// le forEach event

const boxes = document.querySelectorAll("box");

boxes.forEach((box) => {
   box.addEventListener("click", (e) => {
      e.target.style.transform = "scale(0.7)";
   });
});


// LES DEUX FAÇONS DE SELECTIONNER LES ELEMENTS

// ADDEventListener VS ONCLICK         
// au lieude addEv on peut utiliser onclick
// dicument.onclick = function() {
//    console.log("click");
// }
// bubbling s'execute a la fin 
document.body.addEventListener("click", () => {
   console.log("click1");   
});

// le capture s'execute en premier
document.body.addEventListener("click", () => {
   console.log("click2");   
}, true); // le true permet de faire du capture
// le capture s'execute en premier

// --------------------------------

// stop propagation

questionQ.addEventListener("click", (e) => {
   alert("click sur la question");
   e.stopPropagation(); // permet d'arreter la propagation de l'evenement
});

// enlever le addEventListener avec le removeEventListener

// ---------------------------------
// BOM
// BOM (Browser Object Model) permet de manipuler le navigateur
// window.open("https://www.google.com", "_blank"); // ouvre une nouvelle fenetre
// LE BOM PERMET DE FAIRE DES ACTIONS SUR LE NAVIGATEUR

console.log(Window.innerheight); // hauteur de la fenetre
console.log(Window.scrollY); // position du scroll

// acceder a un autre page 
// window.open("https://www.google.com", "cours js", "height=600,width=800"); // ouvre une nouvelle fenetre

// window.close(); // ferme la fenetre
// le elements adose a windows

btn2.addEventListener("click", () => {
   confirm("Etes-vous sur de vouloir quitter cette page ?"); // affiche une boite de dialogue
});

let name;
btn2.addEventListener("click", () => {
   let name = prompt("Quel est votre nom ?");
   // console.log(name);
   questionQ.innerHTML = `Bonjour ${name}, bienvenue sur notre site !`;
   // affiche une boite de dialogue pour demander le nom
});

// -----------------------------------------------------------------
// le setTimeout et setInterval
// setTimeout permet d'executer une fonction apres un certain temps
setTimeout(() => {
   questionQ.style.borderRadius = "300px ";
}, 2000); // 2000ms = 2 secondes

// setInterval permet d'executer une fonction toutes les secondes
setInterval(() => {
   document.body.innerHTML +=
       "<p>Hello World</p>";
}, 1000); // 1000ms = 1 seconde

document.body.addEventListener("click", () => {
   clearInterval(); // permet d'arreter l'intervalle
});

// comment suprimer l'element
// e.target.

// location  il permet de recuperer l'url de la page
// et aussi de changer l'url de la page

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace("https://www.google.com"); // redirige vers google
// // location.reload(); // recharge la page

// window.onload = () => {
//    location.href = "https://www.google.com"; // redirige vers google
// }

// navigator

console.log(navigator.userAgent); // affiche les informations sur le navigateur

// geolocation 

// history
console.log(history.length); // affiche le nombre de pages dans l'historique

// ''''''''''''''''''''''''''''''''''

// le set property
window.addEventListener("mousemove", (e) => {
   console.log(e);

   nav.style.setProperty("--x", e.layerX + "px");
   nav.style.setProperty("--y", e.layerY + "px");

});