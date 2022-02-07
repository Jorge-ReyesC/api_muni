const config = require("./dbconfig");

class direccion{
    constructor(id_direccion,nombre_direccion){
        this.id_direccion=id_direccion;
        this.nombre_direccion=nombre_direccion;
    }
}
module.exports = direccion;