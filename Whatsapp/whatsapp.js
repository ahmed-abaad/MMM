let btn = document.querySelector(".whatsapp_float");
let icon = document.querySelector(".fa-whatsapp");

btn.onclick = function (){
    if(icon.classList.contains("fa-whatsapp")){
        icon.classList.replace("fa-whatsapp", "fa-times");
    }else{
        icon.classList.replace("fa-times", "fa-whatsapp");
    }
}



