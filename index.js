const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 70);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}
function hover1(img){
    img.src="./images/gif1.gif"
}
function hover2(img){
    img.src="./images/gif1.png"
}
function hover5(img){
    img.src="./images/gif2.gif"
}
function hover6(img){
    img.src="./images/gif2.png"
}
function hover3(img){
    img.src="./images/gif3.gif"
}
function hover4(img){
    img.src="./images/gif3.png"
}