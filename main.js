let navbar = document.getElementById(`navbar`);
let links = document.querySelectorAll(`.nav-link`);
let logoNavbar = document.getElementById(`logoNavbar`);
let lightsaber = document.getElementById(`lightsaber`);
let check1 = false;
let collapse = document.getElementById(`collapse`);

window.addEventListener(`scroll`, ()=> {
    
    let scrolled = window.scrollY;
    if(scrolled > 0){
        navbar.classList.remove(`bg-black`);
        navbar.classList.add(`bg-yellow`); 
        collapse.classList.remove(`bg-black`);
        collapse.classList.add(`bg-yellow`);
        navbar.style.height = `140px`;
        links.forEach( (link) => {
            link.style.color = 'var(--black)';  
        })
        logoNavbar.src = `./media/logo black.png`;
        lightsaber.src = `./media/spada lase.png`
        
    }else{
        
        navbar.classList.remove(`bg-yellow`);
        navbar.classList.add(`bg-black`);
        collapse.classList.remove(`bg-yellow`);
        collapse.classList.add(`bg-black`);
        navbar.style.height = `70px`;
        links.forEach( (link) => {
            link.style.color = 'var(--yellow)';  
        })
        logoNavbar.src = `./media/logo yellow.png`;
        lightsaber.src = `./media/SPADA LASER YELLOW.png`
    }
})




lightsaber.addEventListener(`click`, ()=> {
    
    if(check1 == false){
        lightsaber.style.transform = `rotate(-90deg)`
        check1 = true;
    }else{
        lightsaber.style.transform = `rotate(0deg)`
        check1 = false;    
    }
});

let counter = 0;

let interval = setInterval( ()=>{
    if(counter < 100){
        counter++
        console.log(counter)
    }else{
        console.log(`adesso mi fermo`);
        clearInterval(interval);
    }
}, 1);