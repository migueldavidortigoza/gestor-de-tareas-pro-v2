const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "..", "db", "tareas.json");

function  leer() {
    return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

function escribir(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

module.exports = { leer, escribir };