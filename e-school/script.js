document.getElementById("right").innerText = (new Date().getFullYear());

document.getElementById("menu").addEventListener("click", function() {
    let menu = document.getElementsByClassName("menu")[0]
    if (menu.style.display === "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    };
})