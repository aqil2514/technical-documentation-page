const menu = document.querySelector('.menu');
const drMenu = document.querySelector('.dr-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('menu-active');
    drMenu.classList.toggle('dr-menu-active');
})

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !drMenu.contains(e.target)){
        menu.classList.remove('menu-active');
        drMenu.classList.remove('dr-menu-active');
    }
})