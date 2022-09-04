// Step 1: Declare a global empty array variable to store a list of units
let unitList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

const output = (units)

// Step 7: Finally, call the output function and pass it the list of units
fetch('json/units527076.json')
    .then(response => response.json())
    .then(units => {
        unitList = units;
        output(unitList);
    })

const showBy = (unitList) => {
    

    let filter = document.querySelector('#showBy').value;

    switch (filter) {
        case 'estakeCardenas':
            var xArray = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
            var yArray = unitList.pastResults[0];
            
            
            var y1Array =  unitList.presentResults[0];
            var y2Array = unitList.signIn[0];
            
            // Define Data 
            var data = [
            {x: xArray, y: yArray, name:"2021", type:"bar"},
            {x: xArray, y: y1Array, name:"2022", type:"bar"},
            {x: xArray, y: y2Array, name:"Ingreso FS", mode:"lines"}      
            ];
            
            // Define Layout
            var layout = {
            xaxis: { title: ""},
            yaxis: {range: [0, 300], title: "Membresía"},  
            title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
            };
            
            // Display using Plotly
            Plotly.newPlot("myPlot", data, layout);
            break;
        case 'wardCanales':
        var xArray = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
            var yArray = unitList.pastResults[1];
            
            
            var y1Array =  unitList.presentResults[1];
            var y2Array = unitList.signIn[1];
            
            // Define Data 
            var data = [
            {x: xArray, y: yArray, name:"2021", type:"bar"},
            {x: xArray, y: y1Array, name:"2022", type:"bar"},
            {x: xArray, y: y2Array, name:"Ingreso FS", mode:"lines"}      
            ];
            
            // Define Layout
            var layout = {
            xaxis: { title: ""},
            yaxis: {range: [0, 300], title: "Membresía"},  
            title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
            };
            
            // Display using Plotly
            Plotly.newPlot("myPlot", data, layout);
            break;
    }
}


