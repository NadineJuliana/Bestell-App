function getSoupsTemplate(){
    return ` 
    <h3>${mySoups[].name}</h3>
    <button>Hinzufügen</button>
    <p>${mySoups[].description}</p>
    <p>${mySoups[].incredients}</p>
    <p>${mySoups[].price} €</p>
    `
}

function getSaladsTemplate(){
    return `
    <h3>${mySalads[].name}</h3>
    <button>Hinzufügen</button>
    <p>${mySalads[].description}</p>
    <p>${mySalads[].incredients}</p>
    <p>${mySalads[].price} €</p>`
}

function getCurrysTemplate(){
    return `
    <h3>${myCurrys[].name}</h3>
    <button>Hinzufügen</button>
    <p>${myCurrys[].description}</p>
    <p>${myCurrys[].incredients}</p>
    <p>${myCurrys[].price} €</p>
    `
}

function getStreetfoodsTemplate(){
    return `
    <h3>${myStreetfoodDishes[].name}</h3>
    <button>Hinzufügen</button>
    <p>${myStreetfoodDishes[].description}</p>
    <p>${myStreetfoodDishes[].incredients}</p>
    <p>${myStreetfoodDishes[].price} €</p>
    `
}

function getNoddleRiceTemplate(){
    return `
    <h3>${myNoodleRiceDishes[].name}</h3>
    <button>Hinzufügen</button>
    <p>${myNoodleRiceDishes[].description}</p>
    <p>${myNoodleRiceDishes[].incredients}</p>
    <p>${myNoodleRiceDishes[].price} €</p>
    `
}

function getDessertsTemplate(){
    return `
    <h3>${myDesserts[].name}</h3>
    <button>Hinzufügen</button>
    <p>${myDesserts[].description}</p>
    <p>${myDesserts[].incredients}</p>
    <p>${myDesserts[].price} €</p>
    `
}