document.addEventListener("DOMContentLoaded", ()=>{
    if(document.getElementById("cal-aereo")){
        let fieldPrecioEstimado=document.getElementById("precio-estimado"),
        fieldPesoVol=document.getElementById("peso-vol"),
        fieldPesoMayor=document.getElementById("peso-mayor"),
        fieldPiesCubicos=document.getElementById("pies-cubicos"),
        fieldMontoMercancia=document.getElementById("costoEnvio"),
        selectDestino=document.getElementById("destino-envio"),
        fieldImportFree=document.getElementById("importFree"),
        fieldSeguro=document.getElementById("seguro"),
        fieldIntermediacion=document.getElementById("intermediacion");
        console.log("Esto esta cargando la calculadora Aerea");
    
        let calcPesos=()=>{
            let fieldAlto=document.getElementById("alto").value,
            fieldLargo=document.getElementById("largo").value,
            fieldAncho=document.getElementById("ancho").value,
            fielPesoReal=parseFloat(document.getElementById("peso-real").value),
            pesoVolumetrico = fieldAlto*fieldLargo*fieldAncho/166,
            pesoMayor=fielPesoReal > pesoVolumetrico?fielPesoReal:pesoVolumetrico;
            return[pesoVolumetrico, pesoMayor]
        },
        
        piesCubicos=()=>{
            let e=parseInt(document.getElementById("largo").value),t=parseInt(document.getElementById("ancho").value);
            return parseInt(document.getElementById("alto").value)*t*e/1728
        };
    
        E=()=>{
            let selectOrigenEnvio = document.getElementById("origen-envio").value,
              t=parseFloat(piesCubicos().toFixed(2)),
              arrayPesos=calcPesos();

              if(selectDestino.value==="colombia"){
                let mercancia=fieldMontoMercancia.value===null?100:fieldMontoMercancia.value;
                let montoEnvio=parseFloat(arrayPesos[1]*1.95);
                let intermediacion=parseFloat(arrayPesos[1]*0.25);
                let importFree=parseFloat(arrayPesos[1]*0.50);
                let seguroEnvio=parseFloat(mercancia*0.10);
                let costEnvio=(montoEnvio+seguroEnvio+intermediacion+importFree).toFixed(2)
                if(costEnvio<42){
                  costEnvio=42
                }
                fieldPrecioEstimado.value=costEnvio;
                fieldIntermediacion.value=intermediacion.toFixed(2);
                fieldSeguro.value=seguroEnvio;
                fieldImportFree.value=importFree.toFixed(2)
                } else if(selectDestino.value==="costa") {
                    switch(selectOrigenEnvio){
                        case "miami":fieldPrecioEstimado.value=parseFloat(arrayPesos[1]*10).toFixed(2);
                        break;
                        case "westFlorida":fieldSeguro.value=parseFloat(arrayPesos[1]*11).toFixed(2);
                        break;
                        case "newEngland":fieldPrecioEstimado.value=parseFloat(arrayPesos[1]*12).toFixed(2);
                        break;
                        case "otros":fieldPrecioEstimado.value=parseFloat(arrayPesos[1]*13).toFixed(2);
                        break
                    }
                }else{
                    switch(selectOrigenEnvio){
                        case "miami":fieldPrecioEstimado.value=parseFloat(arrayPesos[1]*5).toFixed(2);
                        break;
                        case "westFlorida":fieldPrecioEstimado.value=parseFloat(arrayPesos[1]*8.5).toFixed(2);
                        break;
                        case "newEngland":fieldPrecioEstimado.value=parseFloat(arrayPesos[1]*8.5).toFixed(2);
                        break;
                        case "otros":fieldPrecioEstimado.value=parseFloat(arrayPesos[1]*9).toFixed(2);
                        break
                    }
                }
                fieldPesoVol.value=arrayPesos[0].toFixed(2);
                fieldPesoMayor.value=arrayPesos[1].toFixed(2);
                fieldPiesCubicos.value=t
            };
    
        E();
    
        let mostrarFieldsColombia=()=>{
            let destino=selectDestino.value;
            if(destino==="colombia"){
              document.getElementById("fieldsColombia").style.display="block"
            }else{
              document.getElementById("fieldsColombia").style.display="none"
            }
        }
    
    
        let calculoEnvioMx=()=>{
            console.log("**Entrando al calculo de envios aereos");
            let piesCubico = parseFloat(piesCubicos().toFixed(2)),
            pesos = calcPesos(),
            
            calculoCostoEnvio=(peso, pesoLimite, tasa)=>{
                if(peso > pesoLimite){
                    let n = (peso-pesoLimite)*2,
                    o = parseInt((e*tasa).toFixed());
                    fieldPrecioEstimado.value=o+n+" USD"
                    console.log("Dato n: "+n);
                    console.log("Dato o: "+o);
                    console.log("Dato peso: "+peso);
                    console.log("Dato Peso limite: "+pesoLimite);
                } else fieldPrecioEstimado.value=(piesCubico*tasa).toFixed()+" USD";

                console.log("Peso: "+ peso +"; Peso Limite: "+pesoLimite);
                console.log("Precio: "+(piesCubico*tasa));
            };

            if(piesCubico >= 0.01 && piesCubico <= 1.58 ) {
                if(pesos[1] > 22) {
                    let costoExtra = (pesos[1]-17)*2.50;
                    fieldPrecioEstimado.value = 55+costoExtra + ' USd';
                }else{
                    fieldPrecioEstimado.value = 55 +' USD';
                }
            }else if(piesCubico >= 1.59 && piesCubico <= 2.36){
                calculoCostoEnvio(pesos[1], 40, 48.23);
            }else if(piesCubico >= 2.37 && piesCubico <= 3.37){
                calculoCostoEnvio(pesos[1], 50, 45.98);
            }else if(piesCubico >= 3.38 && piesCubico <= 4.44){
                calculoCostoEnvio(pesos[1], 100, 47.33);
            }else if(piesCubico >= 4.45 && piesCubico <= 4.62){
                calculoCostoEnvio(pesos[1], 100, 48.88);
            }else if(piesCubico >= 4.63  && piesCubico <= 5.24){
                calculoCostoEnvio(pesos[1], 100, 43.20);
            }else if(piesCubico >= 5.25 && piesCubico <= 5.80){
                calculoCostoEnvio(pesos[1], 100, 52.39);
            }else if(piesCubico >= 5.81 && piesCubico <= 6.47){
                calculoCostoEnvio(pesos[1], 100, 47.95);
            }else if(piesCubico >= 6.48 && piesCubico <= 7.99){
                calculoCostoEnvio(pesos[1], 100, 46.29);
            }else if(piesCubico >= 8 && piesCubico <= 8.66){
                calculoCostoEnvio(pesos[1], 100, 37.50);
            }else if(piesCubico >= 8.67 && piesCubico <= 10.07){
                calculoCostoEnvio(pesos[1], 100, 44.98);
            }else {
                calculoCostoEnvio(pesos[1], 100, 32.23);
            }

            fieldPiesCubicos.value=piesCubico,
            fieldPesoVol.value=pesos[0].toFixed(2),
            fieldPesoMayor.value=pesos[1].toFixed(2)
        };
    
        document.getElementById("cal-aereo").addEventListener("change",() => {
            mostrarFieldsColombia();
            let e=document.getElementById("destino-envio").value,
                t=document.querySelector("#btnAereo-comprar");
        
            "mexico"=== e ? calculoEnvioMx() : E();
        });

        }
});

