//Indkøbskurv:
// Vælger HTML-element via document.querySelector og tildeler det til opensShopping variablen. Åbner kurven når man kilkker//
let opensShopping = document.querySelector('.shopping');
// Knap der lukker kurven ved at tildele closeShopping et HTML-element//
let closeShopping = document.querySelector('.closeShopping');
//Tildeler list-variablen et HTML element. Viser hele kurven/listen//
let list = document.querySelector('.list');
//Repræsenterer individuelle elementer i kurven
let listCard = document.querySelector('.listCard');

let body = document.querySelector('body');
//Viser den samlede pris i kurven
let total = document.querySelector('.total');
//Viser kvantiteten af varer i kurven
let quantity = document.querySelector('.quantity');
//opensShopping=kurv-ikonet. addEventListener gør at callback-funktion udføres
opensShopping.addEventListener('click', ()=>{
    //Callback function: (når <body> er aktivt, fremhæves indkøbskurven)
    body.classList.add('active');
})
//closeShopping: X'et i indkøbskurven. 
closeShopping.addEventListener('click', ()=>{
    //callback, der lukker kurven:
    body.classList.remove('active');
})
//Liste/array over produkter, deres tilknyttede id, image, pris og navn:
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'mad1.png',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'mad1.png',
        price: 130000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'mad1.png',
        price: 220000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 4',
        image: 'mad1.png',
        price: 125000
    },
];
//initApp looper gennem 'products' array'et 
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        //Skaber et nyt <div> element for hvert produkt:
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        //Gør at HTML elementerne i kurven (Navn, billede, pris, osv.) vises:
        newDiv.innerHTML = `
            <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        //Gør at produkterne vises på interfacet:
        list.appendChild(newDiv);
    })
}
//Viser hvert produkt tilføjet til kurven i HTML'en:
initApp();
//addToCard: definition, key: Parameter
function addToCard(key){
    //Hvis key=Null, er der ingen varer i kurven
    if(listCards[key] == null){
        listCards[key] = products[key];
        //Gør at kvantiteten af produkter er = 1, når man trykker Tilføj:
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard( ){
    listCard.innerHTML = ' ';
    //Holder styr på antan varer i kurven
    let count = 0;
    //Holder styr på prisen. 0 varer = 0 kr.
    let totalPrice = 0;
    //Looper gennem listCards-array'et
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
//Laver et <li> element for hver varer der bliver tilføjet
        if(value != null){
            let newDiv = document.createElement('li');
            //Gør at <li> elementet viser billede, navn og pris på varen. Button onclick gør at pris ændres, jo flere varer man tilføjer.
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString( )}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            //Gør at produktet bliver tilføjet kurven ved at tilføje <li> til listCard-containeren
            listCard.appendChild(newDiv);
        }

    })
    //Viser den samlede pris
    total.innerText = totalPrice.toLocaleString( );
    quantity.innerText = count;
}
//Viser varer og mængden deraf
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}