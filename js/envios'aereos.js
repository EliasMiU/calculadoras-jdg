window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('cal-aereo')){
        let camPrecioEstimado = document.getElementById('precio-estimado');
        let iPesoVol = document.getElementById('peso-vol');
        let pesoMayor = document.getElementById('peso-mayor');
        let campoPiesCubicos = document.getElementById('pies-cubicos');
        let inputDestino = document.getElementById('destino-envio');
        let inputOrigen = document.getElementById('origen-envio');

        const estadosmx = [
            'Aguascalientes',
            'Baja California',
            'Baja California Sur',
            'Campeche',
            'Coahuila de Zaragoza',
            'Colima',
            'Chiapas',
            'Chihuahua',
            'Distrito Federal',
            'Durango',
            'Guanajuato',
            'Guerrero',
            'Hidalgo',
            'Jalisco',
            'México',
            'Michoacán de Ocampo',
            'Morelos',
            'Nayarit',
            'Nuevo León',
            'Oaxaca de Juárez',
            'Puebla',
            'Querétaro',
            'Quintana Roo',
            'San Luis Potosí',
            'Sinaloa',
            'Sonora',
            'Tabasco',
            'Tamaulipas',
            'Tlaxcala',
            'Veracruz de Ignacio de la Llave',
            'Yucatán',
            'Zacatecas',
        ];

        const estadosue = [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "District Of Columbia",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming",
        ]

        /* Poner Estados de Mexico */
        const insertOpSelect = (array, select) => {
            array.forEach( estado => {
                select.innerHTML += `<option value="5.75">${estado}</option>`;
            });
        }

        insertOpSelect(estadosmx, inputDestino);
        insertOpSelect(estadosue, inputOrigen);



        /**
         * Obtener el peso volumetris que se usa para
         * comparar pesos de calculo entre este y el peso real.
         */
        const obtenerPesos = () => {
            let vAlto = document.getElementById('alto').value;
            let vLargo = document.getElementById('largo').value;
            let vAncho = document.getElementById('ancho').value;
            let iPesoReal = parseFloat(document.getElementById('peso-real').value);
            
            /* Obtener el volumen */
            let volumen = vAlto*vLargo*vAncho;

            /* Obtener peso volumetrico */
            let pesoVolumetrico = volumen/166;

            /*Obtener peso para el calculo */
            let pesoMayor = iPesoReal > pesoVolumetrico ? iPesoReal : pesoVolumetrico;
            let pesosCalculos = [ pesoVolumetrico, pesoMayor]
            return pesosCalculos;
        }

        /**
         * Realizamos el calculo del precio estimado para los envios
         * a Venzuela
         */

        const calculoEnvioAereo = () => {
            let regionEnvio = parseFloat(document.getElementById('origen-envio').value);
            let pesos = obtenerPesos();
            
            camPrecioEstimado.value = (pesos[1]*regionEnvio).toFixed(2);
            iPesoVol.value = pesos[0].toFixed(2);
            pesoMayor.value = pesos[1].toFixed(2);
        }
        calculoEnvioAereo();

        /**
         * Funciones para las operaciones de los envios a mexico
         */

        /* Realizamos el calculo de los Pies Cubicos */

        const calPiesCubicos = () => {
            let iLargo = parseInt(document.getElementById('largo').value);
            let iAncho = parseInt(document.getElementById('ancho').value);
            let iAlto = parseInt(document.getElementById('alto').value);
            let dimensiones = iAlto*iAncho*iLargo;
            let piesCubico = dimensiones/1728;
            return piesCubico;
        }

        /**
         * Calculamos los montos de acuerdo a los pies cubicos de los paquetes
         */
        const calEnviosMexico = () => {
            let piesCubico = parseFloat(calPiesCubicos().toFixed(2));
            let pesos = obtenerPesos();
   
            // Verificacion de peso exedente
            const calculoCostoEnvio = (pesoSuperior, pesoLimite, tasa) => {
                if(pesoSuperior > pesoLimite) { // Verificamos si el peso supera el limite
                    let costoExtra = (pesoSuperior-pesoLimite)*2.75; //Sacamos el monto a sumer por execedente
                    let precioEstimado = parseInt((piesCubico*tasa).toFixed()); // Costo de envio
                    camPrecioEstimado.value = precioEstimado+costoExtra + ' USd';
                }else{
                    camPrecioEstimado.value = (piesCubico*tasa).toFixed() +' USD';
                }
            }

            if(piesCubico >= 0.01 && piesCubico <= 1.58 ) {
                if(pesos[1] > 17) {
                    let costoExtra = (pesos[1]-17)*2.75;
                    camPrecioEstimado.value = 55+costoExtra + ' USd';
                }else{
                    camPrecioEstimado.value = 55 +' USD';
                }
            }else if(piesCubico >= 1.59 && piesCubico <= 2.36){
                calculoCostoEnvio(pesos[1], 40, 47.23);
            }else if(piesCubico >= 2.37 && piesCubico <= 3.37){
                calculoCostoEnvio(pesos[1], 50, 45.98);
                //camPrecioEstimado.value = (piesCubico*45.98).toFixed() +' USD';
            }else if(piesCubico >= 3.38 && piesCubico <= 4.62){
                calculoCostoEnvio(pesos[1], 100, 44.44);
                //camPrecioEstimado.value = (piesCubico*44.44).toFixed() +' USD';
            }else if(piesCubico >= 4.63  && piesCubico <= 5.24){
                calculoCostoEnvio(pesos[1], 100, 43.20);
                //camPrecioEstimado.value = (piesCubico*43.20).toFixed() +' USD';
            }else if(piesCubico >= 5.25 && piesCubico <= 6.15){
                calculoCostoEnvio(pesos[1], 100, 42.86);
                //camPrecioEstimado.value = (piesCubico*42.86).toFixed() +' USD';
            }else if(piesCubico >= 6.16 && piesCubico <= 6.47){
                calculoCostoEnvio(pesos[1], 100, 40.57);
                //camPrecioEstimado.value = (piesCubico*40.57).toFixed() +' USD';
            }else if(piesCubico >= 6.48 && piesCubico <= 7.99){
                calculoCostoEnvio(pesos[1], 100, 39.34);
                //camPrecioEstimado.value = (piesCubico*39.34).toFixed() +' USD';
            }else if(piesCubico >= 8 && piesCubico <= 8.66){
                calculoCostoEnvio(pesos[1], 100, 37.50);
                //camPrecioEstimado.value = (piesCubico*37.50).toFixed() +' USD';
            }else if(piesCubico >= 8.67 && piesCubico <= 10.07){
                calculoCostoEnvio(pesos[1], 100, 36.92);
                //camPrecioEstimado.value = (piesCubico*36.92).toFixed() +' USD';
            }else {
                calculoCostoEnvio(pesos[1], 100, 32.23);
                //camPrecioEstimado.value = (piesCubico*32.23).toFixed() +' USD';
            }
            campoPiesCubicos.value = piesCubico;
            iPesoVol.value = pesos[0].toFixed(2);
            pesoMayor.value = pesos[1].toFixed(2);
        }

        document.getElementById('cal-aereo').addEventListener('change', () => {
            let selDestinoEnvio = document.getElementById('destino-envio').value;

            if (selDestinoEnvio === 'mexico') {
                calEnviosMexico();
            }else{
                calculoEnvioAereo();
            } 
        });
    }
});