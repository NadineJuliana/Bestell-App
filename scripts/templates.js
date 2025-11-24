function getSoupsTemplate(indexSoup){
    return ` 
    <h3>${mySoups[indexSoup].name}</h3>
    <button onclick="addSoupsToBasket(${indexSoup})">Hinzufügen</button>
    <p>${mySoups[indexSoup].description}</p>
    <p>${mySoups[indexSoup].incredients}</p>
    <p>${mySoups[indexSoup].price} €</pindexSalad
    `
}

function getSaladsTemplate(indexSalad){
    return `
    <h3>${mySalads[indexSalad].name}</h3>
    <button onclick="addSaladsToBasket(${indexSalad})">Hinzufügen</button>
    <p>${mySalads[indexSalad].description}</p>
    <p>${mySalads[indexSalad].incredients}</p>
    <p>${mySalads[indexSalad].price} €</p>`
}

function getCurrysTemplate(indexCurry){
    return `
    <h3>${myCurrys[indexCurry].name}</h3>
    <button onclick="addCurrysToBasket(${indexCurry})">Hinzufügen</button>
    <p>${myCurrys[indexCurry].description}</p>
    <p>${myCurrys[indexCurry].incredients}</p>
    <p>${myCurrys[indexCurry].price} €</p>
    `
}

function getStreetfoodsTemplate(indexStreetfood){
    return `
    <h3>${myStreetfoodDishes[indexStreetfood].name}</h3>
    <button onclick="addStreetfoodToBasket(${indexStreetfood})">Hinzufügen</button>
    <p>${myStreetfoodDishes[indexStreetfood].description}</p>
    <p>${myStreetfoodDishes[indexStreetfood].incredients}</p>
    <p>${myStreetfoodDishes[indexStreetfood].price} €</p>
    `
}

function getNoddleRiceTemplate(indexNoodleRice){
    return `
    <h3>${myNoodleRiceDishes[indexNoodleRice].name}</h3>
    <button onclick="addNoodlerRiceToBasket(${indexNoodleRice})">Hinzufügen</button>
    <p>${myNoodleRiceDishes[indexNoodleRice].description}</p>
    <p>${myNoodleRiceDishes[indexNoodleRice].incredients}</p>
    <p>${myNoodleRiceDishes[indexNoodleRice].price} €</p>
    `
}

function getDessertsTemplate(indexDessert){
    return `
    <h3>${myDesserts[indexDessert].name}</h3>
    <button onclick="addDessertsToBasket(${indexDessert})">Hinzufügen</button>
    <p>${myDesserts[indexDessert].description}</p>
    <p>${myDesserts[indexDessert].incredients}</p>
    <p>${myDesserts[indexDessert].price} €</p>
    `
}

// function getBasketTemplate(){
//     return`
    
//     <div class="amount_content" id="amountRef">
//         <table>
//             <tr>
//                 <th>Zwischensumme</th>
//                 <td>0 €</td>
//             </tr>
//             <tr>
//                 <th>Lieferkosten</th>
//                 <td>5 €</td>
//             </tr>
//             <tr>
//                 <th><b>Gesamt</b></th>
//                 <td><b>0 €</b></td>
//             </tr>
//         </table>
//     </div>
//     `
// }

function getBasketRefTemplate(indexBasket){
    return `
    <div class="basket_calculator" id="basketContent${indexBasket}">
        <h3>${myBasket[indexBasket].name}</h3>
        <button onclick="calculatePlusBasket(${indexBasket})">+</button>
        <p>${myBasket[indexBasket].amount}</p>
        <button onclick="calculateMinusBasket(${indexBasket})">-</button>
        <p>${myBasket[indexBasket].price}</p>
    </div>
    `
}

