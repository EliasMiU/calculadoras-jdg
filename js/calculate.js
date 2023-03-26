window.addEventListener('DOMContentLoaded', () => {
    if( document.getElementById('cal-maritimo') ){
        let iDimensiones = document.getElementById('fts');
        let iPiesCubico = document.getElementById('piesCubico');
        let iPreEstimado = document.getElementById('pre-estimado');
        const formCalMarit =  document.getElementById('cal-maritimo');

        /**
         * CALCULO DE LA DIMENSIONES DEL 
         * 
         * Obtenemos los valores de los input en: iLargo, iAncho, iAlto.
         * Calculamos el Volumen
         * Obtenemos el Peso Volumetrico
         * Registramos en un matriz los daos para sacarlos de la Funcion
         */

        const calculoPiesCubicos = () => {
            let iLargo = parseInt(document.getElementById('inputLargo').value);
            let iAncho = parseInt(document.getElementById('inputAncho').value);
            let iAlto = parseInt(document.getElementById('inputAlto').value);
            let pesoReal = document.getElementById('pesoReal').value;
            let volumen = iAlto*iAncho*iLargo; 
            let pesoVol = volumen/1728;
            console.log(pesoVol);
            let pesoMayor = pesoReal > pesoVol ? pesoReal : pesoVol;
            let piesDatos = [volumen, pesoVol, pesoMayor];

            return piesDatos;
        }

        /**FUNC TO CALC PRICE ENVIOS MARITIMOS*/

        function calculoEnvio(){
            let iOrigen = parseInt(document.getElementById('select-origen').value);
            let iDestino = parseInt(document.getElementById('select-destino').value);
            let areas = calculoPiesCubicos();
            let dimensiones = areas[0];
            let piesCubico = areas[1];

            let precioEstimado;

            if ( (piesCubico > 0.01) && (piesCubico < 2.85) ){
                if ( iOrigen === 0 ) { 
                    if (iDestino === 0) {
                        precioEstimado = piesCubico*15.04; 
                    }else{
                        precioEstimado = piesCubico*18.79;
                    }
                } else if ( (iOrigen === 1) || (iOrigen === 2) ) { 
                    if (iDestino === 0) { 
                        precioEstimado = piesCubico*30.07;
                    }else{
                        precioEstimado = piesCubico*41.35;
                    }
                } else if (iOrigen === 3 ) { 
                    if (iDestino === 0) {
                        precioEstimado = piesCubico*18.79;
                    }else{
                        precioEstimado = piesCubico*21.05;
                    }
                } else if( iOrigen === 4){
                    precioEstimado = piesCubico*100;
                }
            } else if (piesCubico >= 2.86 && piesCubico <= 4 ) {
                if ( iOrigen === 0 ) { 
                    if (iDestino === 0) { 
                        precioEstimado = piesCubico*15.33; 
                    }else{
                        precioEstimado = piesCubico*19.33;
                    }
                } else if ( (iOrigen === 1) || (iOrigen === 2) ) { 
                    if (iDestino === 0) { 
                        precioEstimado = piesCubico*30;
                    }else{
                        precioEstimado = piesCubico*38.33;
                    }
                } else if (iOrigen === 3 ) { 
                    if (iDestino === 0) { 
                        precioEstimado = piesCubico*18.33;
                    }else{
                        precioEstimado = piesCubico*22.33;
                    }
                } else if(iOrigen === 4){
                    precioEstimado = piesCubico*82.70676691729323;
                }
            } else if ( piesCubico > 4 && piesCubico <= 6  ) {
                if ( iOrigen === 0 ) { 
                    if (iDestino === 0) {
                        precioEstimado = piesCubico*14.87; 
                    }else{
                        precioEstimado = piesCubico*18.88;
                    }
                } else if ( (iOrigen === 1) || (iOrigen === 2) ) {
                    if (iDestino === 0) {
                        precioEstimado = piesCubico*31.11;
                    }else{
                        precioEstimado = piesCubico*36.66;
                    }
                } else if (iOrigen === 3 ) { 
                    if (iDestino === 0) {
                        precioEstimado = piesCubico*17.87;
                    }else{
                        precioEstimado = piesCubico*22;
                    }
                } else if (iOrigen === 4){
                    precioEstimado = piesCubico*43.333333333333333;
                }
            } else if(piesCubico > 6 && piesCubico < 8) {
                if ( iOrigen === 0 ) {
                    if (iDestino === 0) { 
                        precioEstimado = piesCubico*16; 
                    }else{
                        precioEstimado = piesCubico*19;
                    }
                } else if ( (iOrigen === 1) || (iOrigen === 2) ) { 
                    if (iDestino === 0) { 
                        precioEstimado = piesCubico*31.11;
                    }else{
                        precioEstimado = piesCubico*36.66;
                    }
                } else if (iOrigen === 3 ) { 
                    if (iDestino === 0) {
                        precioEstimado = piesCubico*19;
                    }else{
                        precioEstimado = piesCubico*22;
                    }
                } else if (iOrigen === 4) {
                    precioEstimado = piesCubico*45.7516339869281;
                }
            } else {
                if ( iOrigen === 0 ) {
                    if (iDestino === 0) { 
                        precioEstimado = piesCubico*16; 
                    }else{
                        precioEstimado = piesCubico*19;
                    }
                } else if ( (iOrigen === 1) || (iOrigen === 2) ) { 
                    if (iDestino === 0) { 
                        precioEstimado = piesCubico*31.11;
                    }else{
                        precioEstimado = piesCubico*36.66;
                    }
                } else if (iOrigen === 3 ) { 
                    if (iDestino === 0) {
                        precioEstimado = piesCubico*19;
                    }else{
                        precioEstimado = piesCubico*22;
                    }
                } else if (iOrigen === 4) {
                    precioEstimado = piesCubico*40;
                }
            }
            
            iPreEstimado.value = precioEstimado.toFixed(2) + ' USD';
            iDimensiones.value = dimensiones + ' in';
            iPiesCubico.value = parseFloat( piesCubico.toFixed(2) ) + ' Ft3';
        }

        calculoEnvio();

        formCalMarit.addEventListener('change', e => {
            calculoEnvio();
            
        });
    }
    
    /**CALCULO TARIFAS PARA ENVIOS AEREOS*/
    if(document.getElementById('cal-aereo')){
        let camPrecioEstimado = document.getElementById('precio-estimado');
        let iPesoVol = document.getElementById('peso-vol');
        let pesoMayor = document.getElementById('peso-mayor');
        let campoPiesCubicos = document.getElementById('pies-cubicos');

        /** OPTENER PESO VOL Y COMPARAR CON PESO REAL*/
        const obtenerPesos = () => {
            let vAlto = document.getElementById('alto').value;
            let vLargo = document.getElementById('largo').value;
            let vAncho = document.getElementById('ancho').value;
            let iPesoReal = parseFloat(document.getElementById('peso-real').value); 
        
            let volumen = vAlto*vLargo*vAncho;
            let pesoVolumetrico = volumen/166;
            let pesoMayor = iPesoReal > pesoVolumetrico ? iPesoReal : pesoVolumetrico;
            let pesosCalculos = [ pesoVolumetrico, pesoMayor];

            return pesosCalculos;
        }


        /*CALC PIES CUBICOS*/
        const calPiesCubicos = () => {
            let iLargo = parseInt(document.getElementById('largo').value);
            let iAncho = parseInt(document.getElementById('ancho').value);
            let iAlto = parseInt(document.getElementById('alto').value);
            let dimensiones = iAlto*iAncho*iLargo;
            let piesCubico = dimensiones/1728;
            return piesCubico;
        }


        /**CALC PRECIOS TO VENEZUELA*/
        const calculoEnvioAereo = () => {
            let regionEnvio = parseFloat(document.getElementById('origen-envio').value);
            let piesCubico = parseFloat(calPiesCubicos().toFixed(2));
            let pesos = obtenerPesos();
            
            camPrecioEstimado.value = (pesos[1]*regionEnvio).toFixed(2);
            iPesoVol.value = pesos[0].toFixed(2);
            pesoMayor.value = pesos[1].toFixed(2);
            campoPiesCubicos.value = piesCubico;
        }
        calculoEnvioAereo();

        /**FUNC ENVIOS TO MEXICO - PRECIO ESTIMADOS*/
        const calEnviosMexico = () => {
            let piesCubico = parseFloat(calPiesCubicos().toFixed(2));
            let pesos = obtenerPesos();
   
            const calculoCostoEnvio = (pesoSuperior, pesoLimite, tasa) => {
                /**VERIFICAMOS SI HAY PESO EXCEDENTE */
                if(pesoSuperior > pesoLimite) { 
                    let costoExtra = (pesoSuperior-pesoLimite)*1.25; 
                    let precioEstimado = parseInt((piesCubico*tasa).toFixed());
                    camPrecioEstimado.value = precioEstimado+costoExtra + ' USd';
                }else{
                    camPrecioEstimado.value = (piesCubico*tasa).toFixed() +' USD';
                }
            }

            if(piesCubico >= 0.01 && piesCubico <= 1.58 ) {
                if(pesos[1] > 25) {
                    let costoExtra = (pesos[1]-25)*1.25;
                    camPrecioEstimado.value = 55+costoExtra + ' USd';
                }else{
                    camPrecioEstimado.value = 55 +' USD';
                }
            }else if(piesCubico >= 1.59 && piesCubico <= 2.36){
                calculoCostoEnvio(pesos[1], 40, 47.23);
            }else if(piesCubico >= 2.37 && piesCubico <= 3.37){
                calculoCostoEnvio(pesos[1], 50, 45.98);
            }else if(piesCubico >= 3.38 && piesCubico <= 4.62){
                calculoCostoEnvio(pesos[1], 100, 44.44);
            }else if(piesCubico >= 4.63  && piesCubico <= 5.24){
                calculoCostoEnvio(pesos[1], 100, 43.20);
            }else if(piesCubico >= 5.25 && piesCubico <= 6.15){
                calculoCostoEnvio(pesos[1], 100, 42.86);
            }else if(piesCubico >= 6.16 && piesCubico <= 6.47){
                calculoCostoEnvio(pesos[1], 100, 40.57);
            }else if(piesCubico >= 6.48 && piesCubico <= 7.99){
                calculoCostoEnvio(pesos[1], 100, 39.34);
            }else if(piesCubico >= 8 && piesCubico <= 8.66){
                calculoCostoEnvio(pesos[1], 100, 37.50);
            }else if(piesCubico >= 8.67 && piesCubico <= 10.07){
                calculoCostoEnvio(pesos[1], 100, 36.92);
            }else {
                calculoCostoEnvio(pesos[1], 100, 32.23);
            }
            campoPiesCubicos.value = piesCubico;
            iPesoVol.value = pesos[0].toFixed(2);
            pesoMayor.value = pesos[1].toFixed(2);
        }

        document.getElementById('cal-aereo').addEventListener('change', () => {
            let selDestinoEnvio = document.getElementById('destino-envio').value;
            let btnComprar = document.querySelector('#btnAereo-comprar');

            if (selDestinoEnvio === 'mexico') {
                calEnviosMexico();
                btnComprar.setAttribute('href', 'https://enviosmx.jdgcargo.com/product/envios-aereos-a-mexico/');
            }else{
                calculoEnvioAereo();
                btnComprar.setAttribute('href', 'http://tienda.jdgcargo.com/product/envios-aereos-a-venezuela/');
            } 
        });
    }
});