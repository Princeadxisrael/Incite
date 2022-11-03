//The onload function displays the table and improve web cookies
window.onload = function () {
  createTable();
};

function createTable() {
  //this function creates a table
  const elements = Elements.GetElements();
  const heading = Elements.GetHeading();
  const properties = Elements.GetProperties();

  //create a table
  const table = document.createElement("table");

  //Include a caption
  table.createCaption().textContent =
    " Loggers Ranking. Thank you for using Toolhub, and come 🔙 anytime!";

  //insert a row; add headings
  //document.createElement('table).insertRow().insertCell(-1).outerHTML
  const horizontalRow = table.insertRow();
  for (let title of heading) {
    horizontalRow.insertCell(-1).outerHTML = `<th>${title}</th>`;
  }

  //iterating through data; adding rows and cells for each element
  for (let element of elements) {
    //defining a variable for the table cells
    const eachCell = table.insertRow();
    for (let property of properties) {
      eachCell.insertCell(-1).innerHTML = element[property];
    }
  }

  document.getElementById("tableinsert").appendChild(table);
}
