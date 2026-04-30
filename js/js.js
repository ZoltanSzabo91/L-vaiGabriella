//sticky

window.addEventListener("scroll", () => {
    const menu = document.querySelector(".menu");

    if (window.scrollY > 50){
        menu.classList.add("sticky-active");
    } else {
        menu.classList.remove("sticky-active");
    }
});


const c2 = document.getElementById("chilli2");
const c5 = document.getElementById("chilli5");
let maps = false;

function setMap(address, state) {
    const iframe = document.getElementById("map");
    iframe.src = address;
    maps = state;
    updateActive();
}

function updateActive() {
    if (maps) {
        c2.classList.remove("active");
        c5.classList.add("active");
    }
    else {
        c2.classList.add("active");
        c5.classList.remove("active");
    }
}


/* js vége !!! bővítést csak feljebb */

setMap(
  "https://www.google.com/maps/embed?...",
  false
);