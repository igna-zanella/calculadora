
// import { suma } from "./operaciones/suma";
// import { resta } from "./operaciones/resta";
// import { multiplicacion } from "./operaciones/multiplicacion";
// import { division } from "./operaciones/division";

const sumaExp = require ('./operaciones/suma')
const restaExp = require ('./operaciones/resta')
const multiExp = require ('./operaciones/multiplicacion')
const divExp = require ('./operaciones/division')
// const RESULTADO_RESTA = resta(10,2)
// const RESULTADO_MULTIPLICACION = multiplicacion(10,2)
// const RESULTADO_DIVISION = division(10,2)

console.log(`Suma: ${sumaExp}`)
console.log("Resta: " + restaExp)
console.log("Multiplicación: " + multiExp)
console.log("División: " + divExp)

// console.log(RESULTADO_RESTA)
// console.log(RESULTADO_MULTIPLICACION)
// console.log(RESULTADO_DIVISION)