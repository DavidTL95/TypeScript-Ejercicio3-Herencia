
class Television extends Electrodomestico{
    //Atributos.
    private resolucion : number;
    private cuatroK : boolean;

    //Constructor.
    constructor(newColor : colores, newConsumo : letraconsumo, newPeso : number, newResolucion : number = 20, newCuatroK : boolean = false) {
        super(newColor, newConsumo, newPeso);
        this.resolucion = newResolucion;
        this.cuatroK = newCuatroK;
        this.precio = this.precioFinal();
    }
    //Métodos.
    getResolucion(){
        return this.resolucion;
    }

    precioTV() : number{
        if(this.resolucion > 40){
            this.precio = this. precio + (this.precio * 30) / 100
        }
        return this.precio;
    }

    calculoCuatroK() : number{
        if(this.cuatroK === true){
            this.precio += 50;
        }
        return this.precio;
    }

    precioFinal(): number {
        super.precioFinal() + this.precioTV() + this.calculoCuatroK();
        return this.precio;
    }
}