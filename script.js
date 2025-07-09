async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "a3e0cc61152e01beb1573ba14daae797";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const result = `
      <h3>${data.name}</h3>
      <p>${data.weather[0].description}</p>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
    document.getElementById("weatherResult").innerHTML = result;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "❌ Error fetching data. Please check city name.";
  }
}
