
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




//Highlight buttons onclick
var yourbuttons = document.querySelectorAll('.allbutton,.button');
for (var i = yourbuttons.length - 1; i >= 0; i--) {
		var currentbtn;
		yourbuttons[i].onclick=function(){
    	if(currentbtn){
    		currentbtn.classList.remove("highlight");
    	}
      this.classList.add("highlight");
      currentbtn=this;
    }
    
};

//Highlight All button onload page
document.addEventListener("DOMContentLoaded", function(event) {
    var x=document.getElementById("1").focus();
});


//Show correct categories on click button
jQuery(function() {
    jQuery(".allbutton").click(function(){
        jQuery(".single").show();
    });

    jQuery(".button").click(function(){
        jQuery(".single").hide();
        jQuery(".div"+ $(this).attr('target')).show();
    });
});