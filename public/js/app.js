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