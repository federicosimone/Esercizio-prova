axios.get("https://mocki.io/v1/8da7f3a9-881b-43d4-8d32-d0bb693ce8e7").then( risposta => {
    console.log(risposta.data)
    const prodotti = risposta.data ;

    let cardsContainer = document.getElementById("cards-container") ;

    let html = "" ;

    for (let i = 0; i < prodotti.length; i++) {
        const element = prodotti[i];

        let img = element.immagine ;
        let nome = element.nome ;
        let prezzo = element.prezzo ;
        let descrizione = element.descrizone ;
        
    }









}) ;

