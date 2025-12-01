/*axios.get("https://mocki.io/v1/460992d9-227f-49ab-a641-1760425dce09").then( risposta => {
    console.log(risposta.data)
    const prodotti = risposta.data ;*/

  const prodottiStarbucks =   [
  {
    "id": 1,
    "nome": "Espresso Frappuccinos",
    "prezzo": 4.5,
    "immagine": "https://www.starbucks.it/on/demandware.static/-/Library-Sites-StarbucksSharedLibrary/default/dw6ffa8c8c/images/staticPages/menu/Espresso_Frappuccino_Glass_1.jpg",
    "descrizione": "Espresso, latte e vaniglia con topping al caramello."
  },
  {
    "id": 2,
    "nome": "Gingerbread Frappuccinos",
    "prezzo": 5.2,
    "immagine": "https://www.starbucks.it/on/demandware.static/-/Library-Sites-StarbucksSharedLibrary/default/dw19f1fc32/images/staticPages/menu/Gingerbread_Frappuccino_Glass.jpg",
    "descrizione": "Frappuccino con cioccolato e panna montata."
  },
  {
    "id": 3,
    "nome": "Java Chip Frappuccinos",
    "prezzo": 4.9,
    "immagine": "https://www.starbucks.it/on/demandware.static/-/Library-Sites-StarbucksSharedLibrary/default/dw4e2e890e/images/staticPages/menu/Java_Chip_Frappuccino_Glass.jpg",
    "descrizione": "Caffè freddo con cioccolato bianco e latte."
  },
  {
    "id": 4,
    "nome": "Caramel Cream Frappuccinos",
    "prezzo": 4.7,
    "immagine": "https://www.starbucks.it/on/demandware.static/-/Library-Sites-StarbucksSharedLibrary/default/dw89b45f0a/images/staticPages/menu/Caramel_Cream_Frappuccino_Glass.jpg",
    "descrizione": "Latte speziato alla zucca con cannella."
  },
  {
    "id": 5,
    "nome": "Matcha Green Tea Cream Frappuccinos",
    "prezzo": 4.3,
    "immagine": "https://www.starbucks.it/on/demandware.static/-/Library-Sites-StarbucksSharedLibrary/default/dw309d8327/images/staticPages/menu/Matcha_Cream_Frappuccino_Glass.jpg",
    "descrizione": "Cold brew dolce con crema alla vaniglia."
  },
  {
    "id": 6,
    "nome": "Chai Cream Frappuccinos",
    "prezzo": 2.8,
    "immagine": "https://www.starbucks.it/on/demandware.static/-/Library-Sites-StarbucksSharedLibrary/default/dw1395448d/images/staticPages/menu/Chai_Tea_Cream_Frappuccino_Glass.jpg",
    "descrizione": "Croissant ripieno al cioccolato."
  }
] ;

    let cardsContainer = document.getElementById("cards-container") ;

    let html = "" ;

    for (let i = 0; i < prodottiStarbucks.length; i++) {
        const element = prodottiStarbucks[i];

        let img = element.immagine ;
        let nome = element.nome ;
        let prezzo = element.prezzo.toFixed(2) ;
        let descrizione = element.descrizione ;

        const card = `<div class="col-12 col-md-6 col-lg-4 d-flex ">
                    <div class="card align-content-stretch">
                        <img src="${img}" class="card-img-top img-fluid">
                        <div class="card-body">
                            <h5 class="card-title">${nome}</h5>
                            <p class="card-text">${descrizione}</p>
                            <p class="card-text fw-bold fs-4"> € ${prezzo}</p>
                            <a href="#" class="btn btn-success preferiti">Aggiungi ai preferiti</a>
                            <a href="#" class="btn btn-success ms-3"><i class="fa-solid fa-bag-shopping fs-5 justify-content-center carrello" id="cart"></i></a>
                        </div>
                    </div>
                </div>` ;
        html += card ;
    }
     cardsContainer.innerHTML= html ;

     let contatoreCuore = 0 ;
     let contatoreCart = 0 ;

     // Event delegation sul container
cardsContainer.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.classList.contains("preferiti")) {
        contatoreCuore++;
        const desireLabel = document.getElementById("desire-label");
        desireLabel.innerText = contatoreCuore;
        desireLabel.classList.remove("d-none");
    };
    if (e.target.classList.contains("carrello")) {
        contatoreCart++; 
        const cartLabel = document.getElementById("cart-label");
        cartLabel.innerText = contatoreCart;
        cartLabel.classList.remove("d-none");
    }
});

