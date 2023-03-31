//Respuesta 3
const ejemplo = document.getElementById("ejemplo");
console.log(ejemplo.innerHTML); // Muestra "Este es un párrafo de ejemplo" en la consola del navegador
            

//Respuesta4
const botons = document.getElementById("boton");
    boton.addEventListener("click", function() {
    const titulo = document.getElementById("titulo");
                titulo.textContent = "Nuevo título";
                });

//Respuesta 5
const lista = document.getElementsByTagName("li");
console.log(lista.length); // Muestra 3 en la consola del navegador


const elemento = document.querySelector("li");
console.log(elemento.innerHTML); // Muestra "Elemento 1" en la consola del navegador

//Respuesta 6
const titulo = document.getElementById("titulo1");
titulo.addEventListener("click", function() {
  alert("Haz hecho clic en el título");
});

//Respuesta 7
const button = document.getElementById("submit-button");
button.addEventListener("click", function() {
  const input = document.getElementById("input-field");
  const output = document.getElementById("output-field");
  output.textContent = input.value;
});

//Respuesta 8
function changeColor() {
    const heading = document.getElementById("my-heading");
    heading.style.color = "red";
  }
  
  const heading = document.getElementById("my-heading");
  heading.addEventListener("click", changeColor);

//Respuesta 9
function handleInput(event) {
    const input = event.target;
    const output = document.getElementById("my-output");
    output.textContent = `Has escrito: ${input.value}`;
  }
  
  const myInput = document.getElementById("my-input");
  myInput.addEventListener("input", handleInput);

// Ejercicio 1
const mousePosition = document.getElementById("mousePosition");

document.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY;
  mousePosition.innerText = `Posición del mouse: (${x}, ${y})`;
});
// Ejercicio 2
const submitBtn = document.getElementById("form1-submit");
submitBtn.addEventListener("click", function() {
    const firstName = document.getElementById("form-fname").value;
    const lastName = document.getElementById("form-lname").value;
    const fullName = firstName + " " + lastName;
    const fullnameElement = document.getElementById("fullname");
    fullnameElement.textContent = "Nombre completo: " + fullName;
});
// Ejercicio 3
document.getElementById('btn-insert-r').addEventListener('click', function() {
    const table = document.getElementById('sampleTable');
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML = "New row column 1";
    cell2.innerHTML = "New row column 2";
  });
// Ejercicio 4
const btnChange = document.getElementById('btn-change');
  btnChange.addEventListener('click', () => {
    const row = document.getElementById("row").value;
    const col = document.getElementById("col").value;
    const text = document.getElementById("text").value;

    const table = document.getElementById("myTable");
    const rowToUpdate = table.rows[row - 1];
    const cellToUpdate = rowToUpdate.cells[col - 1];
    cellToUpdate.innerHTML = text;
});
// Ejercicio 5

// Get the elements
const colorSelect = document.getElementById("colorSelect");
const btnAddColor = document.getElementById("btn-add-color");
const btnRmvColor = document.getElementById("btn-rmv-color");
        
// Define an array with colors to add to the select element
const colorsToAdd = ["Blue", "Yellow", "Orange"];
        
// Add an event listener to the Add Color button
btnAddColor.addEventListener("click", () => {
// Loop through the colors to add and add them to the select element
for (let i = 0; i < colorsToAdd.length; i++) {
    const newColorOption = document.createElement("option");
    newColorOption.text = colorsToAdd[i];
    colorSelect.add(newColorOption);
        }
        });
        
        // Add an event listener to the Remove Color button
        btnRmvColor.addEventListener("click", () => {
            // Get the index of the selected option
            const selectedIndex = colorSelect.selectedIndex;
            // Remove the selected option from the select element
            colorSelect.remove(selectedIndex);
        });

// Ejercicio 6
const imagenGato = document.getElementById('imagenGato');

    imagenGato.addEventListener('mouseenter', () => {
        const width = Math.floor(Math.random() * 301) + 300; // Generar número aleatorio entre 300 y 600
        const height = Math.floor(Math.random() * 301) + 300;

        const nuevaImagen = new Image(width, height); // Crear una nueva imagen con las dimensiones aleatorias
        nuevaImagen.src = 'http://placekitten.com/' + width + '/' + height;

        imagenGato.parentNode.replaceChild(nuevaImagen, imagenGato); // Reemplazar la imagen anterior con la nueva
    });