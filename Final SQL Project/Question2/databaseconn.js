import mysql from 'mysql2/promise'
var connection = mysql.createPool({
    host: '127.0.0.1',    
    user: 'root',       
    password: 'my-secret-pw', 
    database: 'task_db', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

export default connection