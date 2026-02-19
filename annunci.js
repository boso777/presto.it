fetch(`./annunci.json`)
.then((response) => response.json())
.then((data) => {
  data.sort((a, b) => a.price - b.price);
  
  let radiowrapper = document.getElementById(`radiowrapper`);
  let cardWrapper = document.getElementById(`cardWrapper`);
  let priceInput = document.getElementById(`priceInput`);
  let priceValue = document.getElementById(`priceValue`);
  let wordInput = document.getElementById(`wordInput`);
  
  // funzione per tagliare i titoli che sono più lunghi di 13 caratteri, controlla la lenght dell'elemento string in entrata e se è maggiore di 13, ritorna solo la prima parola dato che indichiamo il separatore spazio come criterio;
  
  function cutSentence(string) {
    if (string.length > 13) {
      return string.split(` `)[0] + `...`;
    } else {
      return string;
    }
  }
  
  //funzione che crea delle card con all'interno nome, categoria e prezzo di ogni annuncio, nel json (di ogni oggetto per la precisione), ogni volta che parte la funzione createAnnounce, svuota l'innerHTML del wrapper, poi per ogni elemento dell'array indicato nei parametri in entrata, gli diciamo di creare il div, riempirne l'innerHTML con la card che abbiamo creato e appenderla al padre;
  
  function createAnnounce(arr) {
    cardWrapper.innerHTML = ``;
    arr.forEach((el, i) => {
      let div = document.createElement(`div`);
      div.innerHTML = `<div class="card-custom d-flex flex-column align-items-center justify-content-evenly">
          <img src="https://picsum.photos/${300 + i}" alt="imamgine casuale" class="img-fluid rounded-4 mb-2 img-card">
            <p class="h2" title="${el.name}">${cutSentence(el.name)}</p>
          <p class="h4">${el.category}</p>
          <p class="lead">${el.price}€</p>          
        </div>`;
      cardWrapper.appendChild(div);
    });
  }
  
  // funzione che crea un radio button per ogni categoria univoca, innanzitutto mette nella variabile categoria un clone dell'array data, che contiene solo la proprietà category di ogni oggetto, poi con il metodo from converte l'arraylike in array e con la classe set crea un oggetto di tipo set dall'array categories, (la classe set permette di filtrare un array lasciando all'interno solo elementi non univoci);
  
  function radioCreate() {
    let categories = data.map((obj) => obj.category);
    
    // let uniqueCategories = [];
    
    // categories.forEach(category => {
      //     if( !uniqueCategories.includes(category)){
    //         uniqueCategories.push(category)
    //     }
    // });
    let uniqueCategories = Array.from(new Set(categories));
    
    uniqueCategories.forEach((category) => {
      let div = document.createElement(`div`);
      div.innerHTML = `<div class="form-check">
                  <input class="form-check-input" type="radio" name="categories" id="${category}">
                  <label class="form-check-label" for="radioDefault1">
                    ${category}
                  </label>
                </div>`;
      radiowrapper.appendChild(div);
    });
  }
  
  radioCreate();
  
  let radioButtons = document.querySelectorAll(`.form-check-input`);
  
  //per ogni radio button al click su di esso, lancia la funzione filterByCategory;
  radioButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
      //lancia ad ogni click anche set price input, per stampare il prezzo dell'oggetto più alto nella categoria selezionata dal radio button
      setPriceInput();
      globalFilter();
      
    });
  });
  
  // funzione che data la categoria come parametro, dentro la variabile filtered, filtra dall'array data, solo gli elementi che hanno la categorya == a quella inserita nel parametro, poi richiama la funzione che crea le card, dandole come dato su cui iterare l'array filtrato.
  
  function setPriceInput() {
    //dopo aver catturato l'input voglio settare come proprietà max dello stesso il valore più altro fra i price di ogni annuncio del json per farlo avrò bisogno di un array con solo i prezzi, lo ordino in maniera decrescente e prendo l'elemento con il valore più alto
    
    let prices = filterByCategory(data).map((el) => +el.price);
    prices.sort((a, b) => b - a);
    let maxprices = Math.ceil(prices[0]);
    priceInput.max = maxprices;
    priceInput.value = maxprices;
    priceValue.innerHTML = maxprices;
  }
  
  function filterByCategory(array) {
    //cattura i radio buttons
    let radioButtons = document.querySelectorAll(`.form-check-input`);
    // transforma arraylike in array poi lo filtra restituendo il primo elemento con proprietà checked == true
    let categoria = Array.from(radioButtons).find((el) => el.checked).id;
    
    if (categoria != `All`) {
      let filtered = array.filter((el) => el.category == categoria);
      return filtered;
    } else {
      return data
    }
  }
  
  function filterByPrice(array) {
    let filtered = array.filter( (annuncio) => +annuncio.price <= priceInput.value );
    
    
    
    return filtered;
  }
  
  function filterByWord(array) {
    let filtered = array.filter((annuncio) =>
      annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()),
  );
  return filtered
}

priceInput.addEventListener(`input`, () => {
  priceValue.innerHTML = priceInput.value;
  globalFilter();
});

wordInput.addEventListener(`input`, () => {
  globalFilter()
});

createAnnounce(data);

setPriceInput();

//abbiamo bisogno che ad ogni evento scattino tutte e tre le funzioni di filtro ma non siano applicate tutte e tre su array data, bensi siano concatenate ed ognuna filtri il risultato della funzione di filtro precedente;

function globalFilter() {
  let filteredByCategory = filterByCategory(data); // array filtrato per categ
  let filteredByPrice = filterByPrice(filteredByCategory); // array filtrato per cat e prezzo
  let filteredByWord = filterByWord(filteredByPrice); // array filtrato per categoria , prezzo e parola
  
  createAnnounce(filteredByWord);
}
});
