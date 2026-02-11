let navbar = document.getElementById(`navbar`);
let links = document.querySelectorAll(`.nav-link`);
let logoNavbar = document.getElementById(`logoNavbar`);
console.dir(logoNavbar);

window.addEventListener(`scroll`, ()=> {
 
    let scrolled = window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove(`bg-black`);
        navbar.classList.add(`bg-yellow`);
        navbar.style.height = `140px`;
        links.forEach( (link) => {
            link.style.color = 'var(--black)';  
        })
        logoNavbar.src = `./media/logo black.png`;
    }else{
        navbar.classList.remove(`bg-yellow`);
        navbar.classList.add(`bg-black`);
        navbar.style.height = `70px`;
        links.forEach( (link) => {
            link.style.color = 'var(--yellow)';  
        })
        logoNavbar.src = `./media/logo yellow.png`;
    }
    
})




