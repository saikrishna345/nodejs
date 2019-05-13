var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//  var cors = require('cors');
//  var corsOptions = {
//      origin: "http://localhost:4200",
//      optionsSuccessStatus: 200
//  }
//  app.use(cors(corsOptions));

var mysqlconnection = mysql.createConnection({
host: 'localhost',
user:'root',
port: 3306,
password: 'krish',
database: 'mydatabase'
})

mysqlconnection.connect((err) =>{
    if(err){
        console.log('Connection unavailable');
    } else{
        console.log('Db connection succeeded');
    }
    asdgkjsgjdgA,GDKU
})


app.listen(3000,()=> console.log('server listening to port number 3000'));

app.get('/employees',function(req,res){
 mysqlconnection.query('SELECT * FROM employee',(err,rows,fields)=>{
if(!err){
    console.log(rows);
}
else{
    console.log(err);
}
 })

})
