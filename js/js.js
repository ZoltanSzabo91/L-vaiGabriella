//sticky

window.addEventListener("scroll", () => {
    const menu = document.querySelector(".menu");

    if (window.scrollY > 50){
        menu.classList.add("sticky-active");
    } else {
        menu.classList.remove("sticky-active");
    }
});


// maps

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

// hamb menu

function hamb_on(){
    const hamb_cont = document.getElementById("hamb_list");
    hamb_cont.classList.toggle("hamb_on")
}

function valt() {
    const div = document.getElementById("ideiglenesdiv");
    div.classList.toggle("kapcs");
};


/* js vége !!! bővítést csak feljebb */

setMap(
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.3197027070355!2d19.0282250125388!3d47.464199097679156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddbfaca09e79%3A0xc4c6ed726deabed2!2sChilli%20Fitness%20Budapest%20-%20Bik%C3%A1s%20park!5e0!3m2!1shu!2shu!4v1777549927616!5m2!1shu!2shu",
  false
);