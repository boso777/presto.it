fetch(`./annunci.json`).then( (response)=> response.json() ).then( (data)=>{
    
    
    let radiowrapper = document.getElementById(`radiowrapper`);
    let cardWrapper = document.getElementById(`cardWrapper`);
    
// funzione per tagliare i titoli che sono più lunghi di 13 caratteri, controlla la lenght dell'elemento string in entrata e se è maggiore di 13, ritorna solo la prima parola dato che indichiamo il separatore spazio come criterio;

    function cutSentence(string){
        if(string.length > 13){
            return string.split(` `)[0] + `...`;
        }else{
            return string   
        }
    }
    
//funzione che crea delle card con all'interno nome, categoria e prezzo di ogni annuncio, nel json (di ogni oggetto per la precisione), ogni volta che parte la funzione createAnnounce, svuota l'innerHTML del wrapper, poi per ogni elemento dell'array indicato nei parametri in entrata, gli diciamo di creare il div, riempirne l'innerHTML con la card che abbiamo creato e appenderla al padre;

    function createAnnounce(arr){
        cardWrapper.innerHTML = ``;
        arr.forEach((el, i)=>{ 
            let div = document.createElement(`div`);
            div.innerHTML = `<div class="card-custom d-flex flex-column align-items-center justify-content-evenly">
          <img src="https://picsum.photos/${300+i}" alt="imamgine casuale" class="img-fluid rounded-4 mb-2 img-card">
            <p class="h2" title="${el.name}">${cutSentence(el.name)}</p>
          <p class="h4">${el.category}</p>
          <p class="lead">${el.price}€</p>          
        </div>`
            cardWrapper.appendChild(div);
        })
    }
    
// funzione che crea un radio button per ogni categoria univoca, innanzitutto mette nella variabile categoria un clone dell'array data, che contiene solo la proprietà category di ogni oggetto, poi con il metodo from converte l'arraylike in array e con la classe set crea un oggetto di tipo set dall'array categories, (la classe set permette di filtrare un array lasciando all'interno solo elementi non univoci);
    
    function radioCreate(){
        
        let categories = data.map((obj)=> obj.category);
        
        // let uniqueCategories = [];
        
        
        // categories.forEach(category => {
            //     if( !uniqueCategories.includes(category)){
        //         uniqueCategories.push(category)
        //     }
        // });
        let uniqueCategories = Array.from(new Set (categories));
        
        uniqueCategories.forEach((category)=>{
            let div = document.createElement(`div`);
            div.innerHTML = `<div class="form-check">
                  <input class="form-check-input" type="radio" name="categories" id="${category}">
                  <label class="form-check-label" for="radioDefault1">
                    ${category}
                  </label>
                </div>`
            radiowrapper.appendChild(div)
            
        })
        
        
        
    }
    
    radioCreate();

    
    let radioButtons = document.querySelectorAll(`.form-check-input`);
    
    radioButtons.forEach((button) =>{
        button.addEventListener(`click`, ()=>{
        filterByCategory(button.id)  
        })
    })
    

    
    // funzione che data la categoria come parametro, dentro la variabile filtered, filtra dall'array data, solo gli elementi che hanno la categorya == a quella inserita nel parametro, poi richiama la funzione che crea le card, dandole come dato su cui iterare l'array filtrato.
    
    function filterByCategory(categoria){
        let filtered = data.filter((el) => el.category == categoria)
        createAnnounce(filtered);        
    }
    
    
    createAnnounce();
    
}) 



