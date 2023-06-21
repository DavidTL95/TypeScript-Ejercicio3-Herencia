"use strict";
let television1 = new Television('blanco', 'A', 20, 40, false);
let television2 = new Television('negro', 'D', 50, 50, true);
let lav2 = new Lavadora('blanco', 'F', 50, 50);
let lav1 = new Lavadora('blanco', 'F', 50);
let elec1 = new Electrodomestico('rojo', 'A', 50);
let lav3 = new Lavadora('gris', 'B', 30);
let arrayElectrodomesticos = [television1, television2, lav1, lav2, elec1, lav3];
console.log(arrayElectrodomesticos);
