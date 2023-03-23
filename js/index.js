window.addEventListener("DOMContentLoaded", ()=> {
    
    let form = document.querySelector("#cal-aereo");
    form.addEventListener('change', () => {
        const select = document.querySelector('#destino-envio');
        const btnComprar  = document.querySelector('#btnAereo-comprar')
        let destino = select.value;

        if(destino === "mexico") {
            btnComprar.setAttribute(
                'href', 
                'https://enviosmx.jdgcargo.com/product/envios-aereos-a-mexico/'
            );
        }
    });
});