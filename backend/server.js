const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const rutasTareas = require("./routes/tareasRoutes");
app.use("/api/tareas", rutasTareas);

app.get("/", (req, res) => {
    res.send("API Gestor Tareas PRO V2 funcionando");
});

app.listen(3000, () => console.log("Servidor v2 en puerto 3000"));