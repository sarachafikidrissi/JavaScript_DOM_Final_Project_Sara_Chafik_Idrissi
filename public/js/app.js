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


//* video

let videoSection = document.querySelector(".video-section")
let playVideo = document.querySelector("#playVideo")
let image = document.querySelector(".test")
let backdrop2 = document.querySelector(".backdrop2")

let videoClose = document.querySelector(".video-close")


playVideo.addEventListener("click", () => {
    backdrop2.style.display = "flex"
})

videoClose.addEventListener("click", () => {
    backdrop2.style.display = "none"
})

//* hero section carousel

let nextBtns = document.querySelectorAll(".next")
let previousBtns = document.querySelectorAll(".previous")
let containers = document.querySelectorAll(".carousel-container")



//* sliding function
let currentIndex = 0
const slideImage = (index, myBtn) => {

    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {

            //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna  
            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')





            //* clikit 3la previous  o ana  aslan f awel image  khasni nmchi  l image lakhra
            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                //* clikit 3la next o ana  aslan f akhir image khasni nrje3  l image lewla
                index = 0
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")


            //* hna bach n7arek l camera dyal lcarousel
            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    });


}

//* btn dyal next
nextBtns.forEach(next => {
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
});

//* btn dyal previous
previousBtns.forEach(previous => {
    previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
});


//* auto slide 
containers.forEach(container => {
    //* check wach  l element 3ando attribute auto slide   
    if (container.getAttribute("autoslide")) {
        let nextBtn = container.querySelector(".next")

        setInterval(() => {
            //* method  kanwarek  biha  3la  btn 
            nextBtn.click()
        }, 3000);
    }
});

//* indicators 

containers.forEach(container => {
    //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna  
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)

    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
});


//* About Video Javascript 