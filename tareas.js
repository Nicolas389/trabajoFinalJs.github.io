var Nombre = document.getElementById("nombreTarea"),
  Descripcion = document.getElementById("descripcionTarea");

function tareaNueva() {
  let title = Nombre.value;
  let description = Descripcion.value;

  let task = {
    title,
    description,
  };

  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.unshift(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.unshift(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  location.reload();
}

function CrearTarea(){
    let divTarea = document.getElementById("sectorTareas")
    let tareas = JSON.parse(localStorage.getItem('tasks'));
    divTarea.innerHTML = '';

    for(i = 0; i < tareas.length; i++){
        console.log(tareas[i]);
        let titulo = tareas[i].title;
        let descripcion = tareas[i].description;

        
    divTarea.innerHTML += `<div class="row">
    <div class="col" id="tarea">
      <h5 id="titulo" style="color: #056a2c" > ${titulo.toUpperCase()} </h5>
      <p id="descripcion">${descripcion} </p>
      <button class="btn btn-danger" onclick="borrarTarea('${titulo}')">BORRAR</button>
    </div>
  </div>`};

}


function borrarTarea(title) {
    console.log(title)
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].title == title) {
        tasks.splice(i, 1);
      }
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    CrearTarea();

    location.reload();
  }
  


CrearTarea();
