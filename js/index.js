let $list = document.getElementById("list");
for (let i = 0; i <= 12; i++) {
  for (let j = 0; j <= 12; j++) {
    let $li = document.createElement("li");
    $li.textContent = `${i} x ${j} : ${i * j}`;
    $list.appendChild($li);
  }
  $list.appendChild(document.createElement("br"));
}
window.addEventListener('focus', ()=> document.title = 'Thanks');
window.addEventListener('blur', ()=> {
  document.title = 'Vuelve HP';
});
