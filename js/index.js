window.addEventListener("DOMContentLoaded",()=>{
    if(document.getElementById("cal-maritimo")){
      let fielDimensiones=document.getElementById("fts"),
      fieldPiesCubico=document.getElementById("piesCubico"),
      fieldPrecioEstimado=document.getElementById("pre-estimado"),
      selectDestino=document.getElementById("select-destino"),
      n=document.getElementById("cal-maritimo"),
      fieldImpuesto=document.getElementById("impuesto"),
      
      selectPaisDestino=document.getElementById("pais-destino"),$=[
        [
            {name:"Gran Caracas",valor:0},
            {name:"Otras Ciudades",valor:1}
        ],        
        [{
            name:"Santiago de Chile",valor:2
        },{
            name:"Valpara\xedso",valor:2
        },{
            name:"Otras Ciudades",valor:3
        },{
            name:"Norte",valor:5
        },{
            name:"Sur",valor:5
        }],[{
            name:"San Jos\xe9",valor:4
        },{
            name:"Otras Ciudades",valor:4
        }]
      ];
      function _(e){
        selectDestino.innerHTML="";
        for(let t=0;
        t<$[e].length;
        t++)selectDestino.innerHTML+="<option value='"+$[e][t].valor+"'>"+$[e][t].name+"</option>"
      }
  function d(){
        ""===selectPaisDestino.value?alert("Ha ocurrido un error, pongase en contacto con su desarrollador."):(console.log(selectPaisDestino.value),_(selectPaisDestino.value))
      }
  selectPaisDestino.addEventListener("change",e=>{
        let t=e.target.value;
        console.log(t),_(t)
      }),d();
      let r=()=>{
        let largo=parseInt(document.getElementById("inputLargo").value),
            ancho=parseInt(document.getElementById("inputAncho").value),
            alto=parseInt(document.getElementById("inputAlto").value),
            pesoReal=document.getElementById("pesoReal").value,
            dimensiones=alto*ancho*largo,
            pesoVolumetrico=dimensiones/1728, //Pies Cubicos
            pesoMayor=pesoReal > pesoVolumetrico ? pesoReal : pesoVolumetrico;
            console.log("Esta son: " + dimensiones, pesoVolumetrico);
            return[dimensiones,pesoVolumetrico,pesoMayor,largo,ancho,alto]
      };
      function i(){
        let valorSelectOrigen=parseInt(document.getElementById("select-origen").value),
            valorSelectDestino=parseInt(document.getElementById("select-destino").value),
            costoMercancia=parseInt(document.getElementById("costoCaja").value),
            $=r(),
            dimensiones=$[0],
            piesCubico=$[1], 
            checkSeguro=document.getElementById("checkSeguro").checked;
        let campoSeguro=document.querySelector(".costo-caja");
        let precioEstimado;

        console.log("Pies Cubicos: "+ piesCubico);

        if(valorSelectDestino===2){
          precioEstimado=piesCubico*50
        }else if(valorSelectDestino===5){
          precioEstimado=piesCubico*70
        }else{
          if((piesCubico>0.01)&&(piesCubico<3.36)){
            console.log('Si entra aqui');
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*35
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*40
              }else{
                precioEstimado=piesCubico*59.26
              }
            }else if((valorSelectOrigen===1)||(valorSelectOrigen===2)){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*74.9925
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*93.7425
              }else{
                precioEstimado=piesCubico*100
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*45
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*49
              }else{
                alert("No existen calculos para estos parametros")
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*85
              }else{
                precioEstimado=piesCubico*100
              }
            }
          }else if(piesCubico>=3.36&&piesCubico<3.5){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){ 
                //precioEstimado=piesCubico*34.88
                precioEstimado=piesCubico*34.3
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*37
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*40
              }else{
                precioEstimado=piesCubico*38.26
              }
            }else if((valorSelectOrigen===1)||(valorSelectOrigen===2)){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*48.33
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*56.66333333
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*59.26
              }else{
                precioEstimado=piesCubico*38.26
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*34
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*39
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*59.26
              }else{
                precioEstimado=piesCubico*38.26
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*57
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico>=3.05?piesCubico*65:piesCubico*60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*74.07
              }else{
                precioEstimado=piesCubico*38.26
              }
            }
          }else if(piesCubico>=3.5&&piesCubico<4.45){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*36
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*38
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*34.44
              }else{
                precioEstimado=piesCubico*37
              }
            }else if((valorSelectOrigen===1)||(valorSelectOrigen===2)){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*46.28314286
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*52.71171429
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*52.22
              }else{
                precioEstimado=piesCubico*37
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*34
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*40
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*52.22
              }else{
                precioEstimado=piesCubico*37
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*58
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*65
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*63.33
              }else{
                precioEstimado=piesCubico*37
              }
            }
          }else if(piesCubico>=4.46&&piesCubico<4.65){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*34;
                console.log(precioEstimado);
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*37
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*33.48
              }else{
                precioEstimado=piesCubico*37
              }
            }else if((valorSelectOrigen===1)||(valorSelectOrigen===2)){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*41.10888889
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*46.66444444
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*50.76
              }else{
                precioEstimado=piesCubico*37
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*35
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*40
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*50.76
              }else{
                precioEstimado=piesCubico*37
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*57
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*65
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*61.56
              }else{
                precioEstimado=piesCubico*37
              }
            }
          }else if(piesCubico>=4.66&&piesCubico<5.30){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*33
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*35.24
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*38
              }else{
                precioEstimado=piesCubico*37.46
              }
            }else if((valorSelectOrigen===1)||(valorSelectOrigen===2)){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*39.99809524
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*44.76
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*52.38
              }else{
                precioEstimado=piesCubico*37.46
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*35
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*40
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*52.38
              }else{
                precioEstimado=piesCubico*37.46
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*58
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*64
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*61.90
              }else{
                precioEstimado=piesCubico*37.46
              }
            }
          }else if(piesCubico>=5.30&&piesCubico<6){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*33
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*35.70
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*37.8
              }else{
                precioEstimado=piesCubico*37.46
              }
            }else if((valorSelectOrigen===1)||(valorSelectOrigen===2)){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*49.71257143
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*53.99828571
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*38.33
              }else{
                precioEstimado=piesCubico*37.46
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*35
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*40
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*38.33
              }else{
                precioEstimado=piesCubico*37.46
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*58
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*56.80
              }else{
                precioEstimado=piesCubico*100
              }
            }
          }else if(piesCubico>=6&&piesCubico<6.50){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*34
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*38
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*35.49
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else if((valorSelectOrigen===1)||(valorSelectOrigen===2)){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*47.87215627
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*51.92925620
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*48.60
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*35
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*40
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*48.60
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*55
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*56.31
              }else{
                precioEstimado=piesCubico*37.76
              }
            }
          }else if(piesCubico>=6.51&&piesCubico<8.10){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*34
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*34.38
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else if((valorSelectOrigen===1)||(valorSelectOrigen===2)){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*45
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*50
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*48.13
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*35;
                precioEstimado=piesCubico*55
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*48.13
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*55
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*54.38
              }else{
                precioEstimado=piesCubico*37.76
              }
            }
          }else if(piesCubico>=8.10 && piesCubico<14){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                //precioEstimado=piesCubico*33.86
                precioEstimado=piesCubico*34.05
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*28.21;
                console.log("Entro a 35.34")
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else if(valorSelectOrigen===1||valorSelectOrigen===2){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*45
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*50
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*40.36
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else if(valorSelectOrigen===3){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*55
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*40.36
              }else{
                precioEstimado=piesCubico*37.76
              }
            }else{
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*55
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*43.93
              }else{
                precioEstimado=piesCubico*37.76
              }
            }
          }else if(piesCubico>=14&&piesCubico<15){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*33.90
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*28.21;
                console.log("Entro a 35.34")
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else{
                precioEstimado=piesCubico*37.76
              }
            }
          }else if(piesCubico>=15 && piesCubico<15.5){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*36.47
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*28.21;
                console.log("Entro a 35.34")
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else{
                precioEstimado=piesCubico*37.76
              }
            }
          }else if(piesCubico>=15.50&&piesCubico<16){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*34
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*28.21;
                console.log("Entro a 35.34")
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else{
                precioEstimado=piesCubico*37.76
              }
            }
          }else if(piesCubico>=16 && piesCubico<17){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*33.60
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*28.21;
                console.log("Entro a 35.34")
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else{
                precioEstimado=piesCubico*37.76
              }
            }
          }else if(piesCubico>=17){
            if(valorSelectOrigen===0){
              if(valorSelectDestino===0){
                precioEstimado=piesCubico*33.8
              }else if(valorSelectDestino===4){
                precioEstimado=piesCubico*28.21;
                console.log("Entro a 35.34")
              }else if(valorSelectDestino===1){
                precioEstimado=piesCubico*60
              }else{
                precioEstimado=piesCubico*37.76
              }
            }
          }else{
            precioEstimado=piesCubico*200
          }
        }
        console.log("Precio original "+precioEstimado);

        let intPrice=Math.trunc(precioEstimado);
        let stringPrice=intPrice.toString();
        let lastDigitPrice=parseInt(stringPrice[stringPrice.length-1]);
        console.log(stringPrice,lastDigitPrice);

        switch(lastDigitPrice){
          case 1:case 2:case 3:case 4:intPrice+=5-lastDigitPrice;
          break;
          case 6:case 7:case 8:case 9:intPrice+=10-lastDigitPrice
        }

        let priceTwoDec=parseFloat(precioEstimado.toFixed(2));
        console.log(priceTwoDec,intPrice,checkSeguro);
        if(checkSeguro==!0){
          campoSeguro.classList.remove("d-none");
          campoSeguro.classList.add("d-block");
          let costoSeguro=costoMercancia*0.12;
          intPrice=intPrice+costoSeguro
        }else{
          campoSeguro.classList.remove("d-block");
          campoSeguro.classList.add("d-none")
        }
  fieldPrecioEstimado.value=intPrice-0.01;
        fieldPiesCubico.value=piesCubico.toFixed(2);
        fielDimensiones.value=dimensiones
      }
  i(),n.addEventListener("change",e=>{
        i()
      })
    }


  if(document.getElementById("cal-aereo")){
      let fieldPrecioEstimado=document.getElementById("precio-estimado"),fieldPesoVol=document.getElementById("peso-vol"),fieldPesoMayor=document.getElementById("peso-mayor"),fieldPiesCubicos=document.getElementById("pies-cubicos"),fieldMontoMercancia=document.getElementById("costoEnvio"),selectDestino=document.getElementById("destino-envio"),fieldImportFree=document.getElementById("importFree"),fieldSeguro=document.getElementById("seguro"),fieldIntermediacion=document.getElementById("intermediacion");
      console.log("Esto esta cargando la calculadora Aerea");

      let calcPesos=()=>{
            let fieldAlto=document.getElementById("alto").value,
            fieldLargo=document.getElementById("largo").value,
            fieldAncho=document.getElementById("ancho").value,
            fielPesoReal=parseFloat(document.getElementById("peso-real").value),
            pesoVolumetrico=fieldAlto*fieldLargo*fieldAncho/166,
            pesoMayor=fielPesoReal>pesoVolumetrico?fielPesoReal:pesoVolumetrico;
            return[pesoVolumetrico,pesoMayor]
          },
      
          piesCubicos=()=>{
            let e=parseInt(document.getElementById("largo").value),t=parseInt(document.getElementById("ancho").value);
            return parseInt(document.getElementById("alto").value)*t*e/1728
          };

      E=()=>{
        let selectOrigenEnvio=document.getElementById("origen-envio").value
            t=parseFloat(piesCubicos().toFixed(2)),arrayPesos=calcPesos();
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
      }
      let y=()=>{
        let e = parseFloat(piesCubicos().toFixed(2)),
            pesos =calcPesos(),
            a=(t,a,l)=>{
          if(t>a){
            let n=(t-a)*1.25,o=parseInt((e*l).toFixed());
            fieldPrecioEstimado.value=o+n+" USD"
          }else fieldPrecioEstimado.value=(e*l).toFixed()+" USD"
        };
        if(e >=.01&&e<=1.58){
          if(pesos[1]>25){
            let l=(pesos[1]-25)*1.25;
            fieldPrecioEstimado.value=55+l+" USd"
          }else fieldPrecioEstimado.value="55 USD"
        } else e >= 1.59 && e <= 2.36 ? a(pesos[1],40,48.23) : e>=2.37&&e<=3.37 ? a(pesos[1],50,45.98): a(pesos[1],100,e>=3.38&&e<=4.62?44.44:e>=4.63&&e<=5.24?43.2:e>=5.25&&e<=6.15?42.86:e>=6.16&&e<=6.47?40.57:e>=6.48&&e<=7.99?39.34:e>=8&&e<=8.66?37.5:e>=8.67&&e<=10.07?36.92:32.23);
        fieldPiesCubicos.value=e,fieldPesoVol.value=pesos[0].toFixed(2),fieldPesoMayor.value=pesos[1].toFixed(2)
      };

      document.getElementById("cal-aereo").addEventListener("change",() => {
        mostrarFieldsColombia();
        let e=document.getElementById("destino-envio").value,
            t=document.querySelector("#btnAereo-comprar");
        /*"mexico"=== e ? ( y(), 
        t.setAttribute("href","https://enviosmx.jdgcargo.com/product/envios-aereos-a-mexico/")) : ( E(), t.setAttribute("href","http://tienda.jdgcargo.com/product/envios-aereos-a-venezuela/"))*/

        "mexico"=== e ? y() : E();
      })
    }
  }
)