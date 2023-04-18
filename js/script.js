// Get Element 
let homeSection = document.querySelector("#home");
let aboutSection = document.querySelector("#about");
let resumeSection = document.querySelector("#resume");
let servicesSection = document.querySelector("#services");
let skillsSection = document.querySelector("#skills");
let portfolioSection = document.querySelector("#portfolio");
let contactSection = document.querySelector("#contact");
let menu = document.querySelectorAll(".menu ul li a");
let menuButton = document.querySelectorAll(" .ul-1 li a");


window.onscroll = function () {
    if (window.scrollY >= homeSection.offsetTop - 500) {
        menu.forEach(item => item.classList.remove("active"));
        menu[0].classList.add("active");
        menuButton.forEach(item => item.classList.remove("active"));
        menuButton[0].classList.add("active");
    } 
    if (window.scrollY >= aboutSection.offsetTop - 500) {
        menu.forEach(item => item.classList.remove("active"));
        menu[1].classList.add("active");
        menuButton.forEach(item => item.classList.remove("active"));
        menuButton[1].classList.add("active");
    } 
    if (window.scrollY >= resumeSection.offsetTop - 500) {
        menu.forEach(item => item.classList.remove("active"));
        menu[2].classList.add("active");
        menuButton.forEach(item => item.classList.remove("active"));
        menuButton[2].classList.add("active");
    }
    if (window.scrollY >= servicesSection.offsetTop - 500) {
        menu.forEach(item => item.classList.remove("active"));
        menu[3].classList.add("active");
        menuButton.forEach(item => item.classList.remove("active"));
        menuButton[3].classList.add("active");
    }
    if (window.scrollY >= skillsSection.offsetTop - 500) {
        menu.forEach(item => item.classList.remove("active"));
        menu[4].classList.add("active");
        menuButton.forEach(item => item.classList.remove("active"));
        menuButton[4].classList.add("active");
    }
    if (window.scrollY >= portfolioSection.offsetTop - 500) {
        menu.forEach(item => item.classList.remove("active"));
        menu[5].classList.add("active");
        menuButton.forEach(item => item.classList.remove("active"));
        menuButton[5].classList.add("active");
    }
    if (window.scrollY >= contactSection.offsetTop - 500) {
        menu.forEach(item => item.classList.remove("active"));
        menu[6].classList.add("active");
        menuButton.forEach(item => item.classList.remove("active"));
        menuButton[6].classList.add("active");
    }
}


new WOW().init();


$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    dots: false,
    margin:10,
    nav: true,
});


let links = document.querySelectorAll(".ul-1 li a");

links.forEach(link=>{
    link.addEventListener("click",()=>{
        setTimeout(()=>{
            document.getElementById("close").click();
        },1000 / 1.5)
    })
})