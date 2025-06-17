
function hamburger() {
    const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open");
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
    if (
        !menuToggle.contains(e.target) &&
        !mobileMenu.contains(e.target) &&
        menuToggle.classList.contains("open")
    ) {
        menuToggle.classList.remove("open");
        mobileMenu.classList.remove("open");
    }
});
}

hamburger();

function Animation(){
    gsap.from(".nav",{
        y:-100,
        duration:1,
        opacity:0,
    })
    gsap.from(".links>a",{
        y:-100,
        opacity:0,
        duration:1,
        stagger:.3,
    })
    gsap.from(".herol",{
        x:-100,
        duration:1,
        opacity:0,
    })
    gsap.from(".heror>img",{
        scale:1.2,
        opacity:0,
        duration:1.2,
    })
    gsap.from(".hehe",{
        x:-50,
        scale:.8,
        opacity:0,
        color:white,
    })
}

Animation();