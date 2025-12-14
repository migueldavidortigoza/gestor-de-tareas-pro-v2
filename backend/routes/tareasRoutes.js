const express = require("express");
const router = express.Router();

const validarTarea = require("../middlewares/validarTarea");

const {
    obtenerTareas,
    crearTarea,
    actualizarTarea,
    borrarTarea
} = require("../controllers/tareasController");

router.get("/", obtenerTareas);
router.post("/", validarTarea, crearTarea);
router.put("/:id", validarTarea, actualizarTarea);
router.delete("/:id", borrarTarea);

module.exports = router;