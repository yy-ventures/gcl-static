const inspireImg = document.getElementById("inspireImg")
const educateImg = document.getElementById("educateImg")
const createImg = document.getElementById("createImg")

const inspireLeft = document.getElementById("inspireLeft")
const educateRight = document.getElementById("educateRight")
const createLeft = document.getElementById("createLeft")

inspireImg.addEventListener("mouseover", e => {
    e.preventDefault()
    inspireLeft.style.opacity = "1"
})
inspireImg.addEventListener("mouseleave", e => {
    e.preventDefault()
    inspireLeft.style.opacity = "0"
})

educateImg.addEventListener("mouseover", e => {
    e.preventDefault()
    educateRight.style.opacity = "1"
})
educateImg.addEventListener("mouseleave", e => {
    e.preventDefault()
    educateRight.style.opacity = "0"
})

createImg.addEventListener("mouseover", e => {
    e.preventDefault()
    createLeft.style.opacity = "1"
})
createImg.addEventListener("mouseleave", e => {
    e.preventDefault()
    createLeft.style.opacity = "0"
})
