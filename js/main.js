// Responsive Nav Bar
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
  ul.classList.toggle("showData");
  // console.log(ul);
  if(ul.className == "showData"){
    document.getElementById("bar").className="fa-solid fa-xmark"
  }
  else{
    document.getElementById("bar").className="fa-solid fa-bars"
  }
})

// Movind and Bouncing
const SFLogo = document.querySelector('.SF');

let x = 0;
let y = 0;
let speedX = 1;
let speedY = 1;

function moveLogo() {
    x += speedX;
    y += speedY;

    const maxX = window.innerWidth - SFLogo.clientWidth;
    const maxY = window.innerHeight - (SFLogo.clientHeight + 100);   

    if (x >= maxX || x <= 0) {
        speedX *= -1;
    }
    if (y >= maxY || y <= 0) {
        speedY *= -1;
    }

    
    SFLogo.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(moveLogo);
}

moveLogo();
