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
  


  (function () {
    var actualizarHora = function () {
      var fecha = new Date();
      // reloj
      var hora = fecha.getHours(),
        minuto = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        ampm = " ";
      if (hora <= 11) {
        ampm = "AM";
      } else {
        ampm = "PM";
      }
      if (hora == 0) {
        hora = "00";
      }
      if (minuto < 10) {
        minuto = "0" + fecha.getMinutes();
      }
  
      if (segundos < 10) {
        segundos = "0" + fecha.getSeconds();
      }
  
      //fecha
      var dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear(),
        nombreDia = fecha.getDay();
  
      // arrays
      var dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ];
      var meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
  
      // p
      var tiempo = document.getElementById("hora");
      var fecha = document.getElementById("fecha");
  
      //paso de valores
      tiempo.innerHTML = hora + " : " + minuto + " : " + segundos + " " + ampm;
      fecha.innerHTML =
        dias[nombreDia] + " " + dia + " de " + meses[mes] + " del " + year;
    };
  
    actualizarHora();
  
    var intervalo = setInterval(actualizarHora, 1000);
  })();

CrearTarea();
