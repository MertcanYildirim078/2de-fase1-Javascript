const array1 = [1,2,3,4,5,6,7,8,9,10]
const array2 = [2,4,6,8,10,12,14,16,18,20]

function arrayOptellen() {
    
    for(let i=0; i < array1.length; i++) {
        document.write(array1[i], ' + ', array2[i], ' = ', array1[i] + array2[i], '<br>' );
    } 
}

function arrayAftrekken() {
    
    for(let i=0; i < array1.length; i++) {
        document.write(array1[i], ' - ', array2[i], ' = ', array2[i] - array1[i], '<br>' );
    } 
}

function arrayVermenigvuldigen() {
    
    for(let i=0; i < array1.length; i++) {
        document.write(array1[i], ' * ', array2[i], ' = ', array1[i] * array2[i], '<br>' );
    } 
}

function arrayDelen() {
    
    for(let i=0; i < array1.length; i++) {
        document.write(array1[i], ' / ', array2[i], ' = ', array2[i] / array1[i], '<br>' );
    } 
}

document.write('<h1>Array operatoren</h1>')

document.write('<h2>Optellen met 2 operatoren zijn:</h2>')

arrayOpgeteld = arrayOptellen()

document.write('<h2>Aftrekken met 2 operatoren zijn:</h2>')

arrayafgetrokken = arrayAftrekken()

document.write('<h2>Vermenigvuldigen met 2 operatoren zijn:</h2>')

arrayVermeigvuldigd = arrayVermenigvuldigen()

document.write('<h2>Delen met 2 operatoren zijn:</h2>')

arraygedeeld = arrayDelen()