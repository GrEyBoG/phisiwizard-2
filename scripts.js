// Cinemática

function calcularMCU() {
    // Obtenemos los valores ingresados por el usuario
    var radio = document.getElementById("radio").value;
    var tiempo = document.getElementById("tiempo").value;

    // Calculamos la velocidad angular del objeto
    var velocidadAngular = 2 * Math.PI / tiempo;

    // Calculamos la aceleración centrípeta del objeto
    var aceleracionCentripeta = velocidadAngular ** 2 * radio;

    // Calculamos la velocidad tangencial del objeto
    var velocidadTangencial = velocidadAngular * radio;

    // Mostramos los resultados al usuario
    document.getElementById("resultado").innerHTML = `La velocidad angular del objeto es: ${velocidadAngular.toFixed(2)} rad/s.<br>
La aceleración centrípeta del objeto es: ${aceleracionCentripeta.toFixed(2)} m/s².<br>
La velocidad tangencial del objeto es: ${velocidadTangencial.toFixed(2)} m/s.`}

function mostrarProcedimientoMCU() {
    // Obtenemos los valores ingresados por el usuario
    var radio = parseFloat(document.getElementById("radio").value);
    var tiempo = parseFloat(document.getElementById("tiempo").value);
  
    // Calculamos la velocidad angular del objeto
    var velocidadAngular = 2 * Math.PI / tiempo;
  
    // Mostramos el procedimiento y el resultado al usuario
    document.getElementById("procedimientoMCU").innerHTML = `Calculamos la velocidad angular con la fórmula: ω = 2π / T` +
      `<br>ω = 2π / ${tiempo}` +
      `<br>La velocidad angular del objeto es: ${velocidadAngular.toFixed(2)} rad/s.`;
  
    // Calculamos la aceleración centrípeta del objeto
    var aceleracionCentripeta = velocidadAngular ** 2 * radio;
  
    // Mostramos el procedimiento y el resultado al usuario
    document.getElementById("procedimientoMCU").innerHTML += `<br>Calculamos la aceleración centrípeta con la fórmula: ac = ω²r` +
      `<br>ac = (${velocidadAngular.toFixed(2)})² * ${radio}` +
      `<br>La aceleración centrípeta del objeto es: ${aceleracionCentripeta.toFixed(2)} m/s².`;
  
    // Calculamos la velocidad tangencial del objeto
    const velocidadTangencial = velocidadAngular * radio;
  
    // Mostramos el procedimiento y el resultado al usuario
    document.getElementById("procedimientoMCU").innerHTML += `<br>Calculamos la velocidad tangencial con la fórmula: vt = ωr` +
      `<br>vt = ${velocidadAngular.toFixed(2)} * ${radio}` +
      `<br>La velocidad tangencial del objeto es: ${velocidadTangencial.toFixed(2)} m/s.`;
  }
  

function calcularVelocidad() {
    // Pedir valores de distancia y tiempo
    const distancia = document.getElementById("distancia").value;
    const tiempo = document.getElementById("tiempo2").value;

    // Calcular velocidad
    const velocidad = distancia / tiempo;

    // Se muestra el resultado
    document.getElementById("resultado2").innerHTML = `La velocidad es de ${velocidad} m/s.`;
  }

  function mostrarProcedimientoMRU() {
    // Obtener valores ingresados por el usuario
    const distancia = parseFloat(document.getElementById("distancia").value);
    const tiempo = parseFloat(document.getElementById("tiempo2").value);

    // Calcular la velocidad
    const velocidad = distancia / tiempo;

    // Mostrar el procedimiento y el resultado al usuario
    document.getElementById("procedimientoMRU").innerHTML = `Calculamos la velocidad con la fórmula: v = d / t` +
        `<br>v = ${distancia} / ${tiempo}` +
        `<br>La velocidad es de ${velocidad} m/s.`;
}


function calcularEcuacionHoraria() {
    // Obtenemos los valores ingresados por el usuario
    const x0 = document.getElementById("x0").value;
    const v = document.getElementById("v").value;
    const t = document.getElementById("t").value;

    // Calculamos la posición del objeto en función del tiempo
    const x = Number(x0) + (Number(v) * Number(t));

    // Mostramos el resultado al usuario
    document.getElementById("resultado3").innerHTML = `La posición del objeto es: x = ${x} m.`;
}

function mostrarProcedimientoEcuacionHoraria() {
    // Obtenemos los valores ingresados por el usuario
    const x0 = parseFloat(document.getElementById("x0").value);
    const v = parseFloat(document.getElementById("v").value);
    const t = parseFloat(document.getElementById("t").value);
  
    // Calculamos la posición del objeto en función del tiempo
    const x = x0 + v * t;
  
    // Mostramos el procedimiento y el resultado al usuario
    document.getElementById("procedimientoEcuacionHoraria").innerHTML = `Calculamos la posición del objeto en función del tiempo con la fórmula: x = x0 + v * t` +
      `<br>x = ${x0} + ${v} * ${t}` +
      `<br>La posición del objeto es: x = ${x} m.`;
  }
  

// function calcularEcuacion() {
//     // Valores de las coordenadas ingresadas por el usuario
//     const x1 = document.getElementById("x1").value;
//     const y1 = document.getElementById("y1").value;
//     const x2 = document.getElementById("x2").value;
//     const y2 = document.getElementById("y2").value;

//     // Calcular valores de la pendiente y el intercepto
//     const m = (y2 - y1) / (x2 - x1);
//     const b = y1 - (m * x1);

//     // Se muestra el resultado
//     document.getElementById("resultado4").innerHTML = `La ecuación de la recta es: y = ${m}x + ${b}.`;
// }

// function calcularEnergia() {
//     // Obtenemos los valores ingresados por el usuario
//     const masa = document.getElementById("masa").value;
//     const velocidad = document.getElementById("velocidad").value;

//     // Calculamos la energía cinética del objeto
//     const energiaCinetica = 0.5 * masa * velocidad ** 2;

//     // Mostramos el resultado al usuario
//     document.getElementById("resultado5").innerHTML = `La energía cinética del objeto es: ${energiaCinetica} J.`;
// }