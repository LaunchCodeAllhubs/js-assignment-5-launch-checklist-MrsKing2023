// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
   let missioiDestination = document.getElementById(missionDestination);
   for (let i =0; i < missionDestination.length; i++) {
    let data = missionDestination[i];
    missionDestination.innerHTML += `

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${missionDestination.name} </li>
                    <li>Diameter: ${missionDestination.diameter}</li>
                    <li>Star: ${missionDestination.star}</li>
                    <li>Distance from Earth: ${missionDestination.distance} </li>
                    <li>Number of Moons: ${missionDestination.moons} </li>
                </ol>
                <img src="${missionDestination.image}">

        `;
     }
   */
            

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
    } 
    if (fuelLevel <= 10000) {
        list.style.visibility = "visible"
        fuelStatus.innerHTML = "Fuel level too low for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red";
    } else if (cargoStatus >= 10000){
        list.style.visibility = "visible"
        cargoStatus.innerHTML = "Too much mass for the shuttle to take off"
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red: #C7254E: rgb(199, 37, 78)";
    } else {
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green: #419F6A: rgb(65, 159, 106)";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        });

    return response.json()
    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
