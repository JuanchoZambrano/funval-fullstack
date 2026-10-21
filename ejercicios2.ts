/**
 * EJERCICIO 2: Verificación para compra de entradas a una película para mayores (if - else con boolean)
 *
 * Contexto: En el cine, la película exige ser mayor de 18 años y presentar documento físico.
 * Variables iniciales:
 *   const edadCliente: number = 17;
 *   const tieneDocumento: boolean = true;
 *
 * Enunciado:
 * Evalúa si el cliente tiene 18 años o más Y además tiene su documento en mano.
 * - Si cumple ambas condiciones: imprimir "Venta de boleto autorizada."
 * - Si falla alguna: imprimir "Acceso denegado. Debe ser mayor de edad y portar documento."
 */

// Tu código aquí:

const edadCliente2: number = 17;
const tieneDocumento: boolean = true;
if (edadCliente2 >= 18 && tieneDocumento) {
  console.log("Venta de boleto autorizada.");
} else {
  console.log("Acceso denegado. Debe ser mayor de edad y portar documento.");
}

/**
 * EJERCICIO 3: Puerta automática de una tienda según horario (if - else)
 *
 * Contexto: Una tienda abre sus puertas entre las 9:00 y las 20:00 (formato 24h).
 * Variable inicial:
 *   const horaActual: number = 14; // Valores posibles de 0 a 23
 *
 * Enunciado:
 * - Si la hora está entre 9 y 20 inclusive, muestra: "Puerta abierta: Bienvenido a la tienda."
 * - En cualquier otra hora, muestra: "Puerta cerrada: Atención finalizada por hoy."
 */

// Tu código aquí:

const horaActual: number = 14;
if (horaActual >= 9 && horaActual <= 20) {
  console.log("Puerta abierta: Bienvenido a la tienda.");
} else {
  console.log("Puerta cerrada: Atencion finalizada por hoy.");
}

/**
 * EJERCICIO 4: Luces del semáforo vehicular (switch - case)
 *
 * Contexto: Control del flujo vehicular mediante un semáforo.
 * Variable inicial:
 *   const luzSemaforo: string = "amarillo"; // Puede ser "verde", "amarillo", "rojo" u otro texto
 *
 * Enunciado:
 * Usando switch-case, muestra el mensaje según el color:
 * - "verde": "Avance: Vía libre."
 * - "amarillo": "Precaución: Reduzca la velocidad."
 * - "rojo": "Deténgase: Paso bloqueado."
 * - default: "Luz no reconocida o semáforo en mantenimiento."
 */

// Tu código aquí:

const luzSemaforo: string = "amarillo";
switch (luzSemaforo) {
  case "verde":
    console.log("Avance: Vìa libre.");
    break;
  case "amarillo":
    console.log("Precaución: Reduzca la velocidad.");
    break;
  case "rojo":
    console.log("Deténgase: Paso bloqueado.");
    break;
  default:
    console.log("Luz no reconocida o semáforo en mantenimiento.");
    break;
}

/**
 * EJERCICIO 5: Descuento en la caja de una farmacia (if - else if - else)
 *
 * Contexto: Una farmacia premia el total gastado con descuentos:
 * - Menos de 50: 0% de descuento.
 * - De 50 a 99: 5% de descuento.
 * - De 100 a 199: 10% de descuento.
 * - 200 o más: 15% de descuento.
 *
 * Variables iniciales:
 *   const subtotalCompra: number = 120;
 *   let descuento: number = 0;
 *   let totalFinal: number = 0;
 *
 * Enunciado:
 * Determina el descuento según el monto, calcula el total final y muestra:
 * "Subtotal: [subtotal] | Descuento aplicado: [descuento]% | Total a pagar: [totalFinal]"
 */

// Tu código aquí:

const subtotalCompra: number = 200;
let descuento: number = 0;
let totalFinal: number = 0;

if (subtotalCompra >= 200) {
  descuento = 15;
} else if (subtotalCompra >= 100 && subtotalCompra < 200) {
  descuento = 10;
} else if (subtotalCompra >= 50 && subtotalCompra < 100) {
  descuento = 5;
} else {
  descuento = 0;
}

const valorDescuento: number = (subtotalCompra * descuento) / 100;
totalFinal = subtotalCompra - valorDescuento;

console.log(
  `Subtotal: ${subtotalCompra} | Descuento aplicado: ${descuento}% | Total a pagar: ${totalFinal}`,
);

/**
 * EJERCICIO 7: Alerta de medidor de batería de celular (if - else if - else)
 *
 * Contexto: Un sistema operativo móvil monitorea el porcentaje de batería y si está conectado al cargador.
 * Variables iniciales:
 *   const porcentajeBateria: number = 15;
 *   const estaConectado: boolean = false;
 *
 * Enunciado:
 * - Si porcentajeBateria es mayor a 100 o menor a 0: mostrar "Lectura de batería errónea."
 * - Si está conectado:
 *     - Si la batería llega a 100: "Batería completa. Desconecte el cargador."
 *     - Si no: "Cargando dispositivo..."
 * - Si NO está conectado:
 *     - Menor o igual a 15: "Batería crítica: Activa el modo ahorro de energía."
 *     - Entre 16 y 50: "Nivel de batería moderado."
 *     - Más de 50: "Batería en buen nivel."
 */

// Tu código aquí:

const porcentajeBateria: number = 100;
const estaConectado: boolean = false;

if (porcentajeBateria > 100 || porcentajeBateria < 0) {
  console.log("Lectura de batería errónea.");
}

if (estaConectado) {
  if (porcentajeBateria === 100) {
    console.log("Batería completa. Desconecte el cargador.");
  } else if (porcentajeBateria < 100) {
    console.log("Cargando dispositivo.");
  }
} else {
  if (porcentajeBateria <= 15) {
    console.log("Batería crítica: Activa el modo ahorro de energía.");
  } else if (porcentajeBateria > 15 && porcentajeBateria <= 50) {
    console.log("Nivel de batería moderado.");
  } else if (porcentajeBateria > 50) {
    console.log("Batería en buen nivel.");
  }
}

/**
 * EJERCICIO 9: Control de equipaje de mano en mostrador de aeropuerto (if anidado / operadores lógicos)
 *
 * Contexto: La aerolínea impone dos límites estrictos:
 * - Peso máximo: 10 kg.
 * - Longitud total máxima (suma de alto + ancho + profundidad): 115 cm.
 *
 * Variables iniciales:
 *   const pesoMaletaKg: number = 11.5;
 *   const sumaDimensionesCm: number = 110;
 *
 * Enunciado:
 * Evalúa las variables y muestra exactamente una de las 4 opciones:
 * 1. Si cumple ambas reglas: "Equipaje aprobado para llevar en cabina."
 * 2. Si falla en peso pero pasa en dimensiones: "Rechazado: Excede el peso máximo permitido."
 * 3. Si pasa en peso pero falla en dimensiones: "Rechazado: Excede las dimensiones máximas permitidas."
 * 4. Si falla en ambas: "Rechazado: Excede tanto el peso como las dimensiones."
 */

// Tu código aquí:

const pesoMaletaKg: number = 11.5;
const sumaDimensionesCm: number = 115;

if (pesoMaletaKg <= 10 && sumaDimensionesCm <= 115) {
  console.log("Equipaje aprobado para llevar en cabina.");
} else if (pesoMaletaKg > 10 && sumaDimensionesCm <= 115) {
  console.log("Rechazado: Excede el peso máximo permitido.");
} else if (pesoMaletaKg <= 10 && sumaDimensionesCm > 115) {
  console.log("Rechazado: Excede las dimensiones máximas permitidas.");
} else {
  console.log("Rechazado: Excede tanto el peso como las dimensiones.");
}

// -----------------------

/* 
    ejercicion 1
    
    quiero q puedan realizar una calculadora de multiplicacion
    pero sin  el simbolo *
    4*5 = 5+5+5+5 o 4+4+4+4+4
*/

let num1: number = 3;
let num2: number = 5;
let result: number = 0;

for (let i = 1; i <= num2; i++) {
  result += num1;
}

console.log(result);

/* 
    ejercio 2
    sacar el factorial de un numero
    !5 = 1*2*3*4*5
*/

let num: number = 5;
let resultadoFactorial: number = 1;

for (let j = 2; j <= num; j++) {
  // j = 5
  let acumulador: number = 0; // acum = 24
  let numBase: number = resultadoFactorial; // 24
  for (let k = 1; k <= j; k++) {
    // hasta que k sea 5
    acumulador += numBase; // acum+24 acum+24 acum+24 acum+24 acum+24 = 120
  }
  resultadoFactorial = acumulador; // resultado 120
}

console.log(resultadoFactorial);
