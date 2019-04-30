// // from data.js
// var tableData = data;

// // YOUR CODE HERE!
// From data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("#tbody");

// Getting a reference to the filter table button 
var filterBtn = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

var submit = d3.select("#filter-btn"); 

// Select the input element and get the raw HTML node.
var inputDate = d3.select("#datetime");


function loadTableData(dataRows) {
  // console.log('In Load Table Data');
  document.getElementById('table-content').innerHTML="";
  // alert('cLEARING TABLE');
  // tbody.html("");
  d3.select("tbody")
  
    .selectAll("tr")
  
    .data(dataRows)
  
    .enter()
  
    .append("tr")
  
    .html(function(d) {
  
      return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
  
              <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
  
    });
  
   
  }

loadTableData(tableData);

// 
//Clear all previuos data from UFO table
// function buildTable(tableData) {
//   tbody.html("");

// // Iterate through each UFO Sighting event, through all elements of data dictionary,
// // and build HTML UFO Sightings table
//   tableData.forEach((rec) => {

//   var row = tbody.append("tr");
// // Populate each row of UFO table
//   Object.entries(rec).forEach(([key, value]) => {
//   // populate each column for current row
//   var cell = row.append("td");      
//   cell.text(value);
// });

// })};


// var submit = d3.select("#filter-btn"); 

// // Select the input element and get the raw HTML node.
// var inputDate = d3.select("#datetime");


// User clicks the button to filter data

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value property of the input element
  var inputValue = inputDate.property("value");
  console.log("checksubmit1")
  console.log(inputValue);
  console.log("checksubmit2")

  // Create Filtered dataset based on InputValue entered by user
  if (inputValue) {
  var filterdata = tableData.filter(onerec => onerec.datetime === inputValue);}
  console.log('Filtering Data');
  console.log(filterdata);
 
  // Build new UFO Table with the filtered subset of UFO Sighting data
  // buildTable(filterdata);
  tbody.html("");
  loadTableData(filterdata);
});

// loadTableData(tableData);
