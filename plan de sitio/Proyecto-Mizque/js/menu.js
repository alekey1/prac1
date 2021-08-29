const menu = document.querySelector('.menuicono');
const navmenu = document.querySelector('.menu-navegacion');

console.log(navmenu)
console.log(menu)

menu.addEventListener('click', ()=>{
    navmenu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(navmenu.classList.contains('spread')
       && e.target != navmenu && e.target != menu    ){

        navmenu.classList.toggle("spread")

    }
})