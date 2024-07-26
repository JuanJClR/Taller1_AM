function init() {
  var teclas = document.getElementById("teclado").getElementsByClassName("tecla");
  var teclasArray = Array.prototype.slice.call(teclas);
  var claveInput = document.getElementById("clave");
  var clave = [];

  var valores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (var i = 0; i < teclasArray.length - 1; i++) {
    var indice = Math.floor(Math.random() * valores.length);
    teclasArray[i].value = valores[indice];
    valores.splice(indice, 1);
  }
  teclasArray[teclasArray.length - 1].value = "Borrar";


  for (var i = 0; i < teclasArray.length; i++) {
    teclasArray[i].addEventListener("click", function() {
      if (!this.classList.contains("borrar")) {
        clave.push(this.getAttribute("data-original-value"));
        claveInput.value = clave.join("");
      } else {
        clave.pop();
        claveInput.value = clave.join("");
      }
    });
    teclasArray[i].addEventListener("mouseover", function() {
      for (var j = 0; j < teclasArray.length; j++) {
        if (!teclasArray[j].classList.contains("borrar")) {
          teclasArray[j].setAttribute("data-original-value", teclasArray[j].value);
          teclasArray[j].value = "*";
        }
      }
    });
    teclasArray[i].addEventListener("mouseout", function() {
      for (var j = 0; j < teclasArray.length; j++) {
        if (!teclasArray[j].classList.contains("borrar")) {
          teclasArray[j].value = teclasArray[j].getAttribute("data-original-value");
        }
      }
    });
    if (!teclasArray[i].classList.contains("borrar")) {
      teclasArray[i].setAttribute("data-original-value", teclasArray[i].value);
    }
  }
}

init();