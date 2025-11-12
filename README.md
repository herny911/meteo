# Meteo App

Applicazione semplice che mostra le condizioni meteo di una città in tempo reale.  
Sviluppata con Node.js, Express e l’API di OpenWeather.

---

## Demo online
https://meteo-i143.onrender.com/

---

## Repository
https://github.com/herny911/meteo

---

## Descrizione

L’app consente di cercare il meteo inserendo il nome di una città e mostra temperatura, descrizione e icona.  
Le informazioni vengono tradotte automaticamente in italiano.  
La chiave API è gestita tramite variabili d’ambiente (.env) per non lasciarla nel codice.  

Questo progetto è stato creato per fare pratica con Node.js, Express e l’integrazione di API esterne.  

---

## Tecnologie
- Node.js  
- Express  
- OpenWeather API  
- HTML, CSS, JavaScript  
- dotenv  

---

## Come eseguirlo

1. Clonare il repository:
   ```bash
   git clone https://github.com/herny911/meteo.git

Clonare il repository:
git clone https://github.com/herny911/meteo.git

Entrare nella cartella:
cd meteo

Installare le dipendenze:
npm install

Creare un file .env nella root e inserire:
OPENWEATHER_KEY=tuachiavequi

Avviare il server:
npm start

Aprire il browser su:
http://localhost:3000


---
Struttura del progetto

meteo/
  public/
    index.html
    script.js
    style.css
  server.js
  package.json
  .gitignore
  .env (non incluso)
  
Note
Progetto personale sviluppato per esercitarmi con Node.js e l’utilizzo di API REST.
Fa parte del mio percorso di formazione come sviluppatore web junior.
