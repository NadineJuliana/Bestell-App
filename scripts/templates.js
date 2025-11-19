function getSoupsTemplate(j){
    return ` 
    <h3>${mySoups[j].name}</h3>
    <button>Hinzufügen</button>
    <p>${mySoups[j].description}</p>
    <p>${mySoups[j].incredients}</p>
    <p>${mySoups[j].price} €</p>
    `
}

function getSaladsTemplate(k){
    return `
    <h3>${mySalads[k].name}</h3>
    <button>Hinzufügen</button>
    <p>${mySalads[k].description}</p>
    <p>${mySalads[k].incredients}</p>
    <p>${mySalads[k].price} €</p>`
}

function getCurrysTemplate(l){
    return `
    <h3>${myCurrys[l].name}</h3>
    <button>Hinzufügen</button>
    <p>${myCurrys[l].description}</p>
    <p>${myCurrys[l].incredients}</p>
    <p>${myCurrys[l].price} €</p>
    `
}

function getStreetfoodsTemplate(m){
    return `
    <h3>${myStreetfoodDishes[m].name}</h3>
    <button>Hinzufügen</button>
    <p>${myStreetfoodDishes[m].description}</p>
    <p>${myStreetfoodDishes[m].incredients}</p>
    <p>${myStreetfoodDishes[m].price} €</p>
    `
}

function getNoddleRiceTemplate(n){
    return `
    <h3>${myNoodleRiceDishes[n].name}</h3>
    <button>Hinzufügen</button>
    <p>${myNoodleRiceDishes[n].description}</p>
    <p>${myNoodleRiceDishes[n].incredients}</p>
    <p>${myNoodleRiceDishes[n].price} €</p>
    `
}

function getDessertsTemplate(o){
    return `
    <h3>${myDesserts[o].name}</h3>
    <button>Hinzufügen</button>
    <p>${myDesserts[o].description}</p>
    <p>${myDesserts[o].incredients}</p>
    <p>${myDesserts[o].price} €</p>
    `
}

function getBasketTemplate(){
    return`
    <div class="basket_content" id="basketRef">
    
    </div>
    <div class="amount_content" id="amountRef">
        <table>
            <tr>
                <th>Zwischensumme</th>
                <td>€</td>
            </tr>
            <tr>
                <th>Lieferkosten</th>
                <td>5€</td>
            </tr>

            <tr>
                <th><b>Gesamt</b></th>
                <td><b>€</b></td>
            </tr>
        </table>
    </div>
    `
}