/*if(document.getElementById("cal-aereo")){
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
        let selectOrigenEnvio=document.getElementById("origen-envio").value
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
            }else if(selectDestino.value==="costa"){
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
      }*/

      /*let calculoEnvioMx=()=>{
        console.log("**Entrando al calculo de envios aereos")
        let e = parseFloat(piesCubicos().toFixed(2)),
            pesos = calcPesos(),
            
            a=(peso, pesoLimite, tasa)=>{
              if(peso > pesoLimite){
                let n = (peso-pesoLimite)*2,
                    o = parseInt((e*tasa).toFixed());
                fieldPrecioEstimado.value=o+n+" USD"
              } else fieldPrecioEstimado.value=(e*tasa).toFixed()+" USD"
            };

            if(e >= .01 && e <= 1.58){
              if(pesos[1]>22){
                console.log("Esta entrando aqui");
                let costoExtra=(pesos[1]-17)*2.50;
                fieldPrecioEstimado.value=55+costoExtra+" USd"
              } else fieldPrecioEstimado.value="55 USD"
            } else e >= 1.59 && e <= 2.36 ? a(pesos[1],40,48.23) : e>=2.37&&e<=3.37 ? a(pesos[1],50,45.98): a(pesos[1],100,e>=3.38&&e<=4.62?44.44:e>=4.63&&e<=5.24?43.2:e>=5.25&&e<=6.15?42.86:e>=6.16&&e<=6.47?40.57:e>=6.48&&e<=7.99?39.34:e>=8&&e<=8.66?37.5:e>=8.67&&e<=10.07?36.92:32.23);
            fieldPiesCubicos.value=e,fieldPesoVol.value=pesos[0].toFixed(2),fieldPesoMayor.value=pesos[1].toFixed(2)
      };*/

      /*document.getElementById("cal-aereo").addEventListener("change",() => {
        mostrarFieldsColombia();
        let e=document.getElementById("destino-envio").value,
            t=document.querySelector("#btnAereo-comprar");
        "mexico"=== e ? ( y(), 
        t.setAttribute("href","https://enviosmx.jdgcargo.com/product/envios-aereos-a-mexico/")) : ( E(), t.setAttribute("href","http://tienda.jdgcargo.com/product/envios-aereos-a-venezuela/"))

        "mexico"=== e ? calculoEnvioMx() : E();
      });
    }
  }*/