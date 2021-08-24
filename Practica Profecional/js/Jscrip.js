let nav = document.getElementByIdi('mecSoc');

function menu(){

    let Desplazamiento = window.pageYOffset;

    if (Desplazamiento >= 40){
    
    nav.classList.remove('bg-dark');
    nav.clasName = (bg-dark1);
    nav.style.transition='1s';
    
    }else{
        nav.classList.remove('bg-dark1');
        nav.clasName = (bg-dark);
        nav.style.transition='1s';
    
    
    }

}

window.addEventListener('load',function(){
menu();

});

window.addEventListener('scroll',function(){
    menu();
    
    });


