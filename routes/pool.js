
var mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
 
 host : 'localhost',
   user: 'dailynourish',
    password : 'Dailynourish123@$',
    database: 'dailynourish',
    port:'3306' ,
    multipleStatements: true
  })


module.exports = pool;