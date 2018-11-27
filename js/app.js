var calculadora = {
    Memoria: "0",
    puntoDecimal: "",
    cantidad_a: "",
    cantidad_b: "",
    OpeTimes: 1,
    ValorBoton: "",
    operador: "",
    Resultado: 0,
    estadoError: 0,

    animacion: function(tecla){
        document.getElementById(tecla).style.transform="scale(0.85)"
      setTimeout(function(){
        document.getElementById(tecla).style.transform="scale(1)";}, 150)
    },

    mostrarresultado: function(valorEv){

        if (calculadora.ValorBoton == "on") {
            calculadora.Memoria = "0";
            calculadora.Resultado = 0;
            calculadora.cantidad_a = "";
            calculadora.ValorBoton = "";
            calculadora.operador = "";
            calculadora.OpeTimes = 1;
            calculadora.estadoError = 0;
        };

        if (calculadora.estadoError == 0) {

          if (calculadora.ValorBoton == "punto" && calculadora.Memoria.indexOf(".") == -1) {
                calculadora.puntoDecimal = "."
          };

          if (calculadora.ValorBoton == "0" && calculadora.Memoria=="0" && calculadora.puntoDecimal=="") {
                calculadora.ValorBoton = ""
              };

          if (calculadora.ValorBoton == "0" ||
              calculadora.ValorBoton == "1" ||
              calculadora.ValorBoton == "2" ||
              calculadora.ValorBoton == "3" ||
              calculadora.ValorBoton == "4" ||
              calculadora.ValorBoton == "5" ||
              calculadora.ValorBoton == "6" ||
              calculadora.ValorBoton == "7" ||
              calculadora.ValorBoton == "8" ||
              calculadora.ValorBoton == "9") {

              if (calculadora.Memoria=="0" && calculadora.puntoDecimal=="") {
                calculadora.Memoria = "";
              };

              if (calculadora.Memoria.length+1<=8) {
                  calculadora.Memoria = calculadora.Memoria+
                                        calculadora.puntoDecimal+
                                        calculadora.ValorBoton
              };
              calculadora.puntoDecimal = "";
      };

      if (calculadora.ValorBoton == "sign" && calculadora.Memoria !== "0" ) {
            if ( calculadora.Memoria.substr(0,1) == "-") {
                calculadora.Memoria = calculadora.Memoria.substr(1, calculadora.Memoria.length)
            } else {
              calculadora.Memoria = "-" + calculadora.Memoria
            };
            calculadora.ValorBoton = ""
        };

        if (calculadora.ValorBoton == "mas" ||
            calculadora.ValorBoton == "por" ||
            calculadora.ValorBoton == "menos" ||
            calculadora.ValorBoton == "dividido" ||
            calculadora.ValorBoton == "igual") {

              if (calculadora.cantidad_a!=="") {

                    if (calculadora.OpeTimes == 1) {
                        calculadora.cantidadReserva = calculadora.Memoria
                    };
                    var resultado;
                    if (calculadora.operador == "mas") {
                        resultado = Number(calculadora.cantidad_a) + Number(calculadora.cantidadReserva)
                    };
                    if (calculadora.operador == "por") {
                        resultado = Number(calculadora.cantidad_a) * Number(calculadora.cantidadReserva)
                    };
                    if (calculadora.operador == "menos") {
                        resultado = Number(calculadora.cantidad_a) - Number(calculadora.cantidadReserva)
                    };
                    if (calculadora.operador == "dividido") {
                        resultado = Number(calculadora.cantidad_a) / Number(calculadora.cantidadReserva)
                    };
                    if ((Math.round(resultado * 100) / 100)>99999999) {
                        calculadora.Memoria = "Err";
                        calculadora.estadoError = 1;
                    }else {
                      calculadora.Memoria = (Math.round(resultado * 100) / 100).toString();
                      calculadora.cantidad_a = calculadora.Memoria;
                      calculadora.OpeTimes = 2;
                    }
              };

              if (calculadora.ValorBoton !== "igual") {
                 calculadora.operador = calculadora.ValorBoton;
                 calculadora.cantidad_a = calculadora.Memoria;
                 calculadora.Memoria = "";
                 calculadora.OpeTimes = 1;
              }
        };

        calculadora.ValorBoton = "";
        var pantalla = document.getElementById("display");
        pantalla.textContent = calculadora.Memoria

      };
   },

    on: function(){
        calculadora.animacion("on");
        calculadora.ValorBoton = "on";
        calculadora.mostrarresultado()
    },

    sign: function(){
        calculadora.animacion("sign");
        calculadora.ValorBoton = "sign";
        calculadora.mostrarresultado()
    },

    raiz: function(){
        calculadora.animacion("raiz");
        calculadora.ValorBoton = "raiz";
        calculadora.mostrarresultado()
    },

    dividido: function(){
        calculadora.animacion("dividido");
        calculadora.ValorBoton = "dividido";
        calculadora.mostrarresultado()
    },

    siete: function(){
        calculadora.animacion("7");
        calculadora.ValorBoton = "7",
        calculadora.mostrarresultado()
    },

    ocho: function(){
        calculadora.animacion("8");
        calculadora.ValorBoton = "8",
        calculadora.mostrarresultado()
    },

    nueve: function(){
        calculadora.animacion("9");
        calculadora.ValorBoton = "9";
        calculadora.mostrarresultado()
    },

    por: function(){
        calculadora.animacion("por");
        calculadora.ValorBoton = "por";
        calculadora.mostrarresultado()
    },

    cuatro: function(){
        calculadora.animacion("4");
        calculadora.ValorBoton = "4";
        calculadora.mostrarresultado()
    },

    cinco: function(){
        calculadora.animacion("5");
        calculadora.ValorBoton = "5";
        calculadora.mostrarresultado()
    },

    seis: function(){
        calculadora.animacion("6");
        calculadora.ValorBoton = "6";
        calculadora.mostrarresultado()
    },

    menos: function(){
        calculadora.animacion("menos");
        calculadora.ValorBoton = "menos";
        calculadora.mostrarresultado()
    },

    uno: function(){
        calculadora.animacion("1");
        calculadora.ValorBoton = "1";
        calculadora.mostrarresultado()
    },

    dos: function(){
        calculadora.animacion("2");
        calculadora.ValorBoton = "2";
        calculadora.mostrarresultado()
    },

    tres: function(){
        calculadora.animacion("3");
        calculadora.ValorBoton = "3";
        calculadora.mostrarresultado()
    },

    cero: function(){
        calculadora.animacion("0");
        calculadora.ValorBoton = "0";
        calculadora.mostrarresultado()
    },

    punto: function(){
        calculadora.animacion("punto");
        calculadora.ValorBoton = "punto";
        calculadora.mostrarresultado()
    },

    igual: function(){
        calculadora.animacion("igual");
        calculadora.ValorBoton = "igual";
        calculadora.mostrarresultado()
    },

    mas: function(){
        calculadora.animacion("mas");
        calculadora.ValorBoton = "mas";
        calculadora.mostrarresultado()
    }
};

document.getElementById("on").onclick=calculadora.on;
document.getElementById("sign").onclick=calculadora.sign;
document.getElementById("raiz").onclick=calculadora.raiz;
document.getElementById("dividido").onclick=calculadora.dividido;
document.getElementById("7").onclick=calculadora.siete;
document.getElementById("8").onclick=calculadora.ocho;
document.getElementById("9").onclick=calculadora.nueve;
document.getElementById("por").onclick=calculadora.por;
document.getElementById("4").onclick=calculadora.cuatro;
document.getElementById("5").onclick=calculadora.cinco;
document.getElementById("6").onclick=calculadora.seis;
document.getElementById("menos").onclick=calculadora.menos;
document.getElementById("1").onclick=calculadora.uno;
document.getElementById("2").onclick=calculadora.dos;
document.getElementById("3").onclick=calculadora.tres;
document.getElementById("0").onclick=calculadora.cero;
document.getElementById("punto").onclick=calculadora.punto;
document.getElementById("igual").onclick=calculadora.igual;
document.getElementById("mas").onclick=calculadora.mas;
