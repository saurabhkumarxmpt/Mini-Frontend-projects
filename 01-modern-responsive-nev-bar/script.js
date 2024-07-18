function opensearchbox() {
    document.getElementById("search_box").style.display="block";
}

function closesearchbox() {
    document.getElementById("search_box").style.display="none";
}
window.onload=function(){
    document.querySelector(".fa-magnifying-glass").onclick=opensearchbox;
    document.querySelector(".fa-xmark").onclick=closesearchbox;
}

let open_menu=document.querySelector('.fa-bars');
let menu_section=document.getElementById('menu');
open_menu.addEventListener('click',function(){
    if(menu_section.style.display=="none"){
        menu_section.style.display="block";
    }
    else{
        menu_section.style.display="none";
    }
})