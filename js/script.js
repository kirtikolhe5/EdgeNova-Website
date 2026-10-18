
document.addEventListener("DOMContentLoaded", function () {

    // Back to Top Button
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        // Show button when scrolling down
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });

        // Scroll smoothly to the top
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Close mobile navbar after clicking a link
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show") &&
                typeof bootstrap !== "undefined"
            ) {
                const collapseInstance =
                    bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

                collapseInstance.hide();
            }
        });
    });

    // Display current year in footer, if the element exists
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
