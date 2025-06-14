
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