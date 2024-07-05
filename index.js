import express from "express";
const app = express();
const port = 3000;

import artistas from "./controllers/artistas.js";
import albumes from "./controllers/albumes.js";
import canciones from "./controllers/canciones.js";

app.use(express.json());

app.get("/", (_, res) => {

    res.send("SpoTICfy API working!");
});


//artistas:

    app.get("/artistas", artistas.getartistas);
    app.get("/artistas/:id", artistas.getartistas);
    app.post("/artistas", artistas.postartistas);
    app.put("/artistas/:id", artistas.putartistas);
    app.del("/artistas/:id", artistas.delartistas);
    app.get("/artistas/:id/canciones", artistas.getartistas);

//Albumes:

    app.get("/albumes", albumes.getalbumes);
    app.get("/albumes/:id", albumes.getalbumes);
    app.post("/albumes", albumes.postalbumes);
    app.put("/albumes/:id", albumes.putalbumes);
    app.del("/albumes/:id", albumes.delalbumes);
    app.get("/albumes/:id/canciones", albumes.getalbumes);

//Canciones:

    app.get("/canciones", canciones.getcanciones);
    app.get("/canciones/:id", canciones.getcanciones);
    app.post("/canciones", canciones.postcanciones);
    app.put("/canciones/:id", canciones.putcanciones);
    app.del("/canciones/:id", canciones.delcanciones);
    app.get("/canciones/:id/reproducir", canciones.getcanciones);
