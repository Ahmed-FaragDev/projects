
var typed = new Typed("#auto-type", {
    strings: ["Developer", "Designer", "Creator"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: '|',
    showCursor: true,
});

function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("hidden");
}

function toggleAll() {
    const all = document.getElementById("dropdownAll");
    all.classList.toggle("hidden");
    const app = document.getElementById("dropdownapp");
    app.classList.remove("hidden");
    app.classList.add("block");
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
