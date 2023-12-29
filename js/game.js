const $btnColor = document.getElementById("btn-color");
const $obj = document.getElementById("container");
const $objNext = document.getElementById("container-next");
const $cambiaForma = document.getElementById("cambiaForma");
const $select = document.getElementById("selectColor");
const $contador = document.querySelector("#contador span");
const $displayNext = document.querySelector(".display-next span");
const $information = document.getElementById("information");

// variables
const colors = [
  "lime",
  "white",
  "teal",
  "silver",
  "gray",
  "red",
  "navy",
  "yellow",
  "green",
  "olive",
  "blue",
  "aqua",
  "linear-gradient(190deg, #f8ff00 0%, #09f 100%)",
];
let indexActual = 0;
// variables

$objNext.style.background = colors[indexActual];
// Eventos
document.addEventListener("click", (e) => {
  if (e.target === $btnColor || e.target === $obj) cambiarColor();
  else if (e.target === $objNext) cambiarColor();
  else if (e.target === $cambiaForma) cambiarForma();
});

document.addEventListener("change", (e) => {
  if (e.target === $select) cambiarColor($select.value);
});
// Eventos

//functions
const cambiarColor = (color = null) => {
  if (color !== null && colors.indexOf(color) != -1) {
    indexActual = colors.indexOf(color);
  }
  setTimeout(
    () =>
      console.log(
        `Cambiando Color de ${colors[indexActual]} => ${
          colors[indexActual + 1]
        }`
      ),
    500
  );

  $select.value = colors[indexActual];
  $select.style.backgroundColor = colors[indexActual];
  $obj.style.background = colors[indexActual];
  $btnColor.style.color = $select.value;

  indexActual = indexActual < colors.length ? ++indexActual : 0;
  $objNext.style.background = colors[indexActual];
  $displayNext.textContent = colors[indexActual];
  $displayNext.parentElement.style.color = colors[indexActual];
};
const cambiarForma = () => {
  if ($obj.classList.contains("cuadrado")) {
    $obj.classList.remove("cuadrado");
    $obj.classList.add("circulo");
  } else {
    $obj.classList.remove("circulo");
    $obj.classList.add("cuadrado");
  }
};
const cargaColores = () =>
  colors.forEach((color) => {
    let opcion = document.createElement("option");
    opcion.value = color;
    opcion.text = color.toUpperCase();
    opcion.style.background = color;
    $select.appendChild(opcion);
  });

let interval;
let velocidad = 100;
let MaxValue = 25;
let vuelta = 0;

function InicializaContador() {
  interval = setInterval(() => {
    ActualizaContador();
    cambiaVelocidad();
  }, velocidad);
}

function ActualizaContador() {
  $contador.textContent = vuelta.toString();
  ++vuelta;
  if (vuelta >= MaxValue) {
    clearInterval(interval);
    $contador.parentElement.style.visibility = "hidden";
  }
}
function cambiaVelocidad() {
  if (vuelta >= Math.round(MaxValue / 2)) {
    clearInterval(interval);
    velocidad *= 2;
    interval = setInterval(ActualizaContador, velocidad);
  }
  console.log(`Velocidad Actual: ${velocidad} Vuelta: ${vuelta}`);
}

const getDataNavigation = () => {
  $information.textContent =`Usuario Activo: ${navigator.userActivation.hasBeenActive} `;
$information.textContent += document.childElementCount;
$information.textContent += document.documentURI;
 
};
document.addEventListener("DOMContentLoaded", (e) => {
  cargaColores();
  cambiarColor($select.value);
  InicializaContador();
  getDataNavigation();
});


