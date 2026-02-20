let opener = document.querySelector(`.opener`);
let teacher = [
    { name: `Matteo`, description: `Docente frontend di hack69`, url: `https://picsum.photos/220`},
    { name: `Luca`, description: `Docente backend`, url: `https://picsum.photos/201`},
    { name: `Nicola`, description: `Docente frontend bravo`, url: `https://picsum.photos/203`},
    { name: `Davide`, description: `Docente backend bravo`, url: `https://picsum.photos/204`},
];

let circle = document.querySelector(`.circle`);
let wrapper = document.querySelector(`.wrapper`);

teacher.forEach( (el, i) => {
    let div = document.createElement(`div`);
    div.classList.add(`moved`);
    div.style.backgroundImage = `url(${el.url})`;
    circle.appendChild(div);
});

let movedDivs = document.querySelectorAll(`.moved`);

let check = false;


opener.addEventListener(`click`, ()=>{
    if (check == false) {
        
        opener.style.transform = `rotate(45deg)`;
        opener.style.transition = `0.5s`
        
        movedDivs.forEach((el, i) => {
            let angle = (360 * i / movedDivs.length);
            el.style.rotate = `${angle}deg`;
            el.style.transform = `translate(150px) rotate(-${angle}deg)`;
        })
        
        check = true;
        
    }else{
        
        opener.style.transform = `rotate(0deg)`;
        opener.style.transition = `0.5s`
        
        movedDivs.forEach((el, i) => {
            
            el.style.rotate = ``;
            el.style.transform = ``;
            
        });
        
        check = false;
    }   
})


