


document.addEventListener('DOMContentLoaded', () => {
    const superposicion = document.getElementById('superposicion');
    const notificacionCookies = document.getElementById('notificacion-cookies');
    const botonAceptarCookies = document.getElementById('aceptar-cookies');

    if (!localStorage.getItem('cookiesAceptadas')) {
        superposicion.style.display = 'flex';
    } else {
        superposicion.style.display = 'none';
    }

    botonAceptarCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAceptadas', true);
        superposicion.style.display = 'none';
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const botonDescargar = document.getElementById('boton-descargar');
    const confirmacionDescarga = document.getElementById('confirmacion-descarga');
    const contadorDescargas = document.getElementById('contador');
    const cargador = document.getElementById('cargador');

   
    let conteoDescargas = localStorage.getItem('conteoDescargas') || 0;
    contadorDescargas.textContent = conteoDescargas;

    botonDescargar.addEventListener('click', () => {
       
        cargador.style.display = 'inline-block';

        setTimeout(() => {
           
            cargador.style.display = 'none';

            
            conteoDescargas++;
            localStorage.setItem('conteoDescargas', conteoDescargas);
            contadorDescargas.textContent = conteoDescargas;

            
            confirmacionDescarga.style.display = 'block';

         
            window.location.href = './documentos/X.pdf';
        }, 2000);
    });
});





