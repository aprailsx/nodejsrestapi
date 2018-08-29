var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'root',
database:'task',
// port: 'Applications/MAMP/tmp/mysql/mysql.sock'
port: 8889


});
module.exports=connection;