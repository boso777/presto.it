let opener = document.querySelector(`.opener`);
let teacher = [
    { name: `Matteo`, description: `Pilota e meccanico`, url: `https://picsum.photos/220`},
    { name: `Luca`, description: `Meccanico`, url: `https://picsum.photos/201`},
    { name: `Nicola`, description: `Seller`, url: `https://picsum.photos/203`},
    { name: `Davide`, description: `Customare Care`, url: `https://picsum.photos/204`},
];

let circle = document.querySelector(`.circle`);
let wrapper = document.querySelector(`.wrapper`);
let inner = document.querySelector(`.inner`);

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
        flipCard.classList.remove(`d-none`);
        opener.style.transform = `rotate(45deg)`;
        opener.style.transition = `0.5s`
        
        movedDivs.forEach((el, i) => {
            let angle = (360 * i / movedDivs.length);
            el.style.rotate = `${angle}deg`;
            el.style.transform = `translate(150px) rotate(-${angle}deg)`;
            el.style.cursor = `pointer`;
        

        })
        
        check = true;
        
    }else{
        flipCard.classList.add(`d-none`);
        opener.style.transform = `rotate(0deg)`;
        opener.style.transition = `0.5s`
        
        movedDivs.forEach((el, i) => {
            
            el.style.rotate = ``;
            el.style.transform = ``;
            
        });
        
        check = false;
    }   
})

let flipCard = document.querySelector(`.flip-card`);
let cardName = document.querySelector(`#cardName`);
let cardDescription = document.querySelector(`#cardDescription`);
let innerFace = document.querySelector(`.inner-face`);



movedDivs.forEach((el, i) => {
    el.addEventListener(`click`, () => {
        let prof = teacher[i];
        innerFace.style.backgroundImage = `url(${prof.url})`
        cardName.innerHTML = prof.name;
        cardDescription.innerHTML = prof.description;

        
    })
})

