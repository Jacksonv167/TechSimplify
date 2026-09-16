// Mobile menu toggle
function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu) {
        mobileMenu.classList.toggle("active");
    }
}

// Close mobile menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {

    const mobileLinks = document.querySelectorAll("#mobileMenu a");

    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            const mobileMenu = document.getElementById("mobileMenu");

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }
        });
    });

});