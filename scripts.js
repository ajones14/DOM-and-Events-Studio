// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");  
  let shuttleBackground = document.getElementById("shuttleBackground");  
  let flightStatus = document.getElementById("flightStatus");

  let takeoffButton = document.getElementById("takeoff");
  takeoffButton.addEventListener("click", function () {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response === true) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }
  });

  let landingButton = document.getElementById("landing");
  landingButton.addEventListener("click", function() {
      window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = 0;
  });

  let missionAbortButton = document.getElementById("missionAbort");
  missionAbortButton.addEventListener("click", function () {
      let response = window.confirm("Confirm that you want to abort the mission.");
      if (response === true) {
          flightStatus.innerHTML = "Mission aborted.";
          shuttleBackground.style.backgroundColor = "green";
          spaceShuttleHeight.innerHTML = 0;
      }
  });
}

window.onload = init;