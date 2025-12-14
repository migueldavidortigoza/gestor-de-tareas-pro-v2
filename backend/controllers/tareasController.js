const fs = require("fs");
const path = require("path");

const dbRuta = path.join(__dirname, "..", "db", "tareas.json");

function leerDB() {
    return JSON.parse(fs.readFileSync(dbRuta, "utf8"));
}

function escribirDB(data) {
    fs.writeFileSync(dbRuta, JSON.stringify(data, null, 2));
}

exports.obtenerTareas = (req, res) => {
    const tareas = leerDB();
    res.json(tareas);
}; 

exports.crearTarea = (req, res) => {
    const tareas = leerDB();
    const nueva = {
        id: Date.now(),
        titulo: req.body.titulo,
        descripcion: req.body.descripcion || "",
        prioridad: req.body.prioridad,
        completa: false,
        fecha: new Date().toISOString()
    };

    tareas.push(nueva);
    escribirDB(tareas);
    res.json(nueva);
};

exports.actualizarTarea = (req, res) => {
    const tareas = leerDB();
    const id = Number(req.params.id);

    const index = tareas.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({ error: "Tarea no encontrada"});

    tareas[index] = { ...tareas[index], ...req.body };

    escribirDB(tareas);
    res.json(tareas[index]);
};

exports.borrarTarea = (req, res) => {
    const tareas = leerDB();
    const id = Number(req.params.id);

    const nuevas = tareas.filter(t => t.id !== id);

    escribirDB(nuevas);
    res.json({ mensaje: "Tarea eliminada" });
};