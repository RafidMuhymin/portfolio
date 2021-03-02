document.getElementById("scr").innerText = (new Date).getFullYear()

let menu = document.getElementById("hidden-menu")

hamburger.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    };
})

window.addEventListener("resize", function() {
    if (window.innerWidth > 992) {
        menu.style.display = "none"
    }
})

const slides = document.getElementsByClassName('slide')
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].className = "slide fade"
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].className = "slide fade showing"
}

function prevSlide() {
    slides[currentSlide].className = "slide fade"
    currentSlide = (currentSlide - 1) % slides.length
    if (currentSlide == -1) {
        currentSlide = slides.length - 1
    }
    slides[currentSlide].className = "slide fade showing"
}

function changeSlide(newSlide) {
    if (document.getElementById("white")) {
        document.getElementById("white").id = ""
    }
    event.target.id = "white"
    console.log(event.target)
    document.querySelector(".showing").className = "slide fade"
    slides[newSlide].className = "slide fade showing"
}