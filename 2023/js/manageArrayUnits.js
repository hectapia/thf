

// Step 1: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

var xArray = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
            
let unitList = [
    [
        [0,0,3,5,8,10,22,26,36,57,85,98],
        [13,30,37,48,63,86,105,113,126,136,154,165],
        [33,71,110,170,183,197,211,229,238,258,,],
        [131,193,243,301,323,336,351,365,379,404,,],
        [513,513,513,513,513,513,436,470,470,470,,],        
        "Estaca Cárdenas México"
    ],
    [
        [0,0,0,0,0,0,3,3,3,3,5,6],
        [1,3,5,8,11,15,18,19,20,21,27,27],
        [6,17,26,36,38,41,44,44,45,46,,],
        [26,35,40,49,51,54,57,57,57,57,,],
        [60,60,60,60,60,60,61,61,61,61,,],        
        "Barrio Cañales"
    ],
    [
        [0,0,0,0,1,1,2,2,5,7,8,8],
        [1,1,1,2,3,3,8,9,9,9,11,11],
        [1,2,5,9,10,10,12,12,13,16,,],
        [10,12,22,24,30,30,33,33,35,35,,],
        [54,54,54,54,54,54,51,54,54,54,,],      
        "Barrio Comalcalco"
    ],
    [
        [0,0,3,4,5,5,12,13,13,14,14,21],
        [8,10,11,11,12,21,22,22,26,27,28,29],
        [5,17,21,29,30,30,30,37,39,42,,],
        [18,33,37,37,49,49,50,55,58,61,,],
        [73,73,73,73,73,73,73,73,73,73,,],        
        "Barrio Cunduacán"
    ],
    [
        [0,0,0,0,0,1,1,1,3,3,4,4],
        [0,0,0,0,0,1,2,3,3,3,5,3],
        [0,1,7,17,18,19,18,21,21,21,,],
        [0,15,21,26,31,31,30,30,30,30,,],
        [41,41,41,41,41,41,32,41,41,41,,],       
        "Barrio Cárdenas"
    ],
    [
        [0,0,0,0,0,0,1,1,1,3,3,3],
        [1,1,1,1,1,1,4,4,4,10,10,10],
        [2,2,4,7,9,12,15,15,15,15,,],
        [2,4,7,11,11,15,18,18,18,20,,],
        [27,27,27,27,27,27,34,34,34,34,,],        
        "Rama Huimanguillo"
    ],
    [
        [0,0,0,0,0,0,0,2,2,3,7,8],
        [0,5,6,11,13,17,20,20,19,20,21,22],
        [0,4,13,19,20,20,20,24,25,26,,],
        [11,23,23,37,37,37,37,38,39,40,,],
        [38,38,38,38,38,38,25,29,29,29,,],        
        "Barrio Los Reyes"
    ],
    [
        [0,0,0,1,1,1,1,2,2,15,32,32],
        [2,6,9,9,10,12,15,16,22,21,24,29],
        [13,15,19,33,38,42,46,47,49,59,,],
        [23,24,24,25,48,51,55,57,63,70,,],
        [84,84,84,84,84,84,78,78,78,83,,],        
        "Barrio Morelos"
    ],
    [
        [0,0,0,0,0,2,2,2,7,8,10,11],
        [1,3,3,5,12,13,13,16,19,21,22,23],
        [4,11,12,16,17,17,17,19,20,21,,],
        [24,28,28,40,43,45,47,49,51,57,,],
        [79,79,79,79,79,79,57,59,59,59,,],        
        "Barrio Paraíso"
    ],
    [
        [0,0,0,0,0,0,0,0,0,1,2,5],
        [0,1,1,1,1,3,3,4,4,4,5,10],
        [1,1,2,3,3,4,7,8,8,10,,],
        [7,12,12,12,15,15,16,20,20,25,,],
        [43,43,43,43,43,43,19,25,25,30,,],        
        "Barrio Petrolera"
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,2,2,2,2,2,,],
        [7,7,7,7,8,8,8,8,8,9,,],
        [23,23,23,23,23,23,16,16,16,16,,],        
        "Rama Sánchez Magallanes"
    ]                
    ]

let unitGroupList = [
[
    [33,26,7,0,4],
    [71,56,15,0,9],
    [110,94,16,1,17],
    [170,145,25,5,24],
    [184,151,33,3,24],
    [197,162,35,3,30],
    [210,174,36,4,32],
    [229,191,38,4,37],
    [238,199,39,5,42],
    [258,215,43,5,46],
    ["","","","",""],
    ["","","","",""]         
/* "Estaca Cárdenas México" */ 
],
[
    [6,5,1,0,1],
    [17,14,3,0,1],
    [26,23,3,1,1],
    [36,32,4,2,2],
    [38,33,5,1,1],
    [41,35,6,1,1],
    [44,38,6,1,1],
    [44,38,6,1,1],
    [45,39,6,1,2],
    [46,40,6,1,2],
    ["","","","",""],
    ["","","","",""] 
/* "Barrio Cañales" */ 
],
[
    [1,1,0,0,0],
    [2,2,0,0,0],
    [5,5,0,0,1],
    [9,8,1,0,1],
    [10,8,2,0,1],
    [10,8,2,0,1],
    [11,9,2,0,1],
    [12,10,2,0,1],
    [13,11,2,0,1],
    [16,14,2,0,1],
    ["","","","",""],
    ["","","","",""] 
/* "Barrio Comalcalco" */  
],
[
    [5,3,2,0,1],
    [17,10,7,0,2],
    [21,13,8,0,3],
    [29,21,8,2,3],
    [30,22,8,1,4],
    [30,22,8,1,4],
    [30,22,8,1,4],
    [37,28,9,1,6],
    [39,29,10,1,6],
    [42,32,10,0,8],
    ["","","","",""],
    ["","","","",""] 
/* "Barrio Cunduacán" */  
],
[
    [0,0,0,0,0],
    [1,1,0,0,0],
    [7,7,0,0,3],
    [17,16,1,1,5],
    [18,17,1,1,5],
    [19,18,1,1,5],
    [18,17,1,1,6],
    [21,20,1,1,7],
    [21,20,1,1,7],
    [21,20,1,0,7],
    ["","","","",""],
    ["","","","",""] 
/* "Barrio Cárdenas" */ 
],
[
    [2,2,0,0,0],
    [2,2,0,0,0],
    [4,4,0,0,0],
    [7,7,0,0,0],
    [9,8,1,0,1],
    [12,11,1,0,3],
    [15,13,2,0,5],
    [15,13,2,0,5],
    [15,13,2,0,5],
    [15,13,2,0,5],
    ["","","","",""],
    ["","","","",""] 
/* "Rama Huimanguillo" */ 
],
[
    [0,0,0,0,0],
    [4,4,0,0,3],
    [13,13,0,0,6],
    [19,19,0,0,8],
    [20,19,1,0,7],
    [20,19,1,0,7],
    [20,19,1,0,7],
    [24,23,1,0,8],
    [26,25,1,0,9],
    [26,25,1,0,9],
    ["","","","",""],
    ["","","","",""] 
/* "Barrio Los Reyes" */ 
],
[
    [13,9,4,0,1],
    [15,10,5,0,1],
    [19,14,5,0,1],
    [33,24,9,0,2],
    [38,25,13,0,2],
    [42,28,14,0,5],
    [46,32,14,1,4],
    [47,32,15,1,5],
    [49,34,15,1,7],
    [59,42,17,3,8],
    ["","","","",""],
    ["","","","",""] 
/* "Barrio Morelos" */ 
],
[
    [4,4,0,0,1],
    [11,11,0,0,2],
    [12,12,0,0,2],
    [16,14,2,0,3],
    [17,15,2,0,3],
    [17,15,2,0,3],
    [17,15,2,0,3],
    [19,17,2,0,3],
    [20,18,2,1,4],
    [21,19,2,1,4],
    ["","","","",""],
    ["","","","",""] 
/* "Barrio Paraíso" */
],
[
    [1,1,0,0,0],
    [1,1,0,0,0],
    [2,2,0,0,0],
    [3,3,0,0,0],
    [3,3,0,0,0],
    [4,4,0,0,0],
    [7,7,0,0,0],
    [8,8,0,0,0],
    [8,8,0,0,0],
    [10,8,2,0,0],
    ["","","","",""],
    ["","","","",""] 
/* "Barrio Petrolera" */
],
[
    [1,1,0,0,0],
    [1,1,0,0,0],
    [1,1,0,0,0],
    [1,1,0,0,0],
    [1,1,0,0,0],
    [2,2,0,0,1],
    [2,2,0,0,1],
    [2,2,0,0,1],
    [2,2,0,0,1],
    [2,2,0,0,1],
    ["","","","",""],
    ["","","","",""] 
/* "Rama Sánchez Magallanes" */
]
]


graphData = (j) => {
            // Define Data 
            var data = [
                {x: xArray, y: unitList[j][0], name:"2021", mode:"lines+markers"}, // type:"bar"
                {x: xArray, y: unitList[j][1], name:"2022", mode:"lines+markers"},
                {x: xArray, y: unitList[j][2], name:"2023", mode:"lines+markers"},
                {x: xArray, y: unitList[j][3], name:"FamilySearch", mode:"lines+markers+values"},
                {x: xArray, y: unitList[j][4], name:"Recomendación", mode:"lines+markers"}                             
                ];
                // document.getElementById("demo").innerHTML = unitList[0][0];    
                // Define Layout
                    var recom =  unitList[j][3].length
                    var layout = {
                    xaxis: { title: ""},
                    yaxis: {range: [0, unitList[j][recom]], title: "Membresía"},
                title: "Miembros que enviaron nombres para ordenanzas al Templo este año"
                };
                return {data, layout};
            }
            let graphElements = graphData(0);
            let datas = graphElements.data, 
                layouts = graphElements.layout;

                // Display using Plotly
                Plotly.newPlot("myPlot", datas, layouts);


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
