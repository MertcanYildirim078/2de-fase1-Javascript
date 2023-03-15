document.write('<h1> - = - = - = - = - = - Papi Gelato - = - = - = - = - = - </h1>')

var smakenBijhouder = {Aardbei:0, Chocolade:0, Mint:0, Vanille:0}

var alleKostenBijhouder = {totaleKosten: 0, kostenToppingen: 0, kostenBolletjes: 0 }

var prijzen = {hoorntje: 1.25, bakje: 0.75, bolletje: 1.15, liter: 11.50}

var toppingsPrijzen = {Slagroom:0.55, Sprinkels:0.35, CaramelSaus:0.70}

function berekenBedragen(hoornOfBakje,toppingsVermenigvuldiger,toppingsVragen) {

    let berekenAardbei = smakenBijhouder.Aardbei * prijzen.bolletje;
    let berekenChocolade = smakenBijhouder.Chocolade * prijzen.bolletje;
    let berekenMint = smakenBijhouder.Mint * prijzen.bolletje;
    let berekenVanille = smakenBijhouder.Vanille * prijzen.bolletje;

    let totaleBedragBolletjes = berekenAardbei + berekenChocolade + berekenMint + berekenVanille;

    if (hoornOfBakje == 1) {
        totaleBedragBolletjes += prijzen.hoorntje;
    }

    else {
        totaleBedragBolletjes += prijzen.bakje
    }

    if(toppingsVragen == 'b' || toppingsVragen == 'B') {
        totaleBedragBolletjes += toppingsPrijzen.Slagroom * toppingsVermenigvuldiger
    }

        else if(toppingsVragen == 'c' || toppingsVragen == 'C') {
            totaleBedragBolletjes += toppingsPrijzen.Sprinkels * toppingsVermenigvuldiger
        }

            else if(toppingsVragen == 'd' || toppingsVragen == 'D') {
                totaleBedragBolletjes += toppingsPrijzen.CaramelSaus * toppingsVermenigvuldiger
            }

    return totaleBedragBolletjes.toFixed(2);

}


function bonAantonenParticulier(totaleBedragBolletjes, hoornOfBakje) {

        document.write('Prijs per bolletje: €', prijzen.bolletje, '<br> <br>')

        if(smakenBijhouder.Aardbei > 0) {
            document.write('Aardbei bolletje(s): ', smakenBijhouder.Aardbei, '<br>')
        }

        if(smakenBijhouder.Chocolade > 0) {
            document.write('Chocolade bolletje(s): ', smakenBijhouder.Chocolade,'<br>')
        }

        if(smakenBijhouder.Mint > 0) {
            document.write('Mint bolletje(s): ', smakenBijhouder.Mint,'<br>')
        }

        if(smakenBijhouder.Vanille > 0) {
            document.write('Vanille bolletje(s): ', smakenBijhouder.Vanille, '<br>')
        }

        if(hoornOfBakje == 1) {
            document.write('Hoorntje: €', prijzen.hoorntje, '<br>')
        }

        if(hoornOfBakje == 2) {
            document.write('Bakje: €', prijzen.bakje, '<br>')
        }

        if(alleKostenBijhouder.kostenToppingen > 0) {
            document.write('Toppingen: €', alleKostenBijhouder.kostenToppingen, '<br>')
        }

        document.write('<br>','Totaal: €', totaleBedragBolletjes, '<br>')
}

function particulierPad() {
    let stopBolletjesVragen = 0

    while(stopBolletjesVragen == 0) {
            let hoeveelBolletjes = parseInt(prompt('Hoeveel bolletjes wilt u?'))

            if (hoeveelBolletjes <= 3){
                let stopBakjeHoorntje = 0
                
                while(stopBakjeHoorntje == 0) {
                    var hoornOfBakje = parseInt(prompt('Wilt u de bolletjes in een hoorntje(1) of bakje(2)?'))
                    if(hoornOfBakje == 1 || hoornOfBakje == 2) {
                        stopBakjeHoorntje = 1
                    }
                        else {
                            alert('Ik begrijp u niet')
                        }
                }
                stopBolletjesVragen = 1

            }
            else if (hoeveelBolletjes >= 4 && hoeveelBolletjes <= 8) {
                var hoornOfBakje = 2
                stopBolletjesVragen = 1
            }

                else {
                    alert('Zulke grote bakken hebben we niet!')
                    stopBolletjesVragen = 0
                }

        for (let i = 1; i <= hoeveelBolletjes; i++) {
            let stopSmaak = 0
            while (stopSmaak == 0) {
                    let vragensmaken = prompt('Welke smaak wilt u voor bolletje ' + i + '?' + 
                                            ' Aardbei(A), Chocolade(C), Munt(M) of Vanille(V)?')
                    if (vragensmaken == 'a' || vragensmaken == 'A') { 
                        smakenBijhouder.Aardbei = [parseInt(smakenBijhouder.Aardbei) + 1]
                        stopSmaak = 1
                    }
                        else if (vragensmaken == 'c' || vragensmaken == 'C') {
                            smakenBijhouder.Chocolade = [parseInt(smakenBijhouder.Chocolade) + 1]
                            stopSmaak = 1
                        }
                            else if (vragensmaken == 'm' || vragensmaken == 'M') {
                                smakenBijhouder.Mint = [parseInt(smakenBijhouder.Mint) + 1]
                                stopSmaak = 1
                            }
                                else if (vragensmaken == 'v' || vragensmaken == 'V') {
                                    smakenBijhouder.Vanille = [parseInt(smakenBijhouder.Vanille) + 1]
                                    stopSmaak = 1
                                }
                                    else{
                                        alert('Ik begrijp u niet')
                                        stopSmaak = 0
                                    }
                }
        }
        let stopToppings = 0
        let toppingsVermenigvuldiger = 0

        while (stopToppings == 0) {
            var toppingsVragen = prompt('Wat voor topping wilt u: Geen(A), Slagroom(B), Sprinkels(C) of Caramel Saus(D)?')

            if(toppingsVragen == 'a' || toppingsVragen == 'A') {
                stopToppings = 1
            }
                else if (toppingsVragen == 'b' || toppingsVragen == 'B') {
                    alleKostenBijhouder.kostenToppingen = [parseInt(alleKostenBijhouder.kostenToppingen) + toppingsPrijzen.Slagroom]
                    toppingsVermenigvuldiger += 1
                    stopToppings = 1
                }
                    else if (toppingsVragen == 'c' || toppingsVragen == 'C') {
                        alleKostenBijhouder.kostenToppingen = [parseInt(alleKostenBijhouder.kostenToppingen) + toppingsPrijzen.Sprinkels]
                        toppingsVermenigvuldiger += 1
                        stopToppings = 1
                    }
                        else if (toppingsVragen == 'd' || toppingsVragen == 'D') {
                            alleKostenBijhouder.kostenToppingen = [parseInt(alleKostenBijhouder.kostenToppingen) + toppingsPrijzen.CaramelSaus]
                            toppingsVermenigvuldiger += 1
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
                totaleBedragBolletjes = berekenBedragen(hoornOfBakje,toppingsVermenigvuldiger,toppingsVragen)
                bonAantonenParticulier(totaleBedragBolletjes, hoornOfBakje)
                stopVerderVragen = 1
            }
                else if (wiltUVerder == 'j' || wiltUVerder == 'J') {
                    stopBolletjesVragen = 1
                    stopVerderVragen = 1
                }
                    else {
                        alert('Ik begrijp u niet')
                        stopVerderVragen = 0
                    }
        }
    }
}

function Main() { 

particulierPad()

}

Main()