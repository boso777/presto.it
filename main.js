let navbar = document.getElementById(`navbar`);
let links = document.querySelectorAll(`.nav-link`);
let logoNavbar = document.getElementById(`logoNavbar`);
let lightsaber = document.getElementById(`lightsaber`);
let check1 = false;
let collapse = document.getElementById(`collapse`);
let firstNumber = document.getElementById(`firstNumber`);
let secondNumber = document.getElementById(`secondNumber`);
let thirdNumber = document.getElementById(`thirdNumber`);



window.addEventListener(`scroll`, () => {
    let scrolled = window.scrollY;
    if (scrolled > 0) {
        navbar.classList.remove(`bg-black`);
        navbar.classList.add(`bg-yellow`);
        collapse.classList.remove(`bg-black`);
        collapse.classList.add(`bg-yellow`);
        navbar.style.height = `140px`;
        links.forEach((link) => {
            link.style.color = "var(--black)";
        });
        logoNavbar.src = `./media/logo black.png`;
        lightsaber.src = `./media/spada lase.png`;
    } else {
        navbar.classList.remove(`bg-yellow`);
        navbar.classList.add(`bg-black`);
        collapse.classList.remove(`bg-yellow`);
        collapse.classList.add(`bg-black`);
        navbar.style.height = `70px`;
        links.forEach((link) => {
            link.style.color = "var(--yellow)";
        });
        logoNavbar.src = `./media/logo white.png`;
        lightsaber.src = `./media/tools logo.png`;
    }
});

lightsaber.addEventListener(`click`, () => {
    if (check1 == false) {
        lightsaber.style.transform = `rotate(-90deg)`;
        check1 = true;
    } else {
        lightsaber.style.transform = `rotate(0deg)`;
        check1 = false;
    }
});

// funzione per contare

function Counter(el, n, time) {
    let counter = 0;
    
    let count = setInterval(() => {
        if (counter < n) {
            counter++;
            el.innerHTML = counter;
        } else {
            clearInterval(count);
        }
    }, time);
    
    setTimeout(()=> {
        confirm = true;
    }, 8000)
}

let confirm = true;

//dentro la variabile obsever si sta generando un oggetto di classe IntersectioObserver()

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && confirm) { 
            Counter(firstNumber, 100, 100);
            Counter(secondNumber, 200, 50);
            Counter(thirdNumber, 300, 20);
            confirm = false;
        }
    });
});

observer.observe(firstNumber);



let reviews = [
    {user: `Matteo`, description: `Fornitore ottimo, consigliato!`, rank: 5},
    {user: `Alin`, description: `Schifo`, rank: 1},
    {user: `Michael`, description: `Ottimo customer care!`, rank: 3},
    {user: `Arina`, description: `Moto non troppo perforamante`, rank: 2},
]

let swiperWrapper = document.querySelector(`.swiper-wrapper`)


reviews.forEach((review) => {
    
    let div1 = document.createElement(`div`);
    
    div1.classList.add(`swiper-slide`);
    
    div1.innerHTML = `<div class="swiper-slide">
              <div class="card-review">
              <p class="h4 text-center">${review.user}</p>
              <p class="lead text-center">${review.description}</p>
              <div class="d-flex justify-content-center stars">
                  
                </div>
              </div>
            </div>`;
    
    swiperWrapper.appendChild(div1);
});

let stars = document.querySelectorAll(`.stars`);

// <i class="fa-solid fa-star"></i>

stars.forEach((star, index) => {
    for(let i = 0; i < reviews[index].rank; i++){
        let icon = document.createElement(`i`);
        icon.classList.add(`fa-solid`, `fa-star`);
        star.appendChild(icon);
    }
    
    let difference = 5 - reviews[index].rank
    
    for(let i = 0; i < difference; i++){
        let icon = document.createElement(`i`);
        icon.classList.add(`fa-regular`, `fa-star`);
        star.appendChild(icon);
    }
})


// swipers


const swiper = new Swiper('.swiper', {
    
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    effect: "flip",
    grabCursor: true,
    
    // Optional parameters
    loop: true,
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});


