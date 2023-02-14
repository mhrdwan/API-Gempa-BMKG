const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api", async (req, res) => {
  try {
    const response = await axios.get(
      "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json"
    );
    const data = response.data.Infogempa.gempa;
    res.header("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3000");
});
