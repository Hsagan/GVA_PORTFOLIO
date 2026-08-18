/* =========================================
   HSAGAN VIRTUAL ASSISTANT
   SIMPLE JAVASCRIPT
========================================= */


/* Mobile Navigation */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* Automatic Footer Year */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* Simple scroll animation */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.1
    }
);


document
    .querySelectorAll(".service-card, .portfolio-card, .expectation")
    .forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });