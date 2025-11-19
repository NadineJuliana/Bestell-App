const totalMenuRef = document.getElementById('menu');
const soupsRef = document.getElementById('thaiSoupsRef');
const saladsRef = document.getElementById('thaiSaladsRef');
const currysRef = document.getElementById('thaiCurrysRef');
const streetfoodRef = document.getElementById('streetfoodRef');
const noodlericeRef = document.getElementById('noddlesRiceRef');
const dessertsRef = document.getElementById('dessertsRef');
const totalBasket = document.getElementById('basket');
const basketRef = document.getElementById('basketRef');
const amountRef = document.getElementById('amountRef');


function renderTotalMenu() {
    renderSoupMenu();
    renderSaladMenu();
    renderCurryMenu();
    renderStreetfoodMenu();
    renderNoodlesRiceMenu();
    renderDessertsMenu();
    renderBasket();
}

function renderSoupMenu(){
    for (let j = 0; j < mySoups.length; j++) {
        soupsRef.innerHTML += getSoupsTemplate(j);
    }
}

function renderSaladMenu(){
    for (let k = 0; k < mySalads.length; k++) {
        saladsRef.innerHTML += getSaladsTemplate(k);
    }
}

function renderCurryMenu(){
    for (let l = 0; l < myCurrys.length; l++) {
        currysRef.innerHTML += getCurrysTemplate(l);
    }
}

function renderStreetfoodMenu(){
    for (let m = 0; m < myStreetfoodDishes.length; m++) {
        streetfoodRef.innerHTML += getStreetfoodsTemplate(m);
        
    }
}

function renderNoodlesRiceMenu() {
    for (let n = 0; n < myNoodleRiceDishes.length; n++) {
        noodlericeRef.innerHTML += getNoddleRiceTemplate(n);
        
    }
}

function renderDessertsMenu(){
   for (let o = 0; o < myDesserts.length; o++) {
    dessertsRef.innerHTML += getDessertsTemplate(o);
    
   }
}

function renderBasket(){
    totalBasket.innerHTML += getBasketTemplate();
}