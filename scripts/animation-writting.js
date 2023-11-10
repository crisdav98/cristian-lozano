document.addEventListener('DOMContentLoaded', function () {
  const nombreEscrito = document.getElementById('cl_name');
  const nombreCompleto = "Cristian Lozano"; // Reemplaza con tu nombre

  let index = 0;

  function escribirNombre() {
    if (index < nombreCompleto.length) {
      nombreEscrito.textContent += nombreCompleto.charAt(index);
      index++;
      setTimeout(escribirNombre, 200); // Controla la velocidad de escritura
    }
  }
  setTimeout(escribirNombre, 1000)
});
