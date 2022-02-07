var db = require ('./dboperations');
// Metemos la tabla para que haga el procedimiento
const Inventario = require('./inventario')

const dboperations = require ('./dboperations');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app =express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

// Server Listo

router.use((request,response,next) => {
    console.log('Server listo?');
    next();
})

/*
Ruta Para insertar el inventario
*/
router.route('/inventario/nuevo').post((request,response)=>{
    let inventario = {...request.body}
    dboperations.newInventario(inventario).then(result=>{
        response.json(result[0]);
    }),
    (err)=>{
        console.log(err.message);
        response.json(err.message);
    }
});

/**
 * Call para obtener inventario
 */
async function ObtenerInventario(request,response){
    var resultado = await dboperations.getInventario();
    response.send(resultado);
}
app.get('/inventario', ObtenerInventario)


var port = process.env.PORT || 8091;
app.listen(port);
console.log('La api funciona y esta en el puerto: '+ port);