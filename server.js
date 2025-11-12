import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();



const app = express();
const PORT = 3000;

// Serve i file statici dalla cartella public
app.use(express.static("public"));

app.get("/api/meteo", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_KEY;

  if (!city) {
    return res.status(400).json({ error: "Manca il parametro city" });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(404).json({ error: "Città non trovata" });
    }

    res.json({
      città: data.name,
      temperatura: data.main.temp,
      descrizione: data.weather[0].description,
    });
  } catch (err) {
    res.status(500).json({ error: "Errore nel server" });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server meteo attivo su http://localhost:${PORT}\nAPI: http://localhost:${PORT}/api/meteo?city=Pavia`)
);
