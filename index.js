//importar las librerias necesarias
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyparser = require('body-parser');
const nodemon = require('nodemon');



//datos de la conexion
const config ={
    host: '127.0.0.1',
    user:'root' ,
password:'nora505',
database:'proyectos'
}


//conexion a la base de datos
const db = mysql.createConnection(config);

//verificar la conexion
db.connect((err) =>{
    if (err) {
        console.log('error de conexion' , err);
        return;
    }
    console.log('conexion exitosa');
});


//crear el servidor con expres 
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
//ruta para crear los proyectos
app.get('/proyectos', (req, res) =>{
    db.query('SELECT * FROM proyectos' , (err, result) =>{
        if(err){
            console.log('error al obtener los proyectos' , err);
            return;
        }
        res.json(result);
    });
});

app.listen(3000,()  => {
    console.log('servidor corriendo en el puerto 3000')
})