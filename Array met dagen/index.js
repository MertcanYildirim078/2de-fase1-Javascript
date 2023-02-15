alleDagen = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

// console.log('Alle dagen van de week zijn: '); console.log(alleDagen)

// console.log('De werkdagen zijn:')

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