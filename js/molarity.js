// Responsive Nav Bar
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
let nav_state = 0;

let CT = document.querySelector(".Contents");

icon.addEventListener("click", ()=>{
  ul.classList.toggle("showData");
  // console.log(ul);
  if(ul.className == "showData"){
    document.getElementById("bar").className="fa-solid fa-xmark"
    nav_state = 1;
    CT.style.transform = `translate(${0}px, ${280}px)`; //Slide Down Content When Showing NavMenu
  }
  else{
    document.getElementById("bar").className="fa-solid fa-bars"
    nav_state = 0;
    CT.style.transform = `translate(${0}px, ${0}px)`;//Slide Up Content Back
  }
})


// ================== CALCULATE ============================================
function Cal2C() {
  let Conc = -1;
  let Volume = document.getElementById("Volume").value;
  let Mol = document.getElementById("Mol").value;
  let Mass = document.getElementById("Mass").value;
  let MW = document.getElementById("MW").value;

  if(Mol != 0 && Volume != 0){
    Conc = (Mol*1000)/Volume;
  }
  else if(Mass != 0 && MW != 0 && Volume != 0){
    Conc = ((Mass*1000)/(MW*Volume));
  }
  else{
    Conc = "N/A"
  }
  document.getElementById("ConcVal").textContent = Conc;
}

function Cal2Mol() {
  let Conc = document.getElementById("Conc").value;
  let Mol = -1;
  let Volume = document.getElementById("Volume").value;
  let Mass = document.getElementById("Mass").value;
  let MW = document.getElementById("MW").value;

  if(Mass != 0 && MW != 0){
    Mol = Mass/MW
  }
  else if(Conc != 0 && Volume != 0){
    Mol = (Conc*Volume)/1000;
  }
  else{
    Mol = "N/A";
  }
  document.getElementById("MolVal").textContent = Mol;
}

function Cal2V() {
  let Conc = document.getElementById("Conc").value;
  let Mol = document.getElementById("Mol").value;
  let Volume = -1;
  let Mass = document.getElementById("Mass").value;
  let MW = document.getElementById("MW").value;

  if(Conc != 0 && Mol != 0){
    Volume = (Mol*1000)/Conc;
  }
  else if(Conc != 0 && Mass != 0 && MW != 0){
    Volume = ((Mass*1000)/(MW*Conc));
  }
  else{
    Volume = "N/A"
  }
  document.getElementById("VVal").textContent = Volume;
}

function Cal2Mass() {
  let Conc = document.getElementById("Conc").value;
  let Mol = document.getElementById("Mol").value;
  let Volume = document.getElementById("Volume").value;
  let Mass = -1;
  let MW = document.getElementById("MW").value;

  if(Mol != 0 && MW != 0){
    Mass = Mol*MW;
  }
  else if(MW != 0 && Conc != 0 && Volume != 0){
    Mass = (MW*Conc*Volume)/1000;
  }
  else{
    Mass = "N/A"
  }
  document.getElementById("MassVal").textContent = Mass;
}