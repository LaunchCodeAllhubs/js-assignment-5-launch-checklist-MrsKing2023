// Write your JavaScript code here!
//TO DO: add an alert to notify the user that all fields are required.

    window.addEventListener("load", function() {

        let form = document.querySelector("form");
     
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
     
            formSubmission(document, pilot, copilot, fuelLevel, cargoLevel);
        });
     });

  //Make sure to call your formSubmission() function at the appropriate time in the script.js file


  // let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  // let listedPlanetsResponse;
  // listedPlanetsResponse.then(function (result) {
    //   listedPlanets = result;
      // console.log(listedPlanets);
   //}).then(function () {
     //  console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
 //  })
//});