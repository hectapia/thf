// This const contains the labels for the x axis, in fact, it is a const since contains the months of the year
var xArray = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

// This array of arrays contains the data for each unit: "Estaca Cárdenas México", "Barrio Cañales", "Barrio Comalcalco", "Barrio Cunduacán", "Barrio Cárdenas", "Rama Huimanguillo", "Barrio Los Reyes", "Barrio Morelos", "Barrio Paraíso", "Barrio Petrolera", "Rama Sánchez Magallanes"            
// Each unit contains 7 arrays: 2021 data, 2022 data, 2023 data, 2024 data, IS: inicio sesion FamilySearch data, RV: Recomendación vigente data, Goal data
// Each array contains 12 values, one for each month of the year
// The last element of each unit array is the name of the unit
// Example: unitList[0] is the data for "Estaca Cárdenas México"
// unitList[0][0] is the 2021 data for "Estaca Cárdenas México"
// unitList[0][1] is the 2022 data for "Estaca Cárdenas México"
// unitList[0][2] is the 2023 data for "Estaca Cárdenas México"
// unitList[0][3] is the 2024 data for "Estaca Cárdenas México"
// unitList[0][4] is the FamilySearch data for "Estaca Cárdenas México"
// unitList[0][5] is the Recomendación data for "Estaca Cárdenas México"
// unitList[0][6] is the Goal data for "Estaca Cárdenas México"
// unitList[0][7] is the name of the unit "Estaca Cárdenas México"
// The same structure applies for the other units
// Note: null values are used for months where data is not available
// This allows for better visualization in the graphs
// we can use this data to create a sql database where one table contains the unit names and another table contains the anual data by month for each unit
let unitList = [
    [
        [0,0,3,5,8,10,22,26,36,57,85,98],                   /*2021*/
        [13,30,37,48,63,86,105,113,126,136,154,165],        /*2022*/
        [33,71,110,170,183,197,211,229,238,258,314,346],    /*2023*/
        [98,135,175,196,239,270,286,301,320,329,365,399],   /*2024*/
        [256,300,342,377,422,449,465,480,491,502,529,547],  /*IS*/
        [513,510,508,500,495,475,456,470,480,485,490,490],  /*RV*/  
        [272,272,272,272,272,272,272,272,272,272,272,272],  /*Goal*/  
        "Estaca Cárdenas México"
    ],
    [
        [0,0,0,0,0,0,3,3,3,3,5,6],
        [1,3,5,8,11,15,18,19,20,21,27,27],
        [6,17,26,36,38,41,44,44,45,46,54,62],
        [15,31,35,36,48,53,57,59,60,60,62,66],
        [36,50,52,54,63,68,70,72,73,74,74,74],
        [60,60,60,60,60,60,61,61,61,61,65,75],
        [25,25,25,25,25,25,25,25,25,25,25,25],    
        "Barrio Cañales"
    ],
    [
        [0,0,0,0,1,1,2,2,5,7,8,8],
        [1,1,1,2,3,3,8,9,9,9,11,11],
        [1,2,5,9,10,10,12,12,13,16,26,28],
        [10,10,11,12,15,15,16,17,18,19,26,32],
        [29,31,33,34,38,38,38,40,41,43,51,55],
        [73,73,73,73,73,73,73,73,73,73,73,73],
        [25,25,25,25,25,25,25,25,25,25,25,25],     
        "Barrio Comalcalco"
    ],
    [
        [0,0,3,4,5,5,12,13,13,14,14,21],
        [8,10,11,11,12,21,22,22,26,27,28,29],
        [5,17,21,29,30,30,30,37,39,42,48,48],
        [12,17,31,37,47,50,52,54,55,55,58,62],
        [34,39,53,60,67,67,71,72,73,72,73,75],
        [73,73,73,73,73,73,73,73,73,73,73,73],
        [25,25,25,25,25,25,25,25,25,25,25,25],        
        "Barrio Cunduacán"
    ],
    [
        [0,0,0,0,0,1,1,1,3,3,4,4],
        [0,0,0,0,0,1,2,3,3,3,5,3],
        [0,1,7,17,18,19,18,21,21,21,22,23],
        [11,12,14,15,18,27,27,30,31,31,38,40],
        [21,22,23,25,30,41,43,46,47,47,47,51],
        [41,41,41,41,41,41,32,41,41,41,41,41],   
        [25,25,25,25,25,25,25,25,25,25,25,25],          
        "Barrio Cárdenas"
    ],
    [
        [0,0,0,0,0,0,1,1,1,3,3,3],
        [1,1,1,1,1,1,4,4,4,10,10,10],
        [2,2,4,7,9,12,15,15,15,15,19,20],
        [4,12,21,25,30,32,34,36,37,38,41,39],
        [13,14,17,17,18,18,18,18,19,23,24,29],
        [27,27,27,27,27,27,34,34,34,34,34,34],     
        [25,25,25,25,25,25,25,25,25,25,25,25],      
        "Rama Huimanguillo"
    ],
    [
        [0,0,0,0,0,0,0,2,2,3,7,8],
        [0,5,6,11,13,17,20,20,19,20,21,22],
        [0,4,13,19,20,20,20,24,25,26,35,35],
        [10,13,16,19,25,27,28,32,36,37,42,43],
        [21,23,27,32,37,38,39,42,43,43,43,48],
        [38,38,38,38,38,38,38,38,38,38,38,38],   
        [25,25,25,25,25,25,25,25,25,25,25,25],         
        "Barrio Los Reyes"
    ],
    [
        [0,0,0,1,1,1,1,2,2,15,32,32],
        [2,6,9,9,10,12,15,16,22,21,24,29],
        [13,15,19,33,38,42,46,47,49,59,65,70],
        [24,29,30,33,38,42,46,47,49,52,56,59],
        [54,60,66,70,74,75,77,77,80,80,80,84],
        [84,84,84,84,84,84,78,78,78,83,83,83],    
        [25,25,25,25,25,25,25,25,25,25,25,25],            
        "Barrio Morelos"
    ],
    [
        [0,0,0,0,0,2,2,2,7,8,10,11],
        [1,3,3,5,12,13,13,16,19,21,22,23],
        [4,11,12,16,17,17,17,19,20,21,28,34],
        [4,11,24,27,30,33,37,39,41,43,46,53],
        [26,36,45,54,60,64,67,68,70,74,74,84],
        [79,79,79,79,79,79,57,59,59,59,62,62],  
        [25,25,25,25,25,25,25,25,25,25,25,25],            
        "Barrio Paraíso"
    ],
    [
        [0,0,0,0,0,0,0,0,0,1,2,5],
        [0,1,1,1,1,3,3,4,4,4,5,10],
        [1,1,2,3,3,4,7,8,8,10,15,15],
        [7,7,7,7,12,13,14,15,15,16,17,18],
        [17,19,20,25,29,33,34,37,37,38,39,38],
        [43,43,43,43,43,43,19,25,25,30,33,33],    
        [25,25,25,25,25,25,25,25,25,25,25,25],         
        "Barrio Petrolera"
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,2,2,2,2,2,2,2],
        [1,1,1,1,1,1,1,1,1,1,1,5],
        [5,6,6,6,6,7,8,8,8,8,8,9],
        [23,23,23,23,23,23,16,16,16,16,16,16],   
        [25,25,25,25,25,25,25,25,25,25,25,25],         
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
    [                       /* "Estaca Cárdenas México" */ 
        [98,77,21,3,15],    /* Ene: Total, Adults, Youth, New Members, YSA */
        [135,111,24,5,18],  /* Feb: Total, Adults, Youth, New Members, YSA */
        [175,137,38,6,29],  /* Mar: Total, Adults, Youth, New Members, YSA */
        [196,151,45,7,31],  /* Abr: Total, Adults, Youth, New Members, YSA */
        [239,191,48,10,36], /* May: Total, Adults, Youth, New Members, YSA */
        [270,214,56,12,40], /* Jun: Total, Adults, Youth, New Members, YSA */
        [286,230,56,26,52], /* Jul: Total, Adults, Youth, New Members, YSA */
        [301,239,62,15,47], /* Ago: Total, Adults, Youth, New Members, YSA */
        [320,259,61,19,50], /* Sep: Total, Adults, Youth, New Members, YSA */
        [329,266,63,32,65], /* Oct: Total, Adults, Youth, New Members, YSA */
        [365,298,67,37,71], /* Nov: Total, Adults, Youth, New Members, YSA */
        [399,325,74,41,78]  /* Dic: Total, Adults, Youth, New Members, YSA */
    ],
    [
        [15,10,5,0,0],
        [31,26,5,1,0],
        [35,28,7,1,1],
        [36,29,7,1,1],
        [48,38,10,2,2],
        [53,42,11,2,3],
        [57,46,11,8,6],
        [60,47,13,2,4],
        [60,48,12,2,5],
        [60,48,12,5,8],
        [62,50,12,5,8],
        [66,52,14,8,10]
        /* "Barrio Cañales" */ 
    ],
    [
        [10,8,2,1,0],
        [10,8,2,1,0],
        [11,9,2,1,0],
        [17,13,4,0,0],
        [18,14,4,0,0],
        [19,15,4,0,0],
        [16,13,3,1,0],
        [18,14,4,0,0],
        [19,15,4,0,0],
        [19,14,5,1,0],
        [27,22,5,0,0],
        [32,24,8,0,1]
        /* "Barrio Comalcalco" */  
    ],
    [
        [12,11,1,1,4],
        [17,15,2,1,5],
        [31,21,10,1,7],
        [37,28,9,1,8],
        [47,36,11,2,10],
        [50,38,12,2,11],
        [52,41,11,2,12],
        [54,42,12,2,13],
        [55,43,12,2,14],
        [55,43,12,2,14],
        [58,46,12,1,15],
        [62,49,13,0,16]
        /* "Barrio Cunduacán" */  
    ],
    [
        [11,10,1,0,4],
        [12,11,1,0,5],
        [14,13,1,0,5],
        [15,14,1,0,6],
        [18,17,1,0,7],
        [21,20,1,0,8],
        [27,26,1,5,8],
        [21,20,1,0,9],
        [21,20,1,0,9],
        [31,30,1,5,9],
        [38,35,3,7,10],
        [40,37,3,8,11]
        /* "Barrio Cárdenas" */ 
    ],
    [
        [4,3,1,0,1],
        [4,3,1,0,1],
        [6,5,1,1,3],
        [7,6,1,1,3],
        [9,8,1,1,4],
        [10,9,1,1,5],
        [10,8,2,1,4],
        [15,13,2,2,5],
        [15,13,2,2,5],
        [15,13,2,2,5],
        [17,15,2,4,5],
        [21,19,2,5,6]
        /* "Rama Huimanguillo" */ 
    ],
    [
        [10,10,0,0,5],
        [13,13,0,0,5],
        [16,15,1,0,7],
        [19,18,1,0,8],
        [20,19,1,0,9],
        [20,19,1,0,10],
        [28,25,3,5,8],
        [30,27,3,0,10],
        [30,27,3,0,10],
        [37,34,3,8,9],
        [42,38,4,8,10],
        [43,39,4,9,11]
        /* "Barrio Los Reyes" */ 
    ],
    [
        [24,17,7,0,1],
        [29,22,7,0,2],
        [30,23,7,0,2],
        [33,25,8,0,2],
        [38,28,10,0,3],
        [40,30,10,0,4],
        [44,32,12,0,0],
        [47,34,13,0,4],
        [49,36,13,0,4],
        [52,38,14,4,8],
        [56,41,15,6,8],
        [59,44,15,6,9]
        /* "Barrio Morelos" */ 
    ],
    [
        [4,4,0,0,0],
        [11,9,2,1,0],
        [24,19,5,1,4],
        [28,22,6,1,5],
        [30,24,6,1,6],
        [30,24,6,1,7],
        [37,28,9,3,7],
        [40,31,9,3,8],
        [41,32,9,3,9],
        [43,34,9,4,9],
        [46,37,9,5,11],
        [53,43,10,4,10]
        /* "Barrio Paraíso" */
    ],
    [
        [7,3,4,1,0],
        [7,3,4,1,0],
        [7,3,4,1,0],
        [10,5,5,1,0],
        [13,8,5,1,0],
        [15,10,5,1,0],
        [14,10,4,1,2],
        [15,11,4,1,2],
        [15,11,4,1,2],
        [16,11,5,1,3],
        [17,12,5,1,3],
        [18,13,5,1,3]
        /* "Barrio Petrolera" */
    ],
    [
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [2,2,0,0,1],
        [5,5,0,0,1]
        /* "Rama Sánchez Magallanes" */
    ]
]

// Function to generate graph data and layout for a given unit index
graphData = (j) => {
            // Define the data traces for the graph 
            var data = [
                {x: xArray, y: unitList[j][0], name:"2021", mode:"lines+markers", line: {color: '#bebebe'}}, 
                {x: xArray, y: unitList[j][1], name:"2022", mode:"lines+markers", line: {color: '#bebebe'}},
                {x: xArray, y: unitList[j][2], name:"2023", mode:"lines+markers", line: {color: '#bebebe'}},
                {x: xArray, y: unitList[j][3], name:"2024", mode:"lines+markers", line: {color: '#4ad27f'}},
                {x: xArray, y: unitList[j][4], name:"IS", mode:"lines+markers", line: {color: 'orange'}},
                {x: xArray, y: unitList[j][5], name:"RV", mode:"lines+markers", line: {color: '#559aef'}},
                {x: xArray, y: unitList[j][6], name:"Meta", mode:"lines+markers"}                            
                ];

                var recom =  unitList[j][4].length
                var layout = {
                xaxis: { title: "IS: Inicio sesión  RV: Recomendación vigente  Meta: Objetivo anual"},
                yaxis: {range: [0, unitList[j][recom]], title: "Enviadores"},
                title: "Miembros que enviaron nombres<br>para ordenanzas al Templo este año"
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
