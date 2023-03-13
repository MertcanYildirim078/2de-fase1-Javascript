document.write('<h1> - = - = - = - = - = - Papi Gelato - = - = - = - = - = - </h1>')

var smakenBijhouder = {Aardbei:0, Chocolade:0, Mint:0, Vanille:0}

var alleKostenBijhouder = {totaleKosten: 0, kostenToppingen: 0, kostenBolletjes: 0 }

var prijzen = {hoorntje: 1.25, bakje: 0.75, bolletje: 1.15}

var toppingsPrijzen = {Slagroom:0.55, Sprinkels:0.35, CaramelSaus:0.70}

function vragenPartOfZake() {
    let stop = 1
    let keuzePartOfZakelijk = ''

    while(stop == 1) {
        let partOfZakelijk = parseInt(prompt('Particulier(1) of Zakelijk(2)?'));

        if (partOfZakelijk == 1) {
            stop = 0;
            keuzePartOfZakelijk = 'particulier';
        }

            else if(partOfZakelijk == 2) {
                stop = 0;
                keuzePartOfZakelijk = 'zakelijk';
            }

                else {
                    alert('Ik begrijp u niet')
                    stop = 1;
                };
        }

        return keuzePartOfZakelijk;

}

function bonAantonen() {
    document.write(
        'Aardbei: ', smakenBijhouder.Aardbei, '<br>',
        'Chocolade: ', smakenBijhouder.Chocolade,'<br>',
        'Mint: ', smakenBijhouder.Mint,'<br>',
        'Vanille: ', smakenBijhouder.Vanille);
}

function particulierPad() {
    let stopBolletjesVragen = 1

    while(stopBolletjesVragen == 1) {
            let hoeveelBolletjes = parseInt(prompt('Hoeveel bolletjes wilt u?'))

            if (hoeveelBolletjes <= 3){
                let stopBakjeHoorntje = 1
                
                while(stopBakjeHoorntje == 1) {
                    var hoornOfBakje = parseInt(prompt('Wilt u de bolletjes in een hoorntje(1) of bakje(2)?'))
                    if(hoornOfBakje == 1 || hoornOfBakje == 2) {
                        stopBakjeHoorntje = 0
                    }
                        else {
                            alert('Ik begrijp u niet')
                        }
                }
                stopBolletjesVragen = 0

            }
            else if (hoeveelBolletjes >= 4 && hoeveelBolletjes <= 8) {
                var hoornOfBakje = 2
                stopBolletjesVragen = 0
            }

                else {
                    alert('Zulke grote bakken hebben we niet!')
                    stopBolletjesVragen = 1
                }

        for (let i = 1; i <= hoeveelBolletjes; i++) {
            let stopSmaak = 1
            while (stopSmaak == 1) {
                    let vragensmaken = prompt('Welke smaak wilt u voor bolletje ' + i + '?' + 
                                            ' Aardbei(A), Chocolade(C), Munt(M) of Vanille(V)?')
                    if (vragensmaken == 'a' || vragensmaken == 'A') { 
                        smakenBijhouder.Aardbei = [parseInt(smakenBijhouder.Aardbei) + 1]
                        stopSmaak = 0
                    }
                        else if (vragensmaken == 'c' || vragensmaken == 'C') {
                            smakenBijhouder.Chocolade = [parseInt(smakenBijhouder.Chocolade) + 1]
                            stopSmaak = 0
                        }
                            else if (vragensmaken == 'm' || vragensmaken == 'M') {
                                smakenBijhouder.Mint = [parseInt(smakenBijhouder.Mint) + 1]
                                stopSmaak = 0
                            }
                                else if (vragensmaken == 'v' || vragensmaken == 'V') {
                                    smakenBijhouder.Vanille = [parseInt(smakenBijhouder.Vanille) + 1]
                                    stopSmaak = 0
                                }
                                    else{
                                        alert('Ik begrijp u niet')
                                        stopSmaak = 1
                                    }
                }
        }
        let stopToppings = 0

        while (stopToppings == 0) {
            let toppingsVragen = prompt('Wat voor topping wilt u: Geen(A), Slagroom(B), Sprinkels(C) of Caramel Saus(D)?')

            if(toppingsVragen == 'a' || toppingsVragen == 'A') {
                stopToppings = 1
            }

                else if (toppingsVragen == 'b' || toppingsVragen == 'B') {
                    alleKostenBijhouder.kostenToppingen = [parseInt(alleKostenBijhouder.kostenToppingen) + toppingsPrijzen.Slagroom]
                    stopToppings = 1
                }
                    else if (toppingsVragen == 'c' || toppingsVragen == 'C') {
                        alleKostenBijhouder.kostenToppingen = [parseInt(alleKostenBijhouder.kostenToppingen) + toppingsPrijzen.Sprinkels]
                        stopToppings = 1
                    }
                        else if (toppingsVragen == 'd' || toppingsVragen == 'D') {
                            alleKostenBijhouder.kostenToppingen = [parseInt(alleKostenBijhouder.kostenToppingen) + toppingsPrijzen.CaramelSaus]
                            stopToppings = 1
                        }
                            else {
                                alert('Ik begrijp u niet')
                                stopToppings = 0
                            }
        }
        stopVerderVragen = 0
        while (stopVerderVragen == 0) {
            let wiltUVerder = prompt('Wilt u nog meer bestellen? (J/N)')

            if (wiltUVerder == 'n' || wiltUVerder == 'N') {
                bonAantonen()
                stopVerderVragen = 1
            }
                else if (wiltUVerder == 'j' || wiltUVerder == 'J') {
                    console.log('')
                    stopVerderVragen = 1
                }
                    else {
                        alert('Ik begrijp u niet')
                        stopVerderVragen = 0
                    }
        }
    }
}

function zakelijkPad() {
    let hoeveelLiters = parseInt(prompt('Hoeveel Liters wilt u?'))
}

function Main() { 
    let test = vragenPartOfZake();
    
    if (test == "particulier") {
        particulierPad()
    }
    else if (test == "zakelijk") {
        zakelijkPad()
    }
}

Main()