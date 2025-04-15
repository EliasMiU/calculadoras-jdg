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
});