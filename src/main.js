document.getElementById("increase-btn").onclick = function () {
  const fuelControl = document.getElementById("fuel");
  let fuelLevel = parseInt(getComputedStyle(fuelControl).height) / 2.5;
  fuelControl.style.backgroundColor = `rgba(139, 69, 19, ${
    (fuelLevel + 10) / 100
  })`;
  if (fuelLevel > 90 && fuelLevel < 100) {
    fuelControl.style.height = "100%";
    document.getElementById("value-display").innerHTML = "100%";
    document.getElementById("slider").value = 100;
  } else if (fuelLevel <= 90) {
    fuelControl.style.height = Math.ceil(fuelLevel + 10) + "%";
    document.getElementById("value-display").innerHTML =
      Math.ceil(fuelLevel + 10) + "%";
    document.getElementById("slider").value = Math.ceil(fuelLevel + 10);
  }
  changeState(Math.ceil(fuelLevel + 10));
};
document.getElementById("decrease-btn").onclick = function () {
  const fuelControl = document.getElementById("fuel");
  let fuelLevel = parseInt(getComputedStyle(fuelControl).height) / 2.5;
  fuelControl.style.backgroundColor = `rgba(139, 69, 19, ${
    (fuelLevel - 10) / 100
  })`;
  if (fuelLevel > 0 && fuelLevel < 10) {
    fuelControl.style.height = "0%";
    document.getElementById("value-display").innerHTML = "0%";
    document.getElementById("slider").value = 0;
  } else if (fuelLevel >= 10) {
    fuelControl.style.height = Math.floor(fuelLevel - 10) + "%";
    document.getElementById("value-display").innerHTML =
      Math.floor(fuelLevel - 10) + "%";
    document.getElementById("slider").value = Math.floor(fuelLevel - 10);
  }
  changeState(Math.round(fuelLevel - 10));
};
const slider = document.getElementById("slider");
slider.oninput = function () {
  const fuelControl = document.getElementById("fuel");
  fuelControl.style.backgroundColor = `rgba(139, 69, 19, ${
    slider.value / 100
  })`;
  fuelControl.style.height = slider.value + "%";
  document.getElementById("value-display").innerHTML = slider.value + "%";
  changeState(slider.value);
};

function changeState(value) {
  const state = document.getElementById("state");
  if (value >= 80) state.innerHTML = "Focus Level: Excellent";
  else if (value >= 50) state.innerHTML = "Focus Level: Good";
  else if (value >= 25) state.innerHTML = "Focus Level: Low";
  else state.innerHTML = "Focus Level: Critical";
}
