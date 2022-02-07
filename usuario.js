const config = require("./dbconfig");

class usuario{
    constructor(nombre,rut,direccion,fecha_recibo,fecha_devolucion){
        this.nombre=nombre;
        this.rut=rut;
        this.direccion=direccion;
        this.fecha_recibo=fecha_recibo;
        this.fecha_devolucion=fecha_devolucion;
    }
}
module.exports = usuario;