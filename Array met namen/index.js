namen=[]

var stoploop = true

var askQuantity = prompt('Voer het hoeveelheid namen er zijn:')

while(stoploop){
    if(askQuantity<3){
        var askQuantity = prompt('Voer het hoeveelheid namen er zijn:')
    }
    else{
        break
    }
}

for(let i = 0; i < askQuantity; i++) {
  
    var askName = prompt('Voer een naam in:')
    namen.push(askName)

    }

document.write('<h2>De ingevoerde namen in de array zijn:</h2>')

for(let i = 0; i< askQuantity; i++) {
    document.write(namen[i])
    document.write('<br>')
}
document.write('<h2>De ingevoerde namen in de array in omgekeerde volgorde zijn:</h2>')

for(let i = askQuantity  - 1; i > -1; i--) {
    document.write(namen[i])
    document.write('<br>')
}
