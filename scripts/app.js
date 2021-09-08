var menuIcon = document.querySelector(".menuImage");
var closeMenuIcon = document.querySelector(".closeMenuIcon");
var navMenu = document.querySelector(".navMenu");
var navBox = document.querySelector(".nav");

menuIcon.addEventListener('click', () => {
    menuIcon.style.setProperty('display', "none");
    closeMenuIcon.style.setProperty('display', 'block');
    navMenu.style.setProperty('display', 'block');
    navBox.classList.add("navActive");
    body.style.overflow = "hidden";

})

closeMenuIcon.addEventListener('click', () => {
    menuIcon.style.setProperty('display', "block");
    closeMenuIcon.style.setProperty('display', 'none');
    navMenu.style.setProperty('display', 'none');
    navBox.classList.remove("navActive");
    body.style.overflow = "auto";
})