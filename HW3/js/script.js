/*
Full Name: Hai Nguyen
E-mail: hain_nguyen3@student.uml.edu
Affiliation: UMass Lowell GUI Programming 1
Date: 10/30/24
Description: JavaScript for generating a dynamic multiplication table based on user input, with error handling and validation.
Reference: https://www.w3schools.com/
*/

// Function to generate the multiplication table based on input values
function generateTable() {
    const startX = parseInt(document.getElementById("startX").value);
    const endX = parseInt(document.getElementById("endX").value);
    const startY = parseInt(document.getElementById("startY").value);
    const endY = parseInt(document.getElementById("endY").value);

    // Clear previous error messages
    const errorMessage = document.getElementById("errorMessage");
    if (errorMessage) errorMessage.remove();

    // Validate input
    if (isNaN(startX) || isNaN(endX) || isNaN(startY) || isNaN(endY) ||
        startX < -50 || endX > 50 || startY < -50 || endY > 50 ||
        startX > endX || startY > endY) {
        displayError("Please enter valid numbers between -50 and 50, with minimums less than maximums.");
        return;
    }

    // Generate table content
    const table = document.getElementById("multiplicationTable");
    table.innerHTML = ""; // Clear previous table content

    // Create table header row
    let headerRow = document.createElement("tr");
    let cornerCell = document.createElement("th");
    headerRow.appendChild(cornerCell);

    for (let x = startX; x <= endX; x++) {
        let th = document.createElement("th");
        th.innerText = x;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    // Create table rows
    for (let y = startY; y <= endY; y++) {
        let row = document.createElement("tr");

        let th = document.createElement("th");
        th.innerText = y;
        row.appendChild(th);

        for (let x = startX; x <= endX; x++) {
            let td = document.createElement("td");
            td.innerText = x * y;
            row.appendChild(td);
        }
        table.appendChild(row);
    }
}

// Function to display error messages below the form
function displayError(message) {
    const error = document.createElement("div");
    error.id = "errorMessage";
    error.style.color = "red";
    error.style.marginTop = "10px";
    error.textContent = message;
    document.getElementById("tableForm").appendChild(error);
}
