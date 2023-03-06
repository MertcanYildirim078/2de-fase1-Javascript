const piramideArray = []
const displayLenghtArray = []

function writeArray() {
    var askQuantity = prompt('Noem een getal: ')

    for(let i = 0; i <= askQuantity; i++) {
        displayLenghtArray.push(i)
    }

    document.write('<h1>Piramide aflopend</h1>')

    document.write('Array: ', displayLenghtArray, '<br>')

    for(let i = 0; i <= askQuantity; i++) {
        piramideArray.push(i)
    }

    for(let i = 0; i <= askQuantity; i++) {4
    document.write(piramideArray.join(''), '<br>')
    piramideArray.pop()
    }
}

writeArray()