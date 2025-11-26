function getSoupsTemplate(indexSoup){
    return ` 
    <div class="menu_selection_ref">
    <h4>${mySoups[indexSoup].name}</h4>
    <p>${mySoups[indexSoup].description}</p>
    <p class="ingredients">${mySoups[indexSoup].ingredients}</p>
    <p>${(mySoups[indexSoup].price).toFixed(2)} €</p>
    <button onclick="addSoupsToBasket(${indexSoup})">Hinzufügen</button>
    </div>
    `
}

function getSaladsTemplate(indexSalad){
    return `
    <div class="menu_selection_ref">
    <h4>${mySalads[indexSalad].name}</h4>
    <p>${mySalads[indexSalad].description}</p>
    <p class="ingredients">${mySalads[indexSalad].ingredients}</p>
    <p>${(mySalads[indexSalad].price).toFixed(2)} €</p>
    <button onclick="addSaladsToBasket(${indexSalad})">Hinzufügen</button>
    </div>
    `
}

function getCurrysTemplate(indexCurry){
    return `
    <div class="menu_selection_ref">
    <h4>${myCurrys[indexCurry].name}</h4>
    <p>${myCurrys[indexCurry].description}</p>
    <p class="ingredients">${myCurrys[indexCurry].ingredients}</p>
    <p>${(myCurrys[indexCurry].price).toFixed(2)} €</p>
    <button onclick="addCurrysToBasket(${indexCurry})">Hinzufügen</button>
    </div>
    `
}

function getStreetfoodsTemplate(indexStreetfood){
    return `
    <div class="menu_selection_ref">
    <h4>${myStreetfoodDishes[indexStreetfood].name}</h4>
    <p>${myStreetfoodDishes[indexStreetfood].description}</p>
    <p class="ingredients">${myStreetfoodDishes[indexStreetfood].ingredients}</p>
    <p>${(myStreetfoodDishes[indexStreetfood].price).toFixed(2)} €</p>
    <button onclick="addStreetfoodToBasket(${indexStreetfood})">Hinzufügen</button>
    </div>
    `
}

function getNoddleRiceTemplate(indexNoodleRice){
    return `
    <div class="menu_selection_ref">
    <h4>${myNoodleRiceDishes[indexNoodleRice].name}</h4>
    <p>${myNoodleRiceDishes[indexNoodleRice].description}</p>
    <p class="ingredients">${myNoodleRiceDishes[indexNoodleRice].ingredients}</p>
    <p>${(myNoodleRiceDishes[indexNoodleRice].price).toFixed(2)} €</p>
    <button onclick="addNoodlerRiceToBasket(${indexNoodleRice})">Hinzufügen</button>
    </div>
    `
}

function getDessertsTemplate(indexDessert){
    return `
    <div class="menu_selection_ref">
    <h4>${myDesserts[indexDessert].name}</h4>
    <p>${myDesserts[indexDessert].description}</p>
    <p class="ingredients">${myDesserts[indexDessert].ingredients}</p>
    <p>${(myDesserts[indexDessert].price).toFixed(2)} €</p>
    <button onclick="addDessertsToBasket(${indexDessert})">Hinzufügen</button>
    </div>
    `
}

function getBasketRefTemplate(indexBasket){
    return `
    <div class="basket_calculator" id="basketContent${indexBasket}">
        <h4>${myBasket[indexBasket].name}</h4>
        <div class="basket_calculate_items">
        <button onclick="calculateMinusBasket(${indexBasket})">-</button>
        <p>${myBasket[indexBasket].amount}</p>
        <button onclick="calculatePlusBasket(${indexBasket})">+</button>
        </div>
        <p>${(myBasket[indexBasket].price * myBasket[indexBasket].amount).toFixed(2)} €</p>
        <button onclick="deleteFromBasket(${indexBasket})">Löschen</button>
    </div>
    `
}

function getSubtotalTemplate(subtotal){
    return `
    <p>Zwischensumme</p>
    <p>${subtotal.toFixed(2)} €</p>
    `
}

function getSumTemplate(subtotal){
    return `
    <p><b>Gesamt</b></p>
    <p><b>${(subtotal +5).toFixed(2)} €</b></p>
    `
}