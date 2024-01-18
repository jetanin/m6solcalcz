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
  let Mol = document.getElementById("Mol").value;
  let MSl = document.getElementById("MSl").value;
  let MSv = document.getElementById("MSv").value;
  let MW = document.getElementById("MW").value;

  if(Mol != 0 && MSv != 0){
    Conc = Mol/MSv;
  }
  else if(MSl != 0 && MSv != 0 && MW != 0){
    Conc = ((MSl*1000)/(MSv*MW));
  }
  else{
    Conc = "N/A"
  }
  document.getElementById("ConcVal").textContent = Conc;
}

function Cal2Mol() {
  let Conc = document.getElementById("Conc").value;
  let Mol = -1;
  let MSl = document.getElementById("MSl").value;
  let MSv = document.getElementById("MSv").value;
  let MW = document.getElementById("MW").value;

  if(Conc != 0 && MSv != 0){
    Mol = Conc*MSv;
  }
  else if(MSl != 0 && MW != 0){
    Mol = MSl/MW;
  }
  else{
    Mol = "N/A";
  }
  document.getElementById("MolVal").textContent = Mol;
}

function Cal2MSl() {
  let Conc = document.getElementById("Conc").value;
  let Mol = document.getElementById("Mol").value;
  let MSl = -1;
  let MSv = document.getElementById("MSv").value;
  let MW = document.getElementById("MW").value;

  if(Conc != 0 && MSv != 0&& MW != 0){
    MSl = (Conc*MW*MSv)/1000;
  }
  else if(Mol != 0 && MW != 0){
    MSl = Mol*MW;
  }
  else{
    MSl = "N/A"
  }
  document.getElementById("MSlVal").textContent = MSl;
}

function Cal2MSv() {
  let Conc = document.getElementById("Conc").value;
  let Mol = document.getElementById("Mol").value;
  let MSl = document.getElementById("MSl").value;
  let MSv = -1;
  let MW = document.getElementById("MW").value;

  if(Conc != 0 && Mol != 0){
    MSv = Mol/Conc;
  }
  else if(Conc != 0 && MSl != 0 && MW != 0){
    MSv = (MSl*1000)/(Conc*MW);
  }
  else{
    MSv = "N/A"
  }
  document.getElementById("MSvVal").textContent = MSv;
}