const array2 = [2,4,6,8,10,12,14,16,18,20]
const array4 = [4,8,12,16,20,24,28,32,36,40]
const array6 = [6,12,18,24,30,36,42,48,54,60]
const array8 = [8,16,24,32,40,48,56,64,72,80] 


function arrayTafel2() {
    let counter = 1
    for(let i=0; i < array2.length; i++) {
        document.write(array2[0], ' x ', counter, ' = ', array2[i], '<br>' );
        counter ++
    } 
}

function arrayTafel4() {
    let counter = 1
    for(let i=0; i < array4.length; i++) {
        document.write(array4[0], ' x ', counter, ' = ', array4[i], '<br>' );
        counter ++
    } 
}

function arrayTafel6() {
    let counter = 1
    for(let i=0; i < array6.length; i++) {
        document.write(array6[0], ' x ', counter, ' = ', array6[i], '<br>' );
        counter ++
    } 
}

function arrayTafel8() {
    let counter = 1
    for(let i=0; i < array8.length; i++) {
        document.write(array8[0], ' x ', counter, ' = ', array8[i], '<br>' );
        counter ++
    } 
}

document.write('<h2>Tafel van 2:</h2>')

arrayTafelvan2 = arrayTafel2()

document.write('<h2>Tafel van 4:</h2>')

arrayTafelvan4 = arrayTafel4()

document.write('<h2>Tafel van 6:</h2>')

arrayTafelvan6 = arrayTafel6()

document.write('<h2>Tafel van 8:</h2>')

arrayTafelvan8 = arrayTafel8()