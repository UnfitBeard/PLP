import mysql from 'mysql2/promise'
const connection = mysql.createPool({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "yourdatabase",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection