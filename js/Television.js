"use strict";
class Television extends Electrodomestico {
    //Constructor.
    constructor(newColor, newConsumo, newPeso, newResolucion = 20, newCuatroK = false) {
        super(newColor, newConsumo, newPeso);
        this.resolucion = newResolucion;
        this.cuatroK = newCuatroK;
        this.precio = this.precioFinal();
    }
    //Métodos.
    getResolucion() {
        return this.resolucion;
    }
    precioTV() {
        if (this.resolucion > 40) {
            this.precio = this.precio + (this.precio * 30) / 100;
        }
        return this.precio;
    }
    calculoCuatroK() {
        if (this.cuatroK === true) {
            this.precio += 50;
        }
        return this.precio;
    }
    precioFinal() {
        super.precioFinal() + this.precioTV() + this.calculoCuatroK();
        return this.precio;
    }
}
