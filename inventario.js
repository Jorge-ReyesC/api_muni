const config = require("./dbconfig")

class inventario{
    constructor(id_inventario,nombre,fabricante,fecha_adquisicion,capacidad_almacenamiento,ram,cpu,estado){
        this.id_inventario=id_inventario;
        this.nombre=nombre;
        this.fabricante=fabricante;
        this.fecha_adquisicion=fecha_adquisicion;
        this.capacidad_almacenamiento=capacidad_almacenamiento;
        this.ram=ram;
        this.cpu=cpu;
        this.estado=estado;
    }
}

module.exports = inventario;

