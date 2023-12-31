
const defCarga : number = 5;

class Lavadora extends Electrodomestico {

    //Atributos.
    private carga : number;

    //Constructor.
    constructor(newColor : colores, newConsumo : letraconsumo, newPeso : number, newCarga : number = defCarga) {
        super(newColor, newConsumo, newPeso)
        this.carga = newCarga;
        this.precio = this.precioFinal();
    }
    //Métodos.
    getCarga(){
        return this.carga;
    }

    comprobarCarga() : number{
        if(this.carga > 30){
            return this.precio += 50;
        }
        return this.precio;
    }

    precioFinal() : number{
        super.precioFinal() + this.comprobarCarga();
        return this.precio;
    }
}