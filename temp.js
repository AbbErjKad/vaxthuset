

//KLASSRUMMET-VÄRDEN
//variablar som refererar till firebase
let database = firebase.database()
let temp1 = database.ref('temps/temp1');
let humid1 = database.ref('humidity/humidity1')
 
//funktion med properties och methods för att hämta värden från firebase
temp1.on('value', function(snapshot) {
updateTemp1(snapshot.val());
});


humid1.on('value', function(snapshot) {
updateHumid1(snapshot.val());
});
 
//funktion för att uppdatera temperatur och avrunda till 1 decimal
function updateTemp1(value) {
  let t = document.getElementById('temp1')
  if(t != null) {
    t.innerHTML = Math.round(value*10)/10 + ('°C')
  }
}

//funktion för att uppdatera fuktighet och avrunda till 1 decimal
function updateHumid1(value) {
let t = document.getElementById('humidity1')
if(t != null) {
  t.innerHTML = Math.round(value*10)/10 + ('%')
}}

//Terrariet-värden
let temp2 = database.ref('temps/temp2');
let humid2 = database.ref('humidity/humidity2')
 
temp2.on('value', function(snapshot) {
updateTemp2(snapshot.val());
});
 
humid2.on('value', function(snapshot) {
updateHumid2(snapshot.val());
});
 
//funktion för att uppdatera temperatur och avrunda till 1 decimal
function updateTemp2(value) {
let t = document.getElementById('temp2')
if(t != null) {
  t.innerHTML = Math.round(value*10)/10 + ('°C')
}
}

//funktion för att uppdatera fuktighet och avrunda till 1 decimal
function updateHumid2(value) {
let t = document.getElementById('humidity2')
if(t != null) {
  t.innerHTML = Math.round(value*10)/10 + ('%')
}
}

//KAFETERIAN-VÄRDEN
let temp3 = database.ref('temps/temp3');
let humid3 = database.ref('humidity/humidity3')
 
temp3.on('value', function(snapshot) {
updateTemp3(snapshot.val());
});
 
humid3.on('value', function(snapshot) {
updateHumid3(snapshot.val());
});
 
//funktion för att uppdatera temperatur och avrunda till 1 decimal
function updateTemp3(value){
let t = document.getElementById('temp3')
if(t != null) {
  t.innerHTML = Math.round(value*10)/10 + ('°C')
}
}
 
//funktion för att uppdatera fuktighet och avrunda till 1 decimal
function updateHumid3(value) {
let t = document.getElementById('humidity3')
if(t != null) {
  t.innerHTML = Math.round(value*10)/10 + ('%')
}
}
let temp4 = database.ref('temps/temp4');
let humid4 = database.ref('humidity/humidity4')
 
//VARDAGSRUM-VÄRDEN
temp4.on('value', function(snapshot) {
updateTemp4(snapshot.val());
});
 
humid4.on('value', function(snapshot) {
updateHumid4(snapshot.val());
});
 
//funktion för att uppdatera temperatur och avrunda till 1 decimal
function updateTemp4(value) {
let t = document.getElementById('temp4')
if(t != null) {
  t.innerHTML = Math.round(value*10)/10 + ('°C')
}
}
 //funktion för att uppdatera fuktighet och avrunda till 1 decimal
function updateHumid4(value) {
let t = document.getElementById('humidity4')
if(t != null) {
  t.innerHTML = Math.round(value*10)/10 + ('%')
}
}

//BIBLIOTEK-VÄRDEN
let temp5 = database.ref('temps/temp5');
let humid5 = database.ref('humidity/humidity5')
 
temp5.on('value', function(snapshot) {
updateTemp5(snapshot.val());
});
 
humid5.on('value', function(snapshot) {
updateHumid5(snapshot.val());
});
 
//funktion för att uppdatera temperatur och avrunda till 1 decimal
function updateTemp5(value) {
let t = document.getElementById('temp5')
if(t != null) {
  t.innerHTML = Math.round(value*10)/10 + ('°C')
}
}

//funktion för att uppdatera fuktighet och avrunda till 1 decimal
function updateHumid5(value) {
let t = document.getElementById('humidity5')
  if(t != null) {
    t.innerHTML = Math.round(value*10)/10 + ('%')
  }
}



// GRAF-KLASSRUMMET
let tempData = [
  ['Year', 'Temperatur']	
]

let todaysTemps = database.ref('temp-time/temp-time1/' + getCurrentDate()).limitToLast(24);

todaysTemps.on('value', function(snapshot) {
  console.log(snapshot.val())
  updateGraf(snapshot.val());
});

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  return today
}

function updateGraf(value) {
  let grafKlass = Object.entries(value)
  tempData.push(...grafKlass)
  drawChart(tempData)
}	

function drawChart(list) {

  var dataKlass = google.visualization.arrayToDataTable(list);

    var options = {
      title: 'Senaste 24 timmar',
      curveType: 'function',
      legend: { position: 'bottom' },
    };
  
    var chart = new google.visualization.LineChart(document.getElementById('container1'));
  
    chart.draw(dataKlass, options);
  }


// GRAF-TERRARIET

let tempData2 = [
  ['Year', 'Temperatur']	
]

let todaysTemps2 = database.ref('temp-time/temp-time2/' + getCurrentDate()).limitToLast(24);

todaysTemps2.on('value', function(snapshot) {
  console.log(snapshot.val())
  updateGraf2(snapshot.val());
});

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);


function updateGraf2(value) {
  let grafTer = Object.entries(value)
  tempData2.push(...grafTer)
  drawChart2(tempData2)
}	

function drawChart2(list) {

  var dataTer = google.visualization.arrayToDataTable(list);

    var options = {
      title: 'Senaste 24 timmar',
      curveType: 'function',
      legend: { position: 'bottom' },
    };
  
    var chart = new google.visualization.LineChart(document.getElementById('container2'));
  
    chart.draw(dataTer, options);
  }

  //GRAF-KAFETERIAN

  let tempData3 = [
    ['Year', 'Temperatur']	
  ]
  
  let todaysTemps3 = database.ref('temp-time/temp-time3/' + getCurrentDate()).limitToLast(24);
  
  todaysTemps3.on('value', function(snapshot) {
    console.log(snapshot.val())
    updateGraf3(snapshot.val());
  });
  
  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawChart);
  
  
  function updateGraf3(value) {
    let grafKaf = Object.entries(value)
    tempData3.push(...grafKaf)
    drawChart3(tempData3)
  }	
  
  function drawChart3(list) {
  
    var dataKaf = google.visualization.arrayToDataTable(list);
  
      var options = {
        title: 'Senaste 24 timmar',
        curveType: 'function',
        legend: { position: 'bottom' },
      };
    
      var chart = new google.visualization.LineChart(document.getElementById('container3'));
    
      chart.draw(dataKaf, options);
    }

    //GRAF-VARDAGSRUMMET

    let tempData4 = [
      ['Year', 'Temperatur']	
    ]
    
    let todaysTemps4 = database.ref('temp-time/temp-time4/' + getCurrentDate()).limitToLast(24);
    
    todaysTemps4.on('value', function(snapshot) {
      console.log(snapshot.val())
      updateGraf4(snapshot.val());
    });
    
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawChart);
    
    
    function updateGraf4(value) {
      let grafVard = Object.entries(value)
      tempData4.push(...grafVard)
      drawChart4(tempData4)
    }	
    
    function drawChart4(list) {
    
      var dataVard = google.visualization.arrayToDataTable(list);
    
        var options = {
          title: 'Senaste 24 timmar',
          curveType: 'function',
          legend: { position: 'bottom' },
        };
      
        var chart = new google.visualization.LineChart(document.getElementById('container4'));
      
        chart.draw(dataVard, options);
      }

      //GRAF-BIBLIOTEK

      let tempData5 = [
        ['Year', 'Temperatur']	
      ]
      
      let todaysTemps5 = database.ref('temp-time/temp-time5/' + getCurrentDate()).limitToLast(24);
      
      todaysTemps5.on('value', function(snapshot) {
        updateGraf5(snapshot.val());
      });
      
      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawChart);
      
      
      function updateGraf5(value) {
        let grafBibl = Object.entries(value)
        tempData5.push(...grafBibl)
        drawChart5(tempData5)
      }	
      
      function drawChart5(list) {
      
        var dataBibl = google.visualization.arrayToDataTable(list);
      
          var options = {
            title: 'Senaste 24 timmar',
            curveType: 'function',
            legend: { position: 'bottom' },
          };
        
          var chart = new google.visualization.LineChart(document.getElementById('container5'));
        
          chart.draw(dataBibl, options);
        }