const weatherData = {
  "Panchayat A": { temperature:31.5, rainfall:22, humidity:75, wind:14, probability:78 },
  "Panchayat B": { temperature:32.4, rainfall:17, humidity:69, wind:12, probability:62 },
  "Panchayat C": { temperature:31.8, rainfall:25, humidity:79, wind:16, probability:84 }
};

function showWeather() {
  const panchayat = document.getElementById("panchayat").value;
  const data = weatherData[panchayat];

  document.getElementById("temperature").textContent = data.temperature;
  document.getElementById("rainfall").textContent = data.rainfall;
  document.getElementById("humidity").textContent = data.humidity;
  document.getElementById("wind").textContent = data.wind;
  document.getElementById("probability").textContent = data.probability;
  document.getElementById("weatherLocation").textContent = panchayat;

  const advisory = document.getElementById("advisory");
  const icon = document.getElementById("weatherIcon");

  if (data.probability >= 80) {
    advisory.textContent = "⚠️ Heavy rainfall expected. Take necessary precautions.";
    icon.textContent = "🌧️";
  } else if (data.probability >= 60) {
    advisory.textContent = "🌧 Rain possible. Monitor weather conditions.";
    icon.textContent = "🌦️";
  } else {
    advisory.textContent = "☀️ Low chance of rainfall.";
    icon.textContent = "☀️";
  }

  document.getElementById("weather").classList.remove("weather-update");
  void document.getElementById("weather").offsetWidth;
  document.getElementById("weather").classList.add("weather-update");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("panchayat").addEventListener("change", showWeather);
  showWeather();
});
