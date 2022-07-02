const { sum,fromEuroToDollar,fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
  
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One usd should be 106.58 yens", function(){
    // importo la funcion desde app.js
  
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.58); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One yen should be 0.006254 pounds", function(){
    // importo la funcion desde app.js
  
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.0063); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})