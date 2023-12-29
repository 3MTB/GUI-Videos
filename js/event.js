const $info = document.getElementById("info");
const $spaninfo = document.querySelector("#info span");
const $display = document.getElementById("display");

addEventListener("offline", () => {
  creaAvisos("Pobre, no tienes conexion");
});
addEventListener("online", () => {
  creaAvisos("Bien,tienes conexion");
});
addEventListener("orientationchange", () => {
  creaAvisos("Quien te mando a mover el dispositivo?");
});

$info.addEventListener("drag", (e) => {
  creaAvisos(
    `Event Drag:: Mijo y es suyo este texto para estar moviendolo:::: ${document.getSelection()}`
  );
});
$info.addEventListener("copy", (e) => {
  creaAvisos(`Copiador de texto encontrado😡:::: ${document.getSelection()}`);
});
$info.addEventListener("copy", (e) => {
  creaAvisos(`Cortador de texto encontrado😡:::: ${document.getSelection()}`);
});
$info.addEventListener("mousedown", (e) => {
  creaAvisos("Mouse Down");
});

function creaAvisos(text = "Evento anonimo XD") {
  let aviso = document.createElement("li");
  aviso.textContent = text;
  $display.appendChild(aviso);
  $spaninfo.textContent = $display.childElementCount;
}
