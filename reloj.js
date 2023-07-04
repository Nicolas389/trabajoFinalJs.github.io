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

function cambiarModoOscuro() {
  //var
  var botonOscuro = document.getElementById("botonOscuro"),
    botonClaro = document.getElementById("botonClaro"),
    tiempo = document.getElementById("hora"),
    fecha = document.getElementById("fecha"),
    cuerpo = document.getElementById("body"),
    titulo = document.getElementById("titulo"),
    conFecha = document.getElementById("contenedorFecha"),
    conHora = document.getElementById("contenedorHora"),
    volver = document.getElementById("volverInicio");

  botonOscuro.style.display = "none";
  botonClaro.style.display = "inline";
  titulo.innerHTML = "Shhh.. Canelita esta durmiendo, no la molestes...";
  titulo.style.color = "white";
  tiempo.style.color = "#14731C";
  fecha.style.color = "#14731C";
  conFecha.style.backgroundColor = "rgba(40, 7, 94, .5)";
  conHora.style.backgroundColor = "rgba(40, 7, 94, .5)";
  volver.style.color= "#14731C";

  cuerpo.style.backgroundImage = "url('./source/noche.jpg')";
  
}

function cambiarModoClaro() {
  var botonOscuro = document.getElementById("botonOscuro"),
    botonClaro = document.getElementById("botonClaro"),
    tiempo = document.getElementById("hora"),
    fecha = document.getElementById("fecha"),
    cuerpo = document.getElementById("body"),
    titulo = document.getElementById("titulo"),
    conFecha = document.getElementById("contenedorFecha"),
    conHora = document.getElementById("contenedorHora"),
    volver = document.getElementById("volverInicio");

  botonOscuro.style.display = "inline";
  botonClaro.style.display = "none";
  titulo.innerHTML = "¿Te molesta la luz? Cambia al modo oscuro.";
  titulo.style.color = "black";
  tiempo.style.color = "rgb(122, 12, 0)";
  fecha.style.color = "rgb(122, 12, 0)";
  conFecha.style.backgroundColor = "rgba(0, 0, 0, .5)";
  conHora.style.backgroundColor = "rgba(0, 0, 0, .5)";
  volver.style.color= "rgba(40, 7, 94)";

  cuerpo.style.backgroundImage = "url('./source/dia.jpg')";
}

(function () {
  var definirEstilo = function () {
    var f = new Date(),
    hora = f.getHours();

    if (hora <= 19 && hora >= 6) {

      cambiarModoClaro();

    }else{
      
      cambiarModoOscuro();
      
    }   

  };
  
  definirEstilo();
  
})();
