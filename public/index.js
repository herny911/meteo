





 const btn = document.querySelector("#fetchWeatherBtn");
const input = document.querySelector("#cityInput");
const resultDiv = document.querySelector("#weatherResult");

btn.addEventListener("click", async () => {
  const city = input.value.trim();

  if (!city) {
    alert("Inserisci una città!");
    return;
  }

  try {
    const res = await fetch(`/api/meteo?city=${encodeURIComponent(city)}`);
    const data = await res.json();

    if (data.error) {
      resultDiv.innerHTML = `<p>${data.error}</p>`;
    } else {
      resultDiv.innerHTML = `
        <h2>${data.città}</h2>
        <h3>${data.temperatura} °C</h3>
        <h3>${data.descrizione}</h3>
      `;
    }
  } catch (err) {
    resultDiv.innerHTML = `<p>Errore nella connessione al server</p>`;
  }

});