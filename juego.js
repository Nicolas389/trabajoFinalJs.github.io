const ancho = 600;
const alto = 400;
var mapa = document.getElementById("imagen");
var resultado = document.getElementById("resultado");
var click = 0;

mapa.addEventListener('click', function(e) {
    var distancia = getDistance(e, target);
    var textoDistancia = getDistanceHint(distancia);
    console.log(distancia);
    click++;
    resultado.innerHTML = textoDistancia;
  })

// numero aleatorio
var getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // genera la distancia entre 2 puntos
  var getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  // Devuelve en texto lo cerca o lejos que se esta del tesoro 
  var getDistanceHint = distance => {
    if (distance < 20){
        return "Ganaste :D numero de clicks: " + click;
        location.reload();
    } else if (distance < 30) {
      return "Hirviendo";
    } else if (distance < 40) {
      return "Muy caliente";
    } else if (distance < 60) {
      return "Caliente";
    } else if (distance < 100) {
      return "Tibio";
    } else if (distance < 180) {
      return "Frio";
    } else if (distance < 360) {
      return "Muy frio";
    } else {
      return "Congelado..";
    }
  }

let target = {
    x: getRandomNumber(ancho), 
    y: getRandomNumber(alto)
};

console.log(target);
