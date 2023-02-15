function calculateFibonacci() {
    var number1 = 0
    var number2 = 1
    var number3 = 1

    for(i=0; i<10; i++) {
        number3 = number1 + number2
        console.log(number3)
        number1 = number3
        number3 = number1 + number2
        console.log(number3)
        number2 = number3
    }
}

var calculateAll = calculateFibonacci()



