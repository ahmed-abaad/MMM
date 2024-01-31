
//Navbar
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
const navmenu = document.getElementById('nav-inner');
let icon = document.querySelector(".fa-bars");
//PX offset when navbar activates
const offset = 10;

menBtn.addEventListener('click',() => {
    //Toggle Menu open/close
    menu.classList.toggle('menu-open');
    navmenu.classList.toggle('navbarr2');
    navbar.classList.toggle('btn-active');

});


window.addEventListener("scroll", () => {
    if(pageYOffset > offset){
        navbar.classList.add('navbar-active');
        navmenu.classList.add('navbarr1')
    } else {
        navbar.classList.remove('navbar-active');
        navmenu.classList.remove('navbarr1');
    }
});

//Read More and Read Less button on click
function show() {
  document.getElementById('readmoreid').style.display="block"
  document.getElementById('show').style.display="none"
}

function hide() {
  document.getElementById('readmoreid').style.display="none"
  document.getElementById('show').style.display="inline"
}


//Video jumps read more section on smaller devices
const videosec = document.getElementById('vsec');
window.addEventListener("resize", function() {
if (window.matchMedia("(max-width: 1200px)").matches) {
      $( "#vsec" ).insertAfter( $( ".readmore" ) );
    } else {
     $( "#vsec" ).insertAfter( $( ".video-header" ) );
    }
})


function Readmore() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
      $( "#vsec" ).insertAfter( $( ".readmore" ) );
    } else {
      $( "#vsec" ).insertAfter( $( ".video-header" ) );
    }
}



