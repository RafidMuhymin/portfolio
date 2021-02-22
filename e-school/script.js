right.innerText = (new Date().getFullYear());

let menu = document.getElementsByClassName("menu")[0]

document.getElementById('menu').addEventListener("click", function() {
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