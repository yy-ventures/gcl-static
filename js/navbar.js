const navMenu = document.querySelector(".main-menu")
const menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener("click", e => {
    e.preventDefault()
    navMenu.style.display = "block"
})
