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
function Cal2Mol() {
  let Mol = -1;
  let M = document.getElementById("Mass").value;
  let MW = document.getElementById("MW").value;
  let N = document.getElementById("N").value;
  let Volume = document.getElementById("Volume").value;

  if(M != 0 && MW != 0){
    Mol = M/MW;
  }
  else if(N != 0){
    Mol = N/(6.02*(10**23));
  }
  else if(Volume != 0){
    Mol = Volume/22.4;
  }
  else{
    Mol = "N/A";
  }
  document.getElementById("MolVal").textContent = Mol;
}

function Cal2M() {
  let Mol = document.getElementById("Mol").value;
  let M = -1;
  let MW = document.getElementById("MW").value;
  let N = document.getElementById("N").value;
  let Volume = document.getElementById("Volume").value;

  if(Mol != 0 && MW != 0){
    M = Mol*MW;
  }
  else if(MW != 0 && N != 0){
    M = (N*MW)/(6.02*(10**23));
  }
  else if(MW != 0 && Volume != 0){
    M = (Volume*MW)/22.4;
  }
  else{
    M = "N/A";
  }
  document.getElementById("MassVal").textContent = M;
}

function Cal2N() {
  let Mol = document.getElementById("Mol").value;
  let M = document.getElementById("Mass").value;
  let MW = document.getElementById("MW").value;
  let N = -1;
  let Volume = document.getElementById("Volume").value;

  if(Mol != 0){
    N = Mol*6.02*(10**23);
  }
  else if(M != 0 && MW != 0){
    N = (M/MW)*(6.02*(10**23));
  }
  else if(Volume != 0){
    N = (Volume/22.4)*(6.02*(10**23));
  }
  else{
    N = "N/A"
  }
  document.getElementById("NVal").textContent = N;
}

function Cal2V() {
  let Mol = document.getElementById("Mol").value;
  let M = document.getElementById("Mass").value;
  let MW = document.getElementById("MW").value;
  let N = document.getElementById("N").value;
  let Volume = -1;

  if(Mol != 0){
    Volume = Mol*22.4;
  }
  else if(M != 0 && MW != 0){
    Volume = (M/MW)*22.4;
  }
  else if(N != 0){
    Volume = (N/(6.02*(10**23)))*22.4;
  }
  else{
    Volume = "N/A"
  }
  document.getElementById("VVal").textContent = Volume;
}