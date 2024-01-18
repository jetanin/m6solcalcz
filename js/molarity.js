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

function Cal2Mass() {
  let Conc = document.getElementById("Conc").value;
  console.log(Conc);
  let MW = document.getElementById("MW").value;
  console.log(MW);
  let Volome = document.getElementById("Volome").value;
  console.log(Volome);
  let Mass = (MW*Conc*Volome)/1000;
  console.log(Mass);
  document.getElementById("MassVal").textContent = Mass;
}

function Cal2C() {
  let Mass = document.getElementById("Mass").value;
  console.log(Mass);
  let MW = document.getElementById("MW").value;
  console.log(MW);
  let Volome = document.getElementById("Volome").value;
  console.log(Volome);
  let Conc = ((Mass*1000)/(MW*Volome))
  console.log(Conc);
  document.getElementById("ConcVal").textContent = Conc;
}

function Cal2V() {
  let Mass = document.getElementById("Mass").value;
  console.log(Mass);
  let MW = document.getElementById("MW").value;
  console.log(MW);
  let Conc = document.getElementById("Conc").value;
  console.log(Conc);
  let Volume = ((Mass*1000)/(MW*Conc))
  console.log(Volume);
  document.getElementById("VVal").textContent = Volume;
}