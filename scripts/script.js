const totalMenuRef = document.getElementById('totalmenu');
const soupsRef = document.getElementById('thaiSoupsRef');
const saladsRef = document.getElementById('thaiSaladsRef');
const currysRef = document.getElementById('thaiCurrysRef');
const streetfoodRef = document.getElementById('streetfoodRef');
const noodlericeRef = document.getElementById('noddlesRiceRef');
const dessertsRef = document.getElementById('dessertsRef');
const totalBasket = document.getElementById('basket');
const basketRef = document.getElementById('basketRef');
const amountRef = document.getElementById('amountRef');
const basketContent = document.getElementById('basketContent');

function renderTotalMenu() {
    renderSoupMenu();
    renderSaladMenu();
    renderCurryMenu();
    renderStreetfoodMenu();
    renderNoodlesRiceMenu();
    renderDessertsMenu();
    // renderBasket();
}

function renderSoupMenu(){
    for (let indexSoup = 0; indexSoup < mySoups.length; indexSoup++) {
        soupsRef.innerHTML += getSoupsTemplate(indexSoup);
    }
}

function renderSaladMenu(){
    for (let indexSalad = 0; indexSalad < mySalads.length; indexSalad++) {
        saladsRef.innerHTML += getSaladsTemplate(indexSalad);
    }
}

function renderCurryMenu(){
    for (let indexCurry = 0; indexCurry < myCurrys.length; indexCurry++) {
        currysRef.innerHTML += getCurrysTemplate(indexCurry);
    }
}

function renderStreetfoodMenu(){
    for (let indexStreetfood = 0; indexStreetfood < myStreetfoodDishes.length; indexStreetfood++) {
        streetfoodRef.innerHTML += getStreetfoodsTemplate(indexStreetfood);
        
    }
}

function renderNoodlesRiceMenu() {
    for (let indexNoodleRice = 0; indexNoodleRice < myNoodleRiceDishes.length; indexNoodleRice++) {
        noodlericeRef.innerHTML += getNoddleRiceTemplate(indexNoodleRice);
        
    }
}

function renderDessertsMenu(){
   for (let indexDessert = 0; indexDessert < myDesserts.length; indexDessert++) {
    dessertsRef.innerHTML += getDessertsTemplate(indexDessert);
    
   }
}

// function renderBasket(){
//     totalBasket.innerHTML += getBasketTemplate();
   
// }

function renderBasketRef() {
    basketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
        basketRef.innerHTML += getBasketRefTemplate(indexBasket);
        
    }
   
}

function addSoupsToBasket(indexSoup){
    const soupToAdd = mySoups[indexSoup];
    if (!myBasket.includes(soupToAdd)) {
        myBasket.push(soupToAdd);
    } else {
       soupToAdd.amount += 1;
    }
    renderBasketRef();  
}

function addSaladsToBasket(indexSalad){
    const saladToAdd = mySalads[indexSalad];
    if (!myBasket.includes(saladToAdd)) {
        myBasket.push(saladToAdd);
    } else {
        saladToAdd.amount += 1;
    }
    renderBasketRef();
}

function addCurrysToBasket(indexCurry) {
    const curryToAdd = myCurrys[indexCurry];
    if (!myBasket.includes(curryToAdd)) {
        myBasket.push(curryToAdd);
    } else {
        curryToAdd.amount += 1;
    }
    renderBasketRef();
}

function addStreetfoodToBasket(indexStreetfood){
    const streetfoodToAdd = myStreetfoodDishes[indexStreetfood];
    if (!myBasket.includes(streetfoodToAdd)) {
        myBasket.push(streetfoodToAdd);
    } else {
        streetfoodToAdd.amount += 1;
    }
    renderBasketRef();
}

function addNoodlerRiceToBasket(indexNoodleRice){
    const noodleRiceToAdd = myNoodleRiceDishes[indexNoodleRice];
    if (!myBasket.includes(noodleRiceToAdd)) {
        myBasket.push(noodleRiceToAdd);
    } else {
        noodleRiceToAdd.amount += 1;
    }
    renderBasketRef();
}

function addDessertsToBasket(indexDessert){
    const dessertToAdd = myDesserts[indexDessert];
    if (!myBasket.includes(dessertToAdd)) {
        myBasket.push(dessertToAdd);
    } else {
        dessertToAdd.amount += 1;
    }
    renderBasketRef();
}

function calculatePlusBasket(indexBasket){
    myBasket[indexBasket].amount ++;
    renderBasketRef();
    
}

function calculateMinusBasket(indexBasket){
    if (myBasket[indexBasket].amount > 1) {
        myBasket[indexBasket].amount --;
    } 
    renderBasketRef();
}