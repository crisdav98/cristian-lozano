document.addEventListener('DOMContentLoaded', function () {
    // Experience
    const contador = document.getElementById('cl_numexperience');
    const contador2 = document.getElementById('cl_numprojects');
    const numeroFinal = 4;
    const numeroFinal2 = 50;
    const duracionAnimacion = 5000; // Duración en milisegundos (5 segundos en este ejemplo)

    let valorContador = 0;
    let valorContador2 = 0;
    const incremento = numeroFinal / (duracionAnimacion / 1000);
    const incremento2 = numeroFinal / (duracionAnimacion / 1000);
    let intervalo;
    let intervalo2;

    function actualizarContador() {
        valorContador += incremento;
        if (valorContador >= numeroFinal) {
            valorContador = numeroFinal;
            clearInterval(intervalo);
        }
        contador.textContent = Math.floor(valorContador);
    }

    function actualizarProject() {
        valorContador2 += incremento2;
        if (valorContador2 >= numeroFinal2) {
            valorContador2 = numeroFinal2;
            clearInterval(intervalo2);
        }
        contador2.textContent = Math.floor(valorContador2);
    }

    setTimeout(() => {
        intervalo = setInterval(actualizarContador, 200);
        intervalo2 = setInterval(actualizarProject, 20);

    }, 4000)

});
