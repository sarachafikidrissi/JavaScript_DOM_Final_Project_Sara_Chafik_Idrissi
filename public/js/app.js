//* Login Modal

let myLogin = document.querySelector(".book-btn")
let ModalContent = document.querySelector(".backdrop")

myLogin.addEventListener("click", (e) => {
    triggeredModal = myLogin.getAttribute("modal-trigger")
    if(triggeredModal === ModalContent.id){
        ModalContent.style.display = "flex"
    }

    let closeBtn = document.querySelector(".close")

    closeBtn.addEventListener("click", () => {
        ModalContent.style.display = "none"
    })

})

//* Menu Button


let menuBtn = document.querySelector(".menu-icon")
let navigation = document.querySelector(".navigation")
let menu = document.querySelector(".menu-icon")
let closeBtn = document.querySelector("#close")


menuBtn.addEventListener("click", () => {
    navigation.style.display = "flex"
    menu.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    navigation.style.display = "none"
    menu.style.display = "block"
    closeBtn.style.display = "none"
})