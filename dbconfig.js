// ESTA ES LA CONFIGURACION DE LA BASE DE DATOS PARA ENTRAR A ELLA Y A LA BASE DE DATOS

const config = {
    user: 'admin',
    password: 'hola2021',
    server: 'bd1.ctrxho0jcznb.us-east-1.rds.amazonaws.com',
    database: 'DB-project',
    "options": {
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: false
        }
}




module.exports = config;