// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let faultyItems = document.querySelector("#faultyItems")
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName =document.querySelector("input[name=copilotName");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let pilotStatus =document.getElementById("pilotStatus");
   let copilotStatus =document.getElementById("copilotstatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   
   form.addEventListener("submit", function(event){
      event.preventDefault(); 
     
   if(pilotName.value ===""){
      alert("Pilot name is required.");
      //event.preventDefault();
      return;
   }

   if(copilotName.value ===""){
      alert("Copilot name is required.");
      //event.preventDefault();
      return;
   }

   if(fuelLevel.value===""){
      alert("Fuel level is required.");
      //event.preventDefault();
      return;
   }

   if(isNaN(fuelLevel.value)){
      alert("Fuel level must be a number.")
      //event.preventDefault();
      return;
   }

   if(cargoMass.value===""){
      alert("Cargo mass is required.");
      //event.preventDefault();
      return;
   }
   if(isNaN(cargoMass.value)){
      alert("Cargo mass must be a number.")
      //event.preventDefault();
      return;
   }

})


if(Number(fuelLevel.value)>=10000 && Number(cargoMass.value)<=10000)
{
  faultyItems.style.visibility = "hidden";
  launchStatus.innerHTML = "Shuttle is ready for launch";
  launchStatus.style.color = "green";
}


   document.getElementById("faultyItems").style.visibility = "visible";
 document.getElementById("pilotStatus").innerHTML = `${pilotName} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `${copilotName} is ready for launch`;
 launchStatus.style.color = "green";

   //Makes Faulty Items Visible && h2 "launchStatus" changes to "Shuttle not ready for launch" and color = red when fuelLevel<10000
       if(Number(fuelLevel.value) < 10000){   
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready`;
         fuelStatus.innerHTML = `Not enough fuel for the journey`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red";
         event.preventDefault();
         //return;
      }
   

      //Makes Faulty Items Visible && h2 "launchStatus" changes to "Shuttle not ready for launch" and color = red when cargoMass>10000
      if(Number(cargoMass.value) > 10000){
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready`;
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Too much weight for the journey`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red";
         event.preventDefault();
        // return;
      }

      //Makes Faulty Items Visible && h2 "launchStatus" changes to "Shuttle not ready for launch" and color = red
      if(Number(fuelLevel.value)<10000 && Number(cargoMass.value)>10000){
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
         copilotStatus.innerHTML = `Copilot ${copilotName.value} Ready`;
         fuelStatus.innerHTML = `Not enough fuel for the journey`;
         cargoStatus.innerHTML = `Too much weight for the journey`;
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red";
         event.preventDefault();
         //return;
      }

   })
   
   


//   

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}"></img>`
      })
   })

   