// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   let missionDestination = document.getElementById(missionTarget);
    missionDestination.innerHTML += `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons} </li>
    </ol>
        <img src="${imageUrl}">
    `;   
}

function validateInput(testInput) {
    if (testInput === "")
    {
        return "Empty";
    }
    else if (isNaN(testInput))
    {
        return "Not a Number";
    }
    else if (isNaN(testInput) === false)
    {
        return "Is a Number";
    }
 }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
        alert("Make sure to enter valid information for each field!");
    } else {
        list.style.visibility = "visible"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    if (fuelLevel <= 10000 && cargoLevel >= 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red";
    } else if (fuelLevel < 10000 && cargoLevel < 10000){
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red";
    } else if (fuelLevel > 10000 && cargoLevel > 10000 ) { 
        cargoStatus.innerHTML = "Cargo mass too heavy enough for launch"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red";
    } else {
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green";
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        fuelStatus.innerHTML = "Fuel level high enough for launch"
    }
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
        if (response.status >=400 )   {
            throw new Error("Failed Response");
        } else {
            return response.json()
    }});   
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length)
    return planets[index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
