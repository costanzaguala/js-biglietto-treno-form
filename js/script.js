
const userName = document.getElementById('firstnamelastname'); 

// Quanti km deve fare il cliente?

const km = document.getElementById('km');
console.log ('km', km, typeof km);

// Quanti hanni ha il cliente?

const age = document.getElementById('age');
console.log ('age', age, typeof age);

// button

const calcButton = document.getElementById('calc');
console.log ('calcButton', calcButton, typeof calcButton); 



calcButton.addEventListener('click', function() {

    console.log('km.value', km.value, typeof km.value);
    console.log('age.value', age.value, typeof age.value);

    const kmNumber = parseInt(km.value);
    const ageNumber = parseInt(age.value);

    let discount20 = ('Biglietto under 18');
    let discount40 = ('Biglietto over 65');
    let nodiscount = ('Biglietto Standard');


    let price =(kmNumber * 0.21);
    console.log('price', price, typeof price);



    if (ageNumber < 18) {
        price *= 0.8;
        const discountType = document.querySelector('#discount-type');
        discountType.innerHTML = discount20;

    }

    else if (ageNumber > 65) {
        price *= 0.6;
        const discountType = document.querySelector('#discount-type');
        discountType.innerHTML = discount40;
    }

    else if (ageNumber >= 65 <= 18) {
        const discountType = document.querySelector('#discount-type');
        discountType.innerHTML = nodiscount;
    }

    const resultContainer = document.querySelector('#result-container');
    console.log ('resultContainer', resultContainer, typeof resultContainer);
    
    resultContainer.innerHTML = 'Il prezzo è € ' + (price ).toFixed(2);


});
 
