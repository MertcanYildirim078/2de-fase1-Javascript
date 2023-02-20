namen=[]

document.write('<h2>De ingevoerde namen in de array zijn:</h2>')
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
  
    var askName = prompt('Voer een naam in (zeg "stop" om te stoppen):')
    namen.push(askName)

    }

for(let i = 0; i< askQuantity; i++) {
    document.write(namen[i])
    document.write('<br>')
}

for(let i = 0; i< askQuantity; i++) {
    document.write(namen[i])
    document.write('<br>')
}
