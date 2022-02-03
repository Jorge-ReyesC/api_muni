// Agregamos la configuracion de la base de datos
var config = require ('./dbconfig');

const sql = require('mssql');




// Añadimos un inventario

async function addInventario(Inventario) {
    try{
        let pool = await sql.connect(config);
        let insertarInventario = await pool.request()
            .input('id_inventario',sql.Int,Inventario.id_inventario)
            .input('nombre',sql.Int,Inventario.nombre)
            .input('fabricante',sql.Int,Inventario.fabricante)
            .input('fecha_adquisicion',sql.Int,Inventario.fecha_adquisicion)
            .input('capacidad_almacenamiento',sql.Int,Inventario.capacidad_almacenamiento)
            .input('ram',sql.Int,Inventario.ram)
            .input('cpu',sql.Int,Inventario.cpu)
            .input('estado',sql.Int,Inventario.estado)
            .execute('addInventario');
        return insertarInventario.recordset;
    }
    catch(err){
        console.log(err)
    }
}

// Añadimos un Usuario si es que quieren

async function addUsuario(Usuario) {
    try{
        let pool = await sql.connect(config);
        let insertarUsuario = await pool.request()
            .input('nombre',sql.Int,Inventario.nombre)
            .input('direccion',sql.Int,Inventario.fabricante)
            .input('fecha_recibo',sql.Int,Inventario.fecha_adquisicion)
            .input('fecha_devolucion',sql.Int,Inventario.capacidad_almacenamiento)
            .execute('addUsuario');
        return insertarUsuario.recordset;
    }catch(err){
        console.log(err)
        }
}

// Obtener Los datos del inventario

async function getInventario(){
    try{
        let pool = await sql.connect(config);
        let inventario = await pool.request().query("select * from inventario");
        return inventario.recordsets;
    }catch(error){
        console.log(error);
    }
}