
//Navbar
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
const navmenu = document.getElementById('nav-inner');

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


//Highlight buttons onclick
var btnContainer = document.getElementById("btnmenu");
var btns = btnContainer.getElementsByClassName("btn");

for(var i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.className += " active";
    })
}


//Show correct categories on click button
jQuery(function() {
    jQuery(document).ready(function(){
        jQuery('#ttt1').click(function() {
          jQuery('.single').show();
        });
    });

    jQuery(".btn").click(function(){
        jQuery(".single").hide();
        jQuery(".div"+ $(this).attr('target')).show();
    });
});


