const API_URL = "http://localhost:3000/api/tareas";

/* ------------------------------
   1. Traer tareas del backend
------------------------------ */
async function cargarTareas() {
    const res = await fetch(API_URL);
    const data = await res.json();
    mostrarTareas(data);
}

/* --------------------------------
  2. Renderizado básico de tareas
-------------------------------- */
function mostrarTareas(lista) {
    const contenedor = document.querySelector("#lista-tareas");
    contenedor.innerHTML = "";

    lista.forEach(t => {
        const div = document.createElement("div");
        div.classList.add("tarea");
        div.innerHTML = `
            <h3>${t.titulo}</h3> 
            <p>${t.descripcion}</p>
            <p><strong>Prioridad:</strong> ${t.prioridad}</p>
            <button class="btn-editar">Editar</button>
            <button class="btn-eliminar">Eliminar</button>
        `;

        // BOTÓN EDITAR
        div.querySelector(".btn-editar").addEventListener("click", () => {
          abrirModal(t);
        });

        // BOTÓN ELIMINAR
        div.querySelector(".btn-eliminar").addEventListener("click", () => {
          borrarTarea(t.id);
        });

        contenedor.appendChild(div);
    });
}

/* -----------------------------
  3. Crear nueva tarea (POST) 
----------------------------- */
document.querySelector("#form-tarea").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const nuevaTarea = {
        titulo: document.querySelector("#titulo").value,
        descripcion: document.querySelector("#descripcion").value,
        prioridad: document.querySelector("#prioridad").value,
    };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaTarea),
    });

    cargarTareas();
    e.target.reset();
});

/* -----------------
  4. Borrar tarea
----------------- */
async function borrarTarea(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    cargarTareas();
}

/*------------------------
  5. Editar - abrir modal
------------------------ */
function abrirModal(tarea) {
    const modal = document.querySelector("#modal-editar");
    modal.classList.add("activo");

    document.querySelector("#edit-titulo").value = tarea.titulo;
    document.querySelector("#edit-descripcion").value = tarea.descripcion;
    document.querySelector("#edit-prioridad").value = tarea.prioridad;

    // guarda ID en un atributo del modal 
    document.querySelector("#form-editar").dataset.id = tarea.id;
}

/* ------------------------
  6.EDITAR - Cerrar modal
------------------------ */
document.querySelector("#modal-editar").addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = e.target.dataset.id;

    const datosEditados = {
        titulo: document.querySelector("#edit-titulo").value,
        descripcion: document.querySelector("#edit-descripcion").value,
        prioridad: document.querySelector("#edit-prioridad").value,
    };

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosEditados),
    });

    cerrarModal();
    cargarTareas();
});

/* -----------------
  7. Cerrar modal 
----------------- */
document.querySelector("#cancelar-edicion").addEventListener("click", cerrarModal);

function cerrarModal() {
    document.querySelector("#modal-editar").classList.remove("activo");
}

/* -------------------
   8. Iniciar la App
 ------------------- */
cargarTareas();