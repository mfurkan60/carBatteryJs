document.addEventListener("DOMContentLoaded", () => {
    const vehicleStatus = {
      batteryLevel: "80%",
      mileage: "250 km",
      tirePressure: "34 PSI",
      interiorTemperature: "22°C",
      engineOilStatus: "OK"
    };
  
    const batteryLevelElement = document.getElementById("battery-level");
    const mileageElement = document.getElementById("mileage");
    const tirePressureElement = document.getElementById("tire-pressure");
    const interiorTemperatureElement = document.getElementById("interior-temperature");
    const engineOilStatusElement = document.getElementById("engine-oil-status");
  
    batteryLevelElement.textContent = vehicleStatus.batteryLevel;
    mileageElement.textContent = vehicleStatus.mileage;
    tirePressureElement.textContent = vehicleStatus.tirePressure;
    interiorTemperatureElement.textContent = vehicleStatus.interiorTemperature;
    engineOilStatusElement.textContent = vehicleStatus.engineOilStatus;
  
    // ...
  });
  