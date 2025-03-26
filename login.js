

document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 
    let menu = document.getElementById("custom-menu");
    menu.style.top = event.pageY + "px";
    menu.style.left = event.pageX + "px";
    menu.style.display = "block";
});

document.addEventListener("click", function() {
    document.getElementById("custom-menu").style.display = "none";
});

const drkltmode = document.querySelector(".drkltmode");
const sliderIcon = document.querySelector(".slider i");
const body = document.body;

if (localStorage.getItem("theme") === "on") {
    body.classList.add("on");
    sliderIcon.classList.replace("fa-moon", "fa-sun");
}

drkltmode.addEventListener("click", () => {
    body.classList.toggle("on");

    if (body.classList.contains("on")) {
        sliderIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "on");
    } else {
        sliderIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "off");
    }
})


function menuHide() {
    const box = document.getElementById("box");
    const menu = document.getElementById("menu");

    if (window.innerWidth < 600) {
        box.addEventListener("mouseenter", () => {
            menu.style.display = "none";
        })

        box.addEventListener("mouseleave", () => {
            menu.style.display = "block";
        })
    } else {
        menu.style.display = "block"
    }
}

menuHide();
window.addEventListener("resize", menuHide);
