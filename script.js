let menuBtn = document.getElementById("menu-btn");
let links = document.querySelector(".header-links");

// Show header links function
menuBtn.addEventListener("click", () => {
   links.classList.toggle("show")
})