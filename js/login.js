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
