AOS.init();

const navbuttons = document.querySelector(".navbuttons");
const navbar = document.querySelector(".navbar");

navbuttons.addEventListener("click", function() {
    this.classList.toggle("crossxs");
});

window.addEventListener("scroll", function() {
    let getScrollY = this.window.scrollY;
    if (getScrollY >= 300) {
        navbar.classList.add("scrolls");
    } else {
        navbar.classList.remove("scrolls");
    }
});