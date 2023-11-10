document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('cl_downloadcv').addEventListener('click', function () {
        var pdfUrl = 'assets/cv/CV - CRISTIAN.pdf';

        // Crea un elemento <a> temporal
        var link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'cv-cristian Lozano.pdf';

        // Agrega el elemento <a> al DOM y haz clic en él para iniciar la descarga
        document.body.appendChild(link);
        link.click();

        // Elimina el elemento <a> del DOM después de la descarga
        document.body.removeChild(link);
    });

})