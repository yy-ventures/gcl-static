// navbar responsive function 
const navSlide = function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //toggle Nav
    burger.addEventListener("click", function() {
        nav.classList.toggle("nav-active");

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        //burger menu
        burger.classList.toggle("toggle");
    });


}
navSlide();


// navbar hover function

const navActive = () => {
    const navParent = document.querySelector("#navMenu");
    let currentLink = document.querySelector(`#navMenu li a[href="${location.pathname}"]`);


    // adding a active class name
    currentLink.classList.add("page-active");

    // removing on hover
    const hoverPageInactive = () => {
        currentLink.classList.remove("page-active");
    }

    // adding leave hover
    const hoverPageActive = () => {
        currentLink.classList.add("page-active");
    }

    // cycle through the children elements of navbar
    for (let elem of navParent.children) {

        elem.onmouseenter = hoverPageInactive;
        elem.onmouseleave = hoverPageActive;
    }
}

navActive()
