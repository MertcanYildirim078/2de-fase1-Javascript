const body = document.getElementsByClassName("bgc")[0];
body.style.backgroundColor = "grey";

var Container = document.getElementById("container");

var createButton1 = document.createElement('button');
createButton1.innerText = 'button 1';
createButton1.id = 'button1'

var createButton2 = document.createElement('button');
createButton2.innerText = 'button 2';
createButton2.id = 'button2'

var createButton3 = document.createElement('button');
createButton3.innerText = 'button 3';
createButton3.id = 'button3'

Container.appendChild(createButton1);
Container.appendChild(createButton2);
Container.appendChild(createButton3);

function changeB3() {
    body.style.backgroundColor = "blue";
}

function changeB2() {
    body.style.backgroundColor = "red";
}

function changeB1() {
    body.style.backgroundColor = "green";
}

createButton3.addEventListener('click', changeB3)

createButton2.addEventListener('click', changeB2)

createButton1.addEventListener('click', changeB1)
