"use strict";
const defCarga = 5;
class Lavadora extends Electrodomestico {
    //Constructor.
    constructor(newColor, newConsumo, newPeso, newCarga = defCarga) {
        super(newColor, newConsumo, newPeso);
        this.carga = newCarga;
        this.precio = this.precioFinal();
    }
    //Métodos.
    getCarga() {
        return this.carga;
    }
    comprobarCarga() {
        if (this.carga > 30) {
            return this.precio += 50;
        }
        return this.precio;
    }
    precioFinal() {
        super.precioFinal() + this.comprobarCarga();
        return this.precio;
    }
}
