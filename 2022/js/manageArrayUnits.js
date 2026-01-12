// This const contains the labels for the x axis, in fact, it is a const since contains the months of the year
const xArray = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

// This array of arrays contains the data for each unit: "Estaca Cárdenas México", "Barrio Cañales", "Barrio Comalcalco", "Barrio Cunduacán", "Barrio Cárdenas", "Rama Huimanguillo", "Barrio Los Reyes", "Barrio Morelos", "Barrio Paraíso", "Barrio Petrolera", "Rama Sánchez Magallanes"            
// Each unit contains 5 arrays: 2021 data, 2022 data, IS: inicio sesion FamilySearch data, RV: Recomendación vigente data, Goal data
// Each array contains 12 values, one for each month of the year
// The last element of each unit array is the name of the unit
// Example: unitList[0] is the data for "Estaca Cárdenas México"
// unitList[0][0] is the 2021 data for "Estaca Cárdenas México"
// unitList[0][1] is the 2022 data for "Estaca Cárdenas México"
// unitList[0][2] is the FamilySearch data for "Estaca Cárdenas México"
// unitList[0][3] is the Recomendación data for "Estaca Cárdenas México"
// unitList[0][4] is the Goal data for "Estaca Cárdenas México"
// unitList[0][5] is the name of the unit "Estaca Cárdenas México"
// The same structure applies for the other units
// Note: null values are used for months where data is not available
// This allows for better visualization in the graphs
// we can use this data to create a sql database where one table contains the unit names and another table contains the anual data by month for each unit 
let unitList = [
    [
        [0,0,3,5,8,10,22,26,36,57,85,98],                                       /*2021*/
        [13,30,37,48,63,86,105,113,126,136,154,165],                            /*2022*/
        [null, null, null, null, 199, 226, 272, 293, 308, 320, 333, 337],       /*IS*/
        [null, null, null, null, 520, 526, 513, 513, 513, 513, 513, 513],       /*RV*/  
        [272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272, 272],           /*goal*/  
        "Estaca Cárdenas México"
    ],
    [
        [0,0,0,0,0,0,3,3,3,3,5,6],
        [1,3,5,8,11,15,18,19,20,21,27,27],
        [null, null, null, null, 26, 30, 35, 37, 37, 38, 41, 41],
        [null, null, null, null, 52, 55, 60, 60, 60, 60, 60, 60],
        [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],      
        "Barrio Cañales"
    ],
    [
        [0,0,0,0,1,1,2,2,5,7,8,8],
        [1,1,1,2,3,3,8,9,9,9,11,11],
        [null, null, null, null, 21, 22, 27, 28, 29, 30, 31, 30],
        [null, null, null, null, 57, 59, 54, 54, 54, 54, 54, 54], 
        [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],     
        "Barrio Comalcalco"
    ],
    [
        [0,0,3,4,5,5,12,13,13,14,14,21],
        [8,10,11,11,12,21,22,22,26,27,28,29],
        [null, null, null, null, 33, 39, 43, 44, 46, 47, 50, 50],
        [null, null, null, null, 71, 70, 73, 73, 73, 73, 73, 73],  
        [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],      
        "Barrio Cunduacán"
    ],
    [
        [0,0,0,0,0,1,1,1,3,3,4,4],
        [0,0,0,0,0,1,2,3,3,3,5,3],
        [null, null, null, null, 10, 10, 13, 15, 17, 17, 19, 17],
        [null, null, null, null, 39, 40, 41, 41, 41, 41, 41, 41],
        [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],       
        "Barrio Cárdenas"
    ],
    [
        [0,0,0,0,0,0,1,1,1,3,3,3],
        [1,1,1,1,1,1,4,4,4,10,10,10],
        [null, null, null, null, 7, 7, 16, 16, 16, 17, 17, 18],
        [null, null, null, null, 26, 28, 27, 27, 27, 27, 27, 27], 
        [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],       
        "Rama Huimanguillo"
    ],
    [
        [0,0,0,0,0,0,0,2,2,3,7,8],
        [0,5,6,11,13,17,20,20,19,20,21,22],
        [10,17,18,26,26,28,31,34,35,36,37,38],
        [null, null, null, null, 32, 34, 36, 36, 36, 38, 38, 38],  
        [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],      
        "Barrio Los Reyes"
    ],
    [
        [0,0,0,1,1,1,1,2,2,15,32,32],
        [2,6,9,9,10,12,15,16,22,21,24,29],
        [null, null, null, null, 32, 39, 50, 58, 60, 62, 62, 62],
        [null, null, null, null, 79, 82, 84, 84, 84, 84, 84, 84],   
        [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],     
        "Barrio Morelos"
    ],
    [
        [0,0,0,0,0,2,2,2,7,8,10,11],
        [1,3,3,5,12,13,13,16,19,21,22,23],
        [null, null, null, null, 33, 35, 38, 39, 45, 50, 51, 51],
        [null, null, null, null, 76, 78, 79, 79, 79, 79, 79, 79],   
        [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],     
        "Barrio Paraíso"
    ],
    [
        [0,0,0,0,0,0,0,0,0,1,2,5],
        [0,1,1,1,1,3,3,4,4,4,5,10],
        [null, null, null, null, 11, 15, 16, 19, 20, 20, 20, 25],
        [null, null, null, null, 41, 40, 43, 43, 43, 43, 43, 43],   
        [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],     
        "Barrio Petrolera"
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1],
        [0,0,0,0,0,1,3,3,3,3,5,5],
        [null, null, null, null, 21, 20, 23, 23, 23, 23, 23, 23],  
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],      
        "Rama Sánchez Magallanes"
    ]                
    ]

// This array of arrays contains the monthly data for each unit: "Estaca Cárdenas México", "Barrio Cañales", "Barrio Comalcalco", "Barrio Cunduacán", "Barrio Cárdenas", "Rama Huimanguillo", "Barrio Los Reyes", "Barrio Morelos", "Barrio Paraíso", "Barrio Petrolera", "Rama Sánchez Magallanes"            
// Each unit contains 12 arrays: one for each month of the year
// Each array contains 5 values: Total, Adults, Youth, New Members, YSA
// Example: unitGroupList[0] is the data for "Estaca Cárdenas México"
// unitGroupList[0][0] is the data for January for "Estaca Cárdenas México"
// unitGroupList[0][0][0] is the Total for January for "Estaca Cárdenas México" and is the same for the current month by year in the unitList array
// unitGroupList[0][0][1] is the Adults for January for "Estaca Cárdenas México"
// unitGroupList[0][0][2] is the Youth for January for "Estaca Cárdenas México"
// unitGroupList[0][0][3] is the New Members for January for "Estaca Cárdenas México"
// unitGroupList[0][0][4] is the YSA for January for "Estaca Cárdenas México"
// The same structure applies for the other months and other units
// Note: null values are used for months where data is not available
let unitGroupList = [
[                               /* Estaca Cárdenas México */
    [null,null,null,null,null], /* Ene: Total, Adults, Youth, New Members, YSA */
    [null,null,null,null,null], /* Feb: Total, Adults, Youth, New Members, YSA */
    [null,null,null,null,null], /* Mar: Total, Adults, Youth, New Members, YSA */
    [null,null,null,null,null], /* Abr: Total, Adults, Youth, New Members, YSA */
    [63,58,5,4,19],             /* May: Total, Adults, Youth, New Members, YSA */
    [86,78,8,9,22],             /* Jun: Total, Adults, Youth, New Members, YSA */
    [105,93,12,11,24],          /* Jul: Total, Adults, Youth, New Members, YSA */
    [113,98,15,10,26],          /* Ago: Total, Adults, Youth, New Members, YSA */
    [126,106,20,9,30],          /* Sep: Total, Adults, Youth, New Members, YSA */
    [136,113,23,8,31],          /* Oct: Total, Adults, Youth, New Members, YSA */
    [154,128,26,5,36],          /* Nov: Total, Adults, Youth, New Members, YSA */
    [165,138,27,5,38]           /* Dic: Total, Adults, Youth, New Members, YSA */

],
[
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [11,11,0,1,0],
    [15,15,0,2,0],
    [18,18,0,2,0],
    [19,18,1,2,0],
    [20,18,2,3,1],
    [21,19,2,2,1],
    [27,23,4,1,2],
    [27,23,4,1,2]
/* "Barrio Cañales" */ 
],
[
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [3,3,0,2,2],
    [3,3,0,1,2],
    [8,8,0,2,3],
    [9,8,1,2,3],
    [9,8,1,1,3],
    [9,8,1,1,3],
    [11,10,1,1,3],
    [11,10,1,1,3]
/* "Barrio Comalcalco" */ 
],
[
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [12,8,4,0,3],
    [21,15,6,3,5],
    [22,16,6,3,5],
    [22,16,6,2,6],
    [26,19,7,2,6],
    [27,19,8,2,7],
    [28,19,9,2,7],
    [29,20,9,2,7]
/* "Barrio Cunduacán" */  
],
[
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [0,0,0,0,0],
    [1,1,0,0,0],
    [2,2,0,0,0],
    [3,3,0,0,0],
    [3,3,0,0,0],
    [3,3,0,0,0],
    [5,5,0,0,1],
    [3,3,0,0,0]
/* "Barrio Cárdenas" */
],
[
    [0,0,0,0,0],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [1,1,0,0,1],
    [4,3,1,0,1],
    [4,3,1,0,1],
    [4,3,1,0,1],
    [10,8,2,0,1],
    [10,8,2,0,1],
    [10,8,2,0,1]
/* "Rama Huimanguillo" */ 
],
[
    [0,0,0,0,0],
    [5,5,0,0,3],
    [6,6,0,0,4],
    [11,11,0,0,5],
    [13,13,0,0,5],
    [17,16,1,0,5],
    [20,18,2,2,7],
    [20,18,2,2,7],
    [19,17,2,1,9],
    [20,18,2,1,9],
    [21,19,2,1,9],
    [21,19,2,1,9]
/* "Barrio Los Reyes" */ 
],
[
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [10,10,0,0,4],
    [12,12,0,0,5],
    [15,13,2,0,5],
    [16,14,2,0,5],
    [22,17,5,0,6],
    [21,16,5,0,6],
    [24,19,5,0,8],
    [29,23,6,0,9]
/* "Barrio Morelos" */ 
],
[
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [12,11,1,1,4],
    [13,12,1,2,4],
    [13,12,1,2,4],
    [16,14,2,2,4],
    [19,17,2,2,3],
    [21,18,3,2,3],
    [22,19,3,0,4],
    [23,20,3,0,4]
/* "Barrio Paraíso" */
],
[
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [1,1,0,0,0],
    [3,3,0,0,0],
    [3,3,0,0,0],
    [4,4,0,0,0],
    [4,4,0,0,1],
    [4,4,0,0,1],
    [5,5,0,0,0],
    [10,10,0,0,2]
/* "Barrio Petrolera" */
],
[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,1,0,0,1],
    [1,1,0,0,1]
/* "Rama Sánchez Magallanes" */
]
]

// Function to generate graph data and layout for a given unit index
graphData = (j) => {
            var data = [ 
                // Define the data traces for the graph
                {x: xArray, y: unitList[j][0], name:"2021", mode:"lines+markers"}, 
                {x: xArray, y: unitList[j][1], name:"2022", mode:"lines+markers"},
                {x: xArray, y: unitList[j][2], name:"IS", mode:"lines+markers+values"},
                {x: xArray, y: unitList[j][3], name:"RV", mode:"lines+markers"},
                {x: xArray, y: unitList[j][4], name:"Meta", mode:"lines+markers"}                             
                ];

                var recom =  unitList[j][3].length
                var layout = {
                xaxis: { title: "IS: Inicio sesión  RV: Recomendación vigente  Meta: Objetivo anual"},
                yaxis: {range: [0, unitList[j][recom]], title: "Enviadores"},
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                return {data, layout};
            }

let graphElements = graphData(0);
let datas = graphElements.data, 
layouts = graphElements.layout;

var config = {responsive: true};

// Display using Plotly
Plotly.newPlot("myPlot", datas, layouts,config);

const reset = () => {
    document.querySelector('#myPlot').innerHTML = '';
    document.getElementById("dynamictable").innerHTML = '';
}

// Function to generate HTML table for monthly data for a given unit index
// The table contains the months as rows and the data categories as columns
// Categories: Total, Adults, Youth, New Members, YSA
monthData = (i) => {
    var dict = {
        'Ene': [unitGroupList[i][0][0],unitGroupList[i][0][1],unitGroupList[i][0][2],unitGroupList[i][0][3],unitGroupList[i][0][4]],
        'Feb': [unitGroupList[i][1][0],unitGroupList[i][1][1],unitGroupList[i][1][2],unitGroupList[i][1][3],unitGroupList[i][1][4]],
        'Mar': [unitGroupList[i][2][0],unitGroupList[i][2][1],unitGroupList[i][2][2],unitGroupList[i][2][3],unitGroupList[i][2][4]],
        'Abr': [unitGroupList[i][3][0],unitGroupList[i][3][1],unitGroupList[i][3][2],unitGroupList[i][3][3],unitGroupList[i][3][4]],
        'May': [unitGroupList[i][4][0],unitGroupList[i][4][1],unitGroupList[i][4][2],unitGroupList[i][4][3],unitGroupList[i][4][4]],
        'Jun': [unitGroupList[i][5][0],unitGroupList[i][5][1],unitGroupList[i][5][2],unitGroupList[i][5][3],unitGroupList[i][5][4]],
        'Jul': [unitGroupList[i][6][0],unitGroupList[i][6][1],unitGroupList[i][6][2],unitGroupList[i][6][3],unitGroupList[i][6][4]],
        'Ago': [unitGroupList[i][7][0],unitGroupList[i][7][1],unitGroupList[i][7][2],unitGroupList[i][7][3],unitGroupList[i][7][4]],
        'Sep': [unitGroupList[i][8][0],unitGroupList[i][8][1],unitGroupList[i][8][2],unitGroupList[i][8][3],unitGroupList[i][8][4]],
        'Oct': [unitGroupList[i][9][0],unitGroupList[i][9][1],unitGroupList[i][9][2],unitGroupList[i][9][3],unitGroupList[i][9][4]],
        'Nov': [unitGroupList[i][10][0],unitGroupList[i][10][1],unitGroupList[i][10][2],unitGroupList[i][10][3],unitGroupList[i][10][4]],
        'Dic': [unitGroupList[i][11][0],unitGroupList[i][11][1],unitGroupList[i][11][2],unitGroupList[i][11][3],unitGroupList[i][11][4]]    
    };

    var tableHTML =
    '<table>' + 
        '<thead>' + 
        '<tr><td>Mes</td><td>Total</td><td>Adultos</td><td>Jóvenes</td><td>Miembros<br>nuevos</td><td>JAS</td></tr>' + // headings
        '</thead>' + 
        '<tbody>'; 

    for (var value in dict) {
        tableHTML += '<tr><td>'; 
        tableHTML += value; 
        tableHTML += '</td><td>'; 
        tableHTML += dict[value][0]; 
        tableHTML += '</td><td>'; 
        tableHTML += dict[value][1]; 
        tableHTML += '</td><td>'; 
        tableHTML += dict[value][2]; 
        tableHTML += '</td><td>'; 
        tableHTML += dict[value][3]; 
        tableHTML += '</td><td>'; 
        tableHTML += dict[value][4]; 
        tableHTML += '</td></tr>'; 
    }
    tableHTML +=
        '</tbody>' + 
    '</table>'; 
    return tableHTML;

}

document.getElementById("dynamictable").innerHTML = monthData(0);

const showBy = () => {
    reset()
    let filter = document.querySelector('#showBy').value;

    switch (filter) {

        case 'estakeCardenas':
            
            let graphElements0 = graphData(0);
            let datas0 = graphElements0.data, 
                layouts0 = graphElements0.layout;
            
            // Display using Plotly
            Plotly.newPlot("myPlot", datas0, layouts0);       

            document.getElementById("dynamictable").innerHTML = monthData(0);

            break;
            
        case 'wardCanales':
            
            let graphElements1 = graphData(1);
            let datas1 = graphElements1.data, 
                layouts1 = graphElements1.layout;
            
            // Display using Plotly
            Plotly.newPlot("myPlot", datas1, layouts1);

            document.getElementById("dynamictable").innerHTML = monthData(1);

            break;
            
        case 'wardComalcalco':
        
            let graphElements2 = graphData(2);
            let datas2 = graphElements2.data, 
                layouts2 = graphElements2.layout;
            
            // Display using Plotly
            Plotly.newPlot("myPlot", datas2, layouts2);

            document.getElementById("dynamictable").innerHTML = monthData(2);

            break;
        
            case 'wardCunduacn':
        
                let graphElements3 = graphData(3);
                let datas3 = graphElements3.data, 
                    layouts3 = graphElements3.layout;
                
                // Display using Plotly
                Plotly.newPlot("myPlot", datas3, layouts3);

                document.getElementById("dynamictable").innerHTML = monthData(3);

                break;
        
            case 'wardCardenas':
    
                let graphElements4 = graphData(4);
                let datas4 = graphElements4.data, 
                    layouts4 = graphElements4.layout;
                
                // Display using Plotly
                Plotly.newPlot("myPlot", datas4, layouts4);

                document.getElementById("dynamictable").innerHTML = monthData(4);

                break;
        
            case 'branchHuimanguillo':

                let graphElements5 = graphData(5);
                let datas5 = graphElements5.data, 
                    layouts5 = graphElements5.layout;
                
                // Display using Plotly
                Plotly.newPlot("myPlot", datas5, layouts5);

                document.getElementById("dynamictable").innerHTML = monthData(5);

                break;
            
            case 'wardReyes':

                let graphElements6 = graphData(6);
                let datas6 = graphElements6.data, 
                    layouts6 = graphElements6.layout;
                
                // Display using Plotly
                Plotly.newPlot("myPlot", datas6, layouts6);

                document.getElementById("dynamictable").innerHTML = monthData(6);

                break;
            
            case 'wardMorelos':

                let graphElements7 = graphData(7);
                let datas7 = graphElements7.data, 
                    layouts7 = graphElements7.layout;
                
                // Display using Plotly
                Plotly.newPlot("myPlot", datas7, layouts7);

                document.getElementById("dynamictable").innerHTML = monthData(7);

                break;
            
            case 'wardParaiso':

                let graphElements8 = graphData(8);
                let datas8 = graphElements8.data, 
                    layouts8 = graphElements8.layout;
                
                // Display using Plotly
                Plotly.newPlot("myPlot", datas8, layouts8);

                document.getElementById("dynamictable").innerHTML = monthData(8);

                break;

            case 'wardPetrolera':

                let graphElements9 = graphData(9);
                let datas9 = graphElements9.data, 
                    layouts9 = graphElements9.layout;
                
                // Display using Plotly
                Plotly.newPlot("myPlot", datas9, layouts9);

                document.getElementById("dynamictable").innerHTML = monthData(9);

                break;

            case 'branchMagallanes':

                let graphElements10 = graphData(10);
                let datas10 = graphElements10.data, 
                    layouts10 = graphElements10.layout;
                
                // Display using Plotly
                Plotly.newPlot("myPlot", datas10, layouts10);

                document.getElementById("dynamictable").innerHTML = monthData(10);

                break;
                                                                
    }

}

document.querySelector('#showBy').addEventListener('change', showBy);
