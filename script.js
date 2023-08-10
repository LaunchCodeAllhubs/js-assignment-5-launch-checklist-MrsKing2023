// Write your JavaScript code here!
//TO DO: add an alert to notify the user that all fields are required.

    window.addEventListener("load", function() {

        let form = document.querySelector("form");
        let list = document.getElementById("faultyItems");
         list.style.visibility = "hidden"

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let pilotInput = document.querySelector("input[name=pilotName]");
            let pilot = pilotInput.value;
     
            let copilotInput = document.querySelector("input[name=copilotName]");
            let copilot = copilotInput.value;
     
            let fuelInput = document.querySelector("input[name=fuelLevel]");
            let fuelLevel = Number(fuelInput.value);
     
            let cargoInput = document.querySelector("input[name=cargoMass]");
            let cargoLevel = Number(cargoInput.value);
     
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        });
        
        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch()
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            //console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            pickPlanet(listedPlanets) 
            let storePlanet = pickPlanet(listedPlanets) 
            //console.log(pickPlanet(listedPlanets))
            console.log(storePlanet)
            addDestinationInfo(document, storePlanet.name, storePlanet.diameter, storePlanet.star, storePlanet.distance, storePlanet.moons, storePlanet.image)
        })
     });
  