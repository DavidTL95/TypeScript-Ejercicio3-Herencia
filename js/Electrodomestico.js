"use strict";
const defPrecio = 100;
const color = 'blanco';
const defConsumo = 'F';
const peso = 5;
class Electrodomestico {
    constructor(newColor = color, newConsumo = defConsumo, newPeso = peso) {
        this.color = newColor.toLowerCase();
        this.consumo = newConsumo;
        this.peso = newPeso;
        this.precio = this.precioFinal();
    }
    getPrecio() {
        return this.precioFinal();
    }
    getColor() {
        // if (typeof this.color === 'colores'){
        //     return this.color;
        // }
        return this.color;
    }
    getConsumo() {
        return this.consumo;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        this.consumo = letra;
    }
    comprobarColor(color) {
        this.color = color;
    }
    precioFinal() {
        let precio = defPrecio;
        switch (this.consumo) {
            case 'A':
                precio += 100;
                break;
            case 'B':
                precio += 80;
                break;
            case 'C':
                precio += 60;
                break;
            case 'D':
                precio += 50;
                break;
            case 'E':
                precio += 30;
                break;
            case 'F':
                precio += 10;
                break;
            default:
                break;
        }
        if (this.peso > 0 && this.peso <= 19) {
            precio += 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            precio += 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            precio += 80;
        }
        else {
            precio += 100;
        }
        this.precio = precio;
        return precio;
    }
}
