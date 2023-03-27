var container = document.getElementById("container");

var buttonAdder = 60

// function changeToRed() {
//     createButton.style.backgroundColor = 'red';
// }

// Create de buttons hieronder en checks voor clicks
for(let i = 1; i <= buttonAdder; i++) {

    let colorChanger = 0

    let createButton = document.createElement("button");

    createButton.innerText = i;
    createButton.style.font = 'bold';
    createButton.style.fontSize = '40px';
    createButton.style.backgroundColor = 'green';
    
    createButton.addEventListener('click', function () {

        colorChanger++

        if (colorChanger == 1) {
            createButton.style.backgroundColor = 'red'; 
        }
            else if (colorChanger == 2) {
                createButton.style.backgroundColor = 'black'; 
            }
                else {
                    container.removeChild(createButton);
                }
    });


    container.appendChild(createButton);

}