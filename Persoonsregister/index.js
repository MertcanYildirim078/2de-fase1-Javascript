const data = [{
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
 },
 {
    "voornaam": "Masud",
    "achternaam": "Mohammed",
    "nationaliteit": "Iraans",
    "leeftijd": 37,
    "gewicht": 79
 },
 {
    "voornaam": "Marie",
    "achternaam": "Visser",
    "nationaliteit": "Belgische",
    "leeftijd": 42,
    "gewicht": 69
 },
 {
    "voornaam": "Klaas",
    "achternaam": "Wever",
    "nationaliteit": "Nederlandse",
    "leeftijd": 73,
    "gewicht": 85
 },
 {
    "voornaam": "Bjorn",
    "achternaam": "Hakke",
    "nationaliteit": "Zweeds",
    "leeftijd": 18,
    "gewicht": 71
 },
 {
    "voornaam": "Jouke",
    "achternaam": "Dijkstra",
    "nationaliteit": "Fries",
    "leeftijd": 29,
    "gewicht": 82
 },
 {
    "voornaam": "Bo",
    "achternaam": "Wáng",
    "nationaliteit": "Chinees",
    "leeftijd": 38,
    "gewicht": 65
 }];


 var filter = document.createElement("input")
 filter.placeholder = "Filter"
 filter.id = 'myInput'

 var button = document.createElement("button")
 button.innerText = "OK"
 button.addEventListener("click", renderStuff)

 document.body.appendChild(filter)
 document.body.appendChild(button)

function renderStuff() {

   var filterValue = parseFloat(filter.value);   

   for(let i = 0; data.length; i++) {

      if (filterValue < data[i].leeftijd) {
      
      let container = document.createElement("ul");
      container.id = 'data-container';
   
      container.innerHTML =

      `<li>voornaam: ` + data[i]['voornaam'] + '</li> <br>' + `<li>achternaam: ` + data[i]['achternaam']  + '</li> <br>'
      + `<li> nationaliteit: ` + data[i]['nationaliteit']  + '</li> <br>' + `<li> leeftijd: ` + data[i]['leeftijd']  + '</li> <br>' + `<li> gewicht: ` + data[i]['gewicht'] + '</li> <br>';
      console.log(data[i].voornaam);
      document.body.appendChild(container);
      } 
   }
}

// function filterStuff(filter) {
   

//    var filteredList = data.filter(() => parseInt("leeftijd") <= filterValue); {
//         renderStuff(filteredList);
// }}

// renderStuff()