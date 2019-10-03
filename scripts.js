// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
  let takeoffButton = document.getElementById("takeoff");
  takeoffButton.addEventListener("click", function () {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (response === true) {
      let p = document.getElementById("flightStatus");
      p.innerHTML = "Shuttle in flight.";
      let shuttleBackground = document.getElementById("shuttleBackground");
      shuttleBackground.style.backgroundColor = "blue";
      let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
      spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }
  });
}

window.onload = init;