//KLASSRUMMET-VÄRDEN
//variablar som refererar till firebase
let database = firebase.database()
let temp1 = database.ref('temps/temp1')
let humid1 = database.ref('humidity/humidity1')

//funktion med properties och methods för att hämta värden från firebase
temp1.on('value', function (snapshot) {
    updateTemp1(snapshot.val())
})


humid1.on('value', function (snapshot) {
    updateHumid1(snapshot.val())
})

//funktion för att uppdatera temperatur och avrunda till 1 decimal
function updateTemp1 (value) {
    let t = document.getElementById('temp1')
    if (t != null) {
        t.innerHTML = Math.round(value * 10) / 10 + ('°C')
    }
}

//funktion för att uppdatera fuktighet och avrunda till 1 decimal
function updateHumid1 (value) {
    let t = document.getElementById('humidity1')
    if (t != null) {
        t.innerHTML = Math.round(value * 10) / 10 + ('%')
    }
}


// GRAF
let tempData = [
    ['Year', 'Temperatur']
]

let todaysTemps = database.ref('temp-time/temp-time1/' + getCurrentDate()).limitToLast(24)

todaysTemps.on('value', function (snapshot) {
    console.log(snapshot.val())
    updateGraf(snapshot.val())
})

google.charts.load('current', { packages: ['corechart', 'line'] })
google.charts.setOnLoadCallback(drawChart)

function getCurrentDate () {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()

    today = yyyy + '-' + mm + '-' + dd
    return today
}

function updateGraf (value) {
    let grafKlass = Object.entries(value)
    tempData.push(...grafKlass)
    drawChart(tempData)
}

function drawChart (list) {

    var dataKlass = google.visualization.arrayToDataTable(list)

    var options = {
        title: 'Senaste 24 timmar',
        curveType: 'function',
        legend: { position: 'bottom' },
    }

    var chart = new google.visualization.LineChart(document.getElementById('container1'))

    chart.draw(dataKlass, options)
}

function openNav () {
    document.getElementById("mySidenav").style.width = "250px"
}

function closeNav () {
    document.getElementById("mySidenav").style.width = "0"
}

let power = false
function writeUserData () {
    console.log(power)
    firebase.database().ref('power').set({
        power: power
    })
    if (power == true) {
        document.getElementById('propell').innerHTML = "Fan is ON"

    } else if (power == false) {
        document.getElementById('propell').innerHTML = "Fan is OFF"

    }
    if (power == true) {
        power = false
    } else if (power == false) {
        power = true
    }

}