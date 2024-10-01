let menuBtn = document.querySelector("#menu-btn");
let xMark = document.querySelector("#xmark");
let navLinks = document.querySelector(".nav-links");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let header = document.querySelector("header");
let heroSection1 = document.querySelector("#hero-section1")
let heroSection2 = document.querySelector("#hero-section2");
let heroSection3 = document.querySelector("#hero-section3");
let footer = document.querySelector("footer");
let navLink1 = document.querySelector("#nav-link1");
let navLink2 = document.querySelector("#nav-link2");
let navLink3 = document.querySelector("#nav-link3");
let navLink4 = document.querySelector("#nav-link4");
let helloMenu = document.querySelector(".hello-menu");


 menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.style.display = "none";
    xMark.style.display = "inherit";
    
    header.style.display = "none";
    heroSection1.style.display = "none";
    heroSection2.style.display= "none";
    heroSection3.style.display = "none";
    footer.style.display = "none";

    navLink1.addEventListener("click", () => {
        heroSection3.style.display = "inherit";
        footer.style.display = "inherit";
    })
    navLink2.addEventListener("click", () => {
        heroSection1.style.display = "inherit";
        footer.style.display = "inherit";
    })

    navLink3.addEventListener("click", () => {
        heroSection2.style.display = "inherit";
        footer.style.display = "inherit";
        navLinks.style.display = "none";
        helloMenu.addEventListener("click", () => {
            navLinks.style.display = "inherit";
        })

    })
    
    navLink4.addEventListener("click", () => {
        heroSection3.style.display = "inherit";
        footer.style.display = "inherit";
    })
    



    xMark.addEventListener("click", () => {
        navLinks.classList.remove("open")
        menuBtn.style.display = "inherit";
        xMark.style.display = "none";
        header.style.display = "inherit";
        heroSection1.style.display = "inherit";
        heroSection2.style.display = "inherit";
        heroSection3.style.display = "inherit"
        footer.style.display = "inherit";

        })
})


let logInFunction = document.querySelector("#log-in-function");
let logIn = document.querySelector("#log-in");

logIn.addEventListener("click", () => {
    body.style.backgroundColor = "lightgray";
    logInFunction.style.display = "inherit";
    nav.style.display = "none";
    header.style.display = "none";
    heroSection1.style.display = "none";
    heroSection2.style.display = "none";
    heroSection3.style.display = "none";
    footer.style.display = "none";

})


let contactForm = document.querySelector("#contact-form");
let contactBtn = document.querySelector(".contact-btn");

let webBody = document.querySelector("#web-body");
let navigation = document.querySelector("#navigation");
let headerReverse = document.querySelector("#header");
let heroSectionReverse1 = document.querySelector(".hero-section-reverse1");
let heroSectionReverse2 = document.querySelector(".hero-section-reverse2");
let herosectionReverse3 = document.querySelector(".hero-section-reverse3");
let footerReverse = document.querySelector(".footer");

contactBtn.addEventListener("click", () => {
    contactForm.style.display = "inherit";
    webBody.style.backgroundColor = "lightgrey";
    navigation.style.display = "none";
    headerReverse.style.display = "none";
    heroSectionReverse1.style.display = "none";
    heroSectionReverse2.style.display = "none";
    herosectionReverse3.style.display = "none";
    footerReverse.style.display = "none";
})
