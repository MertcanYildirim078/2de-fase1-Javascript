alleDagen = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

// Hele week hieronder

console.log('Alle dagen van de week zijn:')

for(i=0; i<7; i++) {
    let kommaOfPunt = ''
    if (i<6) {
         kommaOfPunt = ','
    }

    else {
        kommaOfPunt = '.'
    }
    
    console.log(alleDagen[i] + kommaOfPunt)
   
}

console.log('')

// Weekdagen hieronder

console.log('De werkdagen zijn:')

for(i=0; i<5; i++) {
    let kommaOfPunt = ''
    if (i<4) {
         kommaOfPunt = ','
    }

    else {
        kommaOfPunt = '.'
    }
    
    console.log(alleDagen[i] + kommaOfPunt)
   
}

console.log('')

// Weekenddagen hieronder

console.log('De weekenddagen zijn:')

for(i=5; i<7; i++) {
    let kommaOfPunt = ''
    if (i<6) {
         kommaOfPunt = ','
    }

    else {
        kommaOfPunt = '.'
    }
    
    console.log(alleDagen[i] + kommaOfPunt)
   
}

console.log('')

// Alle dagen van de week in omgekeerde volgorde hieronder

console.log('Alle dagen van de week in omgekeerde volgorde zijn:')

for(i=6; i>-1; i--) {
    let kommaOfPunt = ''
    if (i>0) {
         kommaOfPunt = ','
    }

    else {
        kommaOfPunt = '.'
    }
    
    console.log(alleDagen[i] + kommaOfPunt)
   
}

console.log('')

// De werkdagen in omgekeerde volgorde hieronder

console.log('De werkdagen in omgekeerde volgorde zijn:')

for(i=4; i>-1; i--) {
    let kommaOfPunt = ''
    if (i>0) {
         kommaOfPunt = ','
    }

    else {
        kommaOfPunt = '.'
    }
    
    console.log(alleDagen[i] + kommaOfPunt)
   
}

console.log('')

// De weekenddagen in omgekeerde volgorde hieronder

console.log('De weekenddagen in omgekeerde volgorde zijn:')

for(i=6; i>4; i--) {
    let kommaOfPunt = ''
    if (i>5) {
         kommaOfPunt = ','
    }

    else {
        kommaOfPunt = '.'
    }
    
    console.log(alleDagen[i] + kommaOfPunt)
   
}
