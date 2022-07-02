console.log("Hello World")
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euros){
    let dollar = euros * oneEuroIs.USD;
    return dollar;
}

const resultado = fromEuroToDollar(3.5);
console.log(resultado);


function fromDollarToYen (dollar){
let tipodecambio = oneEuroIs.USD / oneEuroIs.JPY;
let yen = dollar / tipodecambio;
return Number(yen.toFixed(2)); 
}

const resultado2 = fromDollarToYen(1);
console.log(resultado2);

function fromYenToPound (yen){
    let tipodecambio2 = oneEuroIs.GBP / oneEuroIs.JPY
    let pound = yen * tipodecambio2;
    return Number(pound.toFixed(4)) ;
}

const resultado3 = fromYenToPound(1);
console.log(resultado3);

module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};