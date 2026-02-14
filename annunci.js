fetch(`./annunci.json`).then( (response)=> response.json() ).then( (data)=>{
    
    
    let radiowrapper = document.getElementById(`radiowrapper`);
    let cardWrapper = document.getElementById(`cardWrapper`);

    function cutSentence(string){
        if(string.length > 13){
            return string.split(` `)[0] + `...`;
        }else{
            return string
        }
    }


    function createAnnounce(){
        data.forEach((el, i)=>{
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
    createAnnounce();
})