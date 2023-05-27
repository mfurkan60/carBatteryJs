// Elektrikli araç batarya kontrolü sınıfı
class ElectricVehicle {
  constructor() {
    this.batteryLevel = 0;
    this.mileage = 0;
    this.isConnected = false;
  }

  chargeBattery() {
    if (this.batteryLevel < 100) {
      this.batteryLevel += 10;
      this.updateBatteryLevel();
    }
  }

  dischargeBattery() {
    if (this.batteryLevel > 0) {
      this.batteryLevel -= 5;
      this.updateBatteryLevel();
    }
  }

  drive(distance) {
    const batteryUsage = Math.floor(distance / 10) * 5;
    if (this.batteryLevel >= batteryUsage) {
      this.batteryLevel -= batteryUsage;
      this.mileage += distance;
      this.updateBatteryLevel();
      this.updateMileage();
    } else {
      alert("Yetersiz batarya seviyesi! Şarj etmeniz gerekiyor.");
    }
  }

  connect() {
    // Araç ile iletişim sağlandığında burası çalışır
    this.isConnected = true;
    // Uzaktan kontrol ve izleme işlevlerini başlatmak için gerekli kodları burada ekleyebilirsiniz
  }

  disconnect() {
    // Araç ile iletişim kesildiğinde burası çalışır
    this.isConnected = false;
    // Uzaktan kontrol ve izleme işlevlerini durdurmak için gerekli kodları burada ekleyebilirsiniz
  }

  updateBatteryLevel() {
    const batteryLevelElement = document.getElementById("battery-level");
    batteryLevelElement.textContent = this.batteryLevel + "%";
  }

  updateMileage() {
    const mileageElement = document.getElementById("mileage");
    mileageElement.textContent = this.mileage + " km";
  }
}

// Elektrikli araç batarya kontrolü işlemleri
document.addEventListener("DOMContentLoaded", () => {
  const electricVehicle = new ElectricVehicle();

  // Şarj et butonu
  const chargeButton = document.getElementById("charge-button");
  chargeButton.addEventListener("click", () => {
    electricVehicle.chargeBattery();
  });

  // Deşarj et butonu
  const dischargeButton = document.getElementById("discharge-button");
  dischargeButton.addEventListener("click", () => {
    electricVehicle.dischargeBattery();
  });

  // Sür butonu
  const driveButton = document.getElementById("drive-button");
  driveButton.addEventListener("click", () => {
    const distanceInput = document.getElementById("distance-input");
    const distance = parseFloat(distanceInput.value);
    electricVehicle.drive(distance);
    distanceInput.value = "";
  });

  // Bağlan butonu
  const connectButton = document.getElementById("connect-button");
  connectButton.addEventListener("click", () => {
    electricVehicle.connect();
  });

  // Bağlantıyı kes butonu
  const disconnectButton = document.getElementById("disconnect-button");
  disconnectButton.addEventListener("click", () => {
    electricVehicle.disconnect();
  });
});
