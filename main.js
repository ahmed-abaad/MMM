
//Get the current year and add it into the HTML
document.querySelector(".year").innerHTML = new Date().getFullYear();


//Navbar
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
//PX offset when navbar activates
const offset = 50;

menBtn.addEventListener('click',() => {
    //Toggle Menu open/close
    menu.classList.toggle('menu-open');
});

window.addEventListener("scroll", () => {
    if(pageYOffset > offset){
        navbar.classList.add('navbar-active');
    } else {
        navbar.classList.remove('navbar-active');
    }
});

//Slider
const title = document.querySelector('.title');
const cap = document.querySelectorAll('.captions > div');
const pag = document.querySelectorAll('.pag');
const SlideNum = document.querySelector('.slide-count');
const header = document.querySelector('header');

let id = 0;

const images = [
    'Home/img/black.jpg',
    'Home/img/bg.jpg',
    'Home/img/ruto.jpg',
];

function Slider(i) {
    header.style.background = `url(${images[i]}) no-repeat center`;

    header.style.backgroundSize = "cover";

    header.style.OffsetTop = "relative";

    header.style.width = "100%";

    for(let i = 0; i < pag.length; i++) {
        pag[i].classList.remove('pag-active');
        cap[i].classList.remove('cap-active');
    };

    pag[i].classList.add('pag-active');
    cap[i].classList.add('cap-active');
    
    title.innerText = cap[i].lastElementChild.innerText;
    title.classList.add('animate__fadeInUp');

    setTimeout(() => {
        title.classList.remove('animate__fadeInUp');
    }, 300);

    SlideNum.innerHTML = `0${i+1}/<sup>0${pag.length}</sup>`;
}

for(let i=0; i<pag.length; i++){
    pag[i].addEventListener('click',() => {
        Slider(i);
        id = i;
        stopAutoSlide()
    });
}

function nextSlide(){
    id++;
    if(id > pag.length - 1 ){
        id = 0;
    }
    Slider(id);
}

let autoSlide = setInterval(nextSlide, 10000);

function stopAutoSlide(){
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 10000);
}

