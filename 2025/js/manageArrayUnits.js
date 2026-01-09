

// Step 1: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

var xArray = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
            
let unitList = [
      [
        [0,0,3,5,8,10,22,26,36,57,85,98],
        [13,30,37,48,63,86,105,113,126,136,154,165],
        [33,71,110,170,183,197,211,229,238,258,314,346],
        [98,135,175,196,239,270,286,301,320,329,365,399],
        [98,188,277,341,380,417,450,491,518,530,552,581],
        [266,356,342,477,504,546,576,623,650,664,677,702],
        [396,393,396,null,null,null,null,null,null,null,null,null],
        "Estaca Cárdenas México"
      ],
      [
        [0,0,0,0,0,0,3,3,3,3,5,6],
        [1,3,5,8,11,15,18,19,20,21,27,27],
        [6,17,26,36,38,41,44,44,45,46,54,62],
        [15,31,35,36,48,53,57,59,60,60,62,66],
        [4,23,42,47,48,58,62,76,79,79,83,91],
        [19,50,52,54,59,68,74,78,81,82,83,91],
        [60,60,66,null,null,null,null,null,null,null,null,null],       
        "Barrio Cañales"
    ],
    [
        [0,0,0,0,1,1,2,2,5,7,8,8],
        [1,1,1,2,3,3,8,9,9,9,11,11],
        [1,2,5,9,10,10,12,12,13,16,26,28],
        [10,10,11,12,15,15,16,17,18,19,26,32],
        [10,16,18,18,26,28,29,33,34,33,35,45],
        [30,31,33,34,38,38,59,62,65,64,65,69],
        [36,36,36,null,null,null,null,null,null,null,null,null],        
        "Barrio Comalcalco"
    ],
    [
        [0,0,3,4,5,5,12,13,13,14,14,21],
        [8,10,11,11,12,21,22,22,26,27,28,29],
        [5,17,21,29,30,30,30,37,39,42,48,48],
        [12,17,31,37,47,50,52,54,55,55,58,62],
        [7,17,20,40,46,46,49,55,61,63,66,72],
        [30,39,53,55,67,67,71,72,86,86,88,100],
        [70,70,77,null,null,null,null,null,null,null,null,null],          
        "Barrio Cunduacán"
    ],
    [
        [0,0,0,0,0,1,1,1,3,3,4,4],
        [0,0,0,0,0,1,2,3,3,3,5,3],
        [0,1,7,17,18,19,18,21,21,21,22,23],
        [11,12,14,15,18,27,27,30,31,31,38,40],
        [10,12,21,29,36,36,40,42,43,44,44,45],
        [24,22,23,26,31,32,40,46,47,47,53,51],
        [29,29,29,null,null,null,null,null,null,null,null,null],          
        "Barrio Cárdenas"
    ],
    [
        [0,0,0,0,0,0,1,1,1,3,3,3],
        [1,1,1,1,1,1,4,4,4,10,10,10],
        [2,2,4,7,9,12,15,15,15,15,19,20],
        [4,4,6,7,9,9,10,10,13,15,17,20],
        [4,12,21,25,30,32,34,36,37,38,41,39],
        [15,14,17,25,30,36,38,41,41,43,46,44],
        [17,17,21,null,null,null,null,null,null,null,null,null],         
        "Rama Huimanguillo"
    ],
    [
        [0,0,0,0,0,0,0,2,2,3,7,8],
        [0,5,6,11,13,17,20,20,19,20,21,22],
        [0,4,13,19,20,20,20,24,25,26,35,35],
        [10,13,16,19,25,27,28,32,36,37,42,43],
        [17,27,35,38,40,40,50,55,55,56,58,60],
        [21,23,27,37,47,50,55,62,62,63,64,66],
        [45,45,42,null,null,null,null,null,null,null,null,null],           
        "Barrio Los Reyes"
    ],
    [
        [0,0,0,1,1,1,1,2,2,15,32,32],
        [2,6,9,9,10,12,15,16,22,21,24,29],
        [13,15,19,33,38,42,46,47,49,59,65,70],
        [24,29,30,33,38,42,46,47,49,52,56,59],
        [18,30,48,57,62,62,62,62,68,70,74,77],
        [63,60,66,79,82,84,84,86,84,97,100,103],
        [73,66,62,null,null,null,null,null,null,null,null,null],          
        "Barrio Morelos"
    ],
    [
        [0,0,0,0,0,2,2,2,7,8,10,11],
        [1,3,3,5,12,13,13,16,19,21,22,23],
        [4,11,12,16,17,17,17,19,20,21,28,34],
        [4,11,24,27,30,33,37,39,41,43,46,53],
        [28,37,57,69,73,84,92,98,105,110,111,111],
        [48,36,45,68,100,102,110,119,126,132,131,131],
        [41,40,39,null,null,null,null,null,null,null,null,null],           
        "Barrio Paraíso"
    ],
    [
        [0,0,0,0,0,0,0,0,0,1,2,5],
        [0,1,1,1,1,3,3,4,4,4,5,10],
        [1,1,2,3,3,4,7,8,8,10,15,15],
        [7,7,7,7,12,13,14,15,15,16,17,18],
        [5,12,13,15,16,25,25,26,27,28,31,31],
        [13,19,20,20,29,33,40,37,37,38,40,38],
        [20,19,18,null,null,null,null,null,null,null,null,null],           
        "Barrio Petrolera"
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,2,2,2,2,2,2,2],
        [1,1,1,1,1,1,1,1,1,1,1,5],
        [1,2,2,3,3,6,7,8,9,9,9,10],
        [3,6,6,6,8,9,10,11,9,12,12.5,13],
        [7,6,6,null,null,null,null,null,null,null,null,null],          
        "Rama Sánchez Magallanes"
    ]                                
    ]

let unitGroupList = [
  [
    [106,90,16,40,21],
    [188,158,30,43,35],
    [175,137,38,6,29],
    [341,286,55,45,55],
    [380,318,62,56,67],
    [417,350,67,57,71],
    [450,379,71,55,76],
    [491,408,83,59,85],
    [518,431,87,56,94],
    [530,440,90,52,96],
    [552,455,97,54,104],
    [581,478,103,52,115],
    "Estaca Cárdenas México"
  ],
  [
    [4,4,0,7,0],
    [23,18,5,7,2],
    [35,28,7,1,0],
    [47,39,8,7,5],
    [48,40,8,7,6],
    [58,48,10,8,8],
    [62,52,10,5,9],
    [76,58,18,11,9],
    [79,61,18,10,10],
    [79,61,18,7,10],
    [83,64,19,5,12],
    [91,71,20,5,16],
    "Barrio Cañales"
  ],
  [
    [12,9,3,1,0],
    [16,13,3,1,0],
    [11,9,2,1,0],
    [18,14,4,1,0],
    [26,22,4,2,3],
    [28,23,5,3,3],
    [29,24,5,3,3],
    [33,28,5,2,4],
    [34,29,5,2,5],
    [33,28,5,2,5],
    [35,29,6,2,5],
    [45,38,7,3,7],
    "Barrio Comalcalco"
  ],
  [
    [7,6,1,0,2],
    [17,15,2,0,3],
    [31,21,10,1,7],
    [40,34,6,4,7],
    [46,36,10,6,9],
    [46,36,10,6,9],
    [49,38,11,6,9],
    [55,44,11,6,11],
    [61,49,12,6,13],
    [63,51,12,6,13],
    [66,53,13,6,15],
    [72,58,14,8,17],
    "Barrio Cunduacán"
  ],
  [
    [10,9,1,8,4],
    [12,10,2,7,4],
    [14,13,1,0,5],
    [29,26,3,7,5],
    [36,31,5,10,6],
    [36,31,5,6,6],
    [40,34,6,7,6],
    [42,36,6,7,7],
    [43,37,6,5,7],
    [44,38,6,5,7],
    [44,38,6,5,7],
    [45,39,6,5,7],
    "Barrio Cárdenas"
  ],
  [
    [4,2,2,5,1],
    [12,9,3,7,3],
    [6,5,1,1,3],
    [25,22,3,6,5],
    [30,27,3,9,5],
    [32,29,3,9,5],
    [34,31,3,9,5],
    [36,33,3,9,6],
    [37,34,3,10,6],
    [38,35,3,8,6],
    [41,38,3,12,7],
    [39,36,3,10,7],
    "Rama Huimanguillo"
  ],
  [
    [17,16,1,9,5],
    [27,24,3,9,8],
    [16,15,1,0,7],
    [38,34,4,4,10],
    [40,36,4,3,11],
    [40,36,4,3,11],
    [50,45,5,4,12],
    [55,47,8,3,13],
    [55,47,8,3,14],
    [56,48,8,4,15],
    [58,50,8,3,16],
    [60,51,9,4,17],
    "Barrio Los Reyes"
  ],
  [
    [18,15,3,5,6],
    [30,26,4,5,10],
    [30,23,7,0,2],
    [57,44,13,6,13],
    [62,48,14,8,15],
    [62,48,14,8,14],
    [62,48,14,5,14],
    [62,48,14,5,14],
    [68,53,15,3,17],
    [70,53,17,3,15],
    [74,54,20,3,16],
    [77,55,22,3,17],
    "Barrio Morelos"
  ],
  [
    [28,24,4,5,3],
    [37,31,6,7,3],
    [24,19,5,1,4],
    [69,58,11,9,8],
    [73,62,11,10,10],
    [84,71,13,11,11],
    [92,78,14,13,13],
    [98,83,15,13,15],
    [105,88,17,14,16],
    [110,92,18,15,18],
    [111,93,18,15,18],
    [111,93,18,11,18],
    "Barrio Paraíso"
  ],
  [
    [5,4,1,0,0],
    [12,10,2,0,2],
    [7,3,4,1,0],
    [15,12,3,1,2],
    [16,13,3,1,2],
    [25,22,3,3,4],
    [25,22,3,3,4],
    [26,23,3,3,5],
    [27,24,3,3,5],
    [28,25,3,2,6],
    [31,27,4,3,7],
    [31,27,4,3,7],
    "Barrio Petrolera"
  ],
  [
    [1,1,0,0,0],
    [2,2,0,0,0],
    [1,1,0,0,0],
    [3,3,0,0,0],
    [3,3,0,0,0],
    [6,6,0,0,0],
    [7,7,0,0,1],
    [8,8,0,0,1],
    [9,9,0,0,1],
    [9,9,0,0,1],
    [9,9,0,0,1],
    [10,10,0,0,2],
    "Rama Sánchez Magallanes"
  ]
]


graphData = (j) => {
            // Define Data 
            var data = [
                {x: xArray, y: unitList[j][0], name:"2021", mode:"lines+markers", line: {color: '#bebebe'}}, // type:"bar"
                {x: xArray, y: unitList[j][1], name:"2022", mode:"lines+markers", line: {color: '#bebebe'}},
                {x: xArray, y: unitList[j][2], name:"2023", mode:"lines+markers", line: {color: '#bebebe'}},
                {x: xArray, y: unitList[j][3], name:"2024", mode:"lines+markers", line: {color: '#bebebe'}},
                {x: xArray, y: unitList[j][4], name:"2025", mode:"lines+markers", line: {color: '#4ad27f'}},
                {x: xArray, y: unitList[j][5], name:"IS", mode:"lines+markers", line: {color: 'orange'}},
                {x: xArray, y: unitList[j][6], name:"RV", mode:"lines+markers", line: {color: '#559aef'}}                             
                ];
                // document.getElementById("demo").innerHTML = unitList[0][0];    
                // Define Layout
                    var recom =  unitList[j][4].length
                    var layout = {
                    xaxis: { title: "IS: Inicio sesión    RV: Recomendación vigente"},
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
