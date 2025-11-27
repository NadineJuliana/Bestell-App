const basketRef = document.getElementById('basketRef');
const subtotalRef = document.getElementById('subtotal');
const sumRef = document.getElementById('sum');

const basketRefMobile = document.getElementById('basketRefMobile');
const subtotalRefMobile = document.getElementById('subtotalMobile');
const sumRefMobile = document.getElementById('sumMobile');

const dialogRef = document.getElementById('orderDialog');

function renderTotalMenu() {
    renderSoupMenu();
    renderSaladMenu();
    renderCurryMenu();
    renderStreetfoodMenu();
    renderNoodlesRiceMenu();
    renderDessertsMenu();
}

function renderSoupMenu() {
    const soupsRef = document.getElementById('thaiSoupsRef');
    for (let indexSoup = 0; indexSoup < mySoups.length; indexSoup++) {
        soupsRef.innerHTML += getSoupsTemplate(indexSoup);
    }
}

function renderSaladMenu() {
    const saladsRef = document.getElementById('thaiSaladsRef');
    for (let indexSalad = 0; indexSalad < mySalads.length; indexSalad++) {
        saladsRef.innerHTML += getSaladsTemplate(indexSalad);
    }
}

function renderCurryMenu() {
    const currysRef = document.getElementById('thaiCurrysRef');
    for (let indexCurry = 0; indexCurry < myCurrys.length; indexCurry++) {
        currysRef.innerHTML += getCurrysTemplate(indexCurry);
    }
}

function renderStreetfoodMenu() {
    const streetfoodRef = document.getElementById('streetfoodRef');
    for (let indexStreetfood = 0; indexStreetfood < myStreetfoodDishes.length; indexStreetfood++) {
        streetfoodRef.innerHTML += getStreetfoodsTemplate(indexStreetfood);  
    }
}

function renderNoodlesRiceMenu() {
    const noodlericeRef = document.getElementById('noddlesRiceRef');
    for (let indexNoodleRice = 0; indexNoodleRice < myNoodleRiceDishes.length; indexNoodleRice++) {
        noodlericeRef.innerHTML += getNoddleRiceTemplate(indexNoodleRice);  
    }
}

function renderDessertsMenu() {
    const dessertsRef = document.getElementById('dessertsRef');
   for (let indexDessert = 0; indexDessert < myDesserts.length; indexDessert++) {
    dessertsRef.innerHTML += getDessertsTemplate(indexDessert);
   }
}

function renderBasketRef() {
    basketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
        basketRef.innerHTML += getBasketRefTemplate(indexBasket);
    }
    
    if (basketRefMobile) {
        basketRefMobile.innerHTML = basketRef.innerHTML;
    }
    calculateSubtotal();
}

function addSoupsToBasket(indexSoup) {
    const soupToAdd = mySoups[indexSoup];
    if (!myBasket.includes(soupToAdd)) {
        myBasket.push(soupToAdd);
    } else {
       soupToAdd.amount += 1;
    }
    renderBasketRef();  
}

function addSaladsToBasket(indexSalad) {
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

function addStreetfoodToBasket(indexStreetfood) {
    const streetfoodToAdd = myStreetfoodDishes[indexStreetfood];
    if (!myBasket.includes(streetfoodToAdd)) {
        myBasket.push(streetfoodToAdd);
    } else {
        streetfoodToAdd.amount += 1;
    }
    renderBasketRef();
}

function addNoodlerRiceToBasket(indexNoodleRice) {
    const noodleRiceToAdd = myNoodleRiceDishes[indexNoodleRice];
    if (!myBasket.includes(noodleRiceToAdd)) {
        myBasket.push(noodleRiceToAdd);
    } else {
        noodleRiceToAdd.amount += 1;
    }
    renderBasketRef();
}

function addDessertsToBasket(indexDessert) {
    const dessertToAdd = myDesserts[indexDessert];
    if (!myBasket.includes(dessertToAdd)) {
        myBasket.push(dessertToAdd);
    } else {
        dessertToAdd.amount += 1;
    }
    renderBasketRef();
}

function calculatePlusBasket(indexBasket) {
    myBasket[indexBasket].amount ++;
    renderBasketRef();  
}

function calculateMinusBasket(indexBasket) {
    if (myBasket[indexBasket].amount > 1) {
        myBasket[indexBasket].amount --;  
    } else if (myBasket[indexBasket].amount == 1)  {
        deleteFromBasket(indexBasket);
    }
    renderBasketRef();
}

function calculateSubtotal() {
    let subtotal = 0;
    for (let menu of myBasket) {
        subtotal += menu.price * menu.amount;
    }
    subtotalRef.innerHTML = getSubtotalTemplate(subtotal);
    sumRef.innerHTML = getSumTemplate(subtotal);
    
    if (subtotalRefMobile) {
        subtotalRefMobile.innerHTML = subtotalRef.innerHTML;
    } if (sumRefMobile) {
        sumRefMobile.innerHTML = sumRef.innerHTML;
    }
}

function deleteFromBasket(indexBasket) {
    myBasket.splice(indexBasket, 1);
    const basketContent = document.getElementById(`basketContent${indexBasket}`);
    basketContent.innerHTML = "";
    renderBasketRef();
    calculateSubtotal();
}

function openDialog() {
    basketRef.innerHTML = "";
    subtotalRef.innerHTML = "";
    sumRef.innerHTML = "";
    basketRefMobile.innerHTML = "";
    subtotalRefMobile.innerHTML = "";
    sumRefMobile.innerHTML = "";
    myBasket.splice(0);
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

function toggleBasketMobile() {
    let toggleBasket = document.getElementById('mobileBasket');
    if (toggleBasket.style.display === 'none'){
        toggleBasket.style.display = 'block';
    } else {
        toggleBasket.style.display = 'none';
    }
}