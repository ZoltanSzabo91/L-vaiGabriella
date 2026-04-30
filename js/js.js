//sticky

window.addEventListener("scroll", () => {
    const menu = document.querySelector(".menu");

    if (window.scrollY > 50){
        menu.classList.add("sticky-active");
    } else {
        menu.classList.remove("sticky-active");
    }
});