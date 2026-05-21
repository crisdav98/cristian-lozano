document.addEventListener('DOMContentLoaded', function () {
    const contador = document.getElementById('cl_numexperience');
    const numeroFinal = 6;
    const duracionAnimacion = 3000;

    let valorContador = 0;
    const incremento = numeroFinal / (duracionAnimacion / 200);
    let intervalo;

    function actualizarContador() {
        valorContador += incremento;
        if (valorContador >= numeroFinal) {
            valorContador = numeroFinal;
            clearInterval(intervalo);
        }
        contador.textContent = Math.floor(valorContador);
    }

    setTimeout(() => {
        intervalo = setInterval(actualizarContador, 200);
    }, 2500);
});
