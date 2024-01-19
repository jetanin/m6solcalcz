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
function Cal2C1() {
    let C1 = -1;
    let V1 = document.getElementById("V1").value;
    let C2 = document.getElementById("C2").value;
    let V2 = document.getElementById("V2").value;
  
    if(V1 != 0 && C2 != 0 && V2 != 0){
      C1 = (C2*V2)/V1;
    }
    else{
      C1 = "N/A";
    }
    document.getElementById("C1Val").textContent = C1;
  }
  
  function Cal2V1() {
    let C1 = document.getElementById("C1").value;
    let V1 = -1;
    let C2 = document.getElementById("C2").value;
    let V2 = document.getElementById("V2").value;
  
    if(C1 != 0 && C2 != 0 && V2 != 0){
        V1 = (C2*V2)/C1;
      }
      else{
        V1 = "N/A";
      }
      document.getElementById("V1Val").textContent = V1;
  }
  
  function Cal2C2() {
    let C1 = document.getElementById("C1").value;
    let V1 = document.getElementById("V1").value;
    let C2 = -1;
    let V2 = document.getElementById("V2").value;
  
    if(C1 != 0 && V1 != 0 && V2 != 0){
        C2 = (C1*V1)/V2;
      }
      else{
        C2 = "N/A";
      }
      document.getElementById("C2Val").textContent = C2;
  }
  
  function Cal2V2() {
    let C1 = document.getElementById("C1").value;
    let V1 = document.getElementById("V1").value;
    let C2 = document.getElementById("C2").value;
    let V2 = -1;
  
    if(C1 != 0 && V1 != 0 && C2 != 0){
        V2 = (C1*V1)/C2;
      }
      else{
        V2 = "N/A";
      }
      document.getElementById("V2Val").textContent = V2;
  }