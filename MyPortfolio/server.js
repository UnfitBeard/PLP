import dotenv from 'dotenv'
import 'dotenv/config'
const express = require('express');
const { Pool } = require('pg');

dotenv.config({path: __dirname+'/.env'})
const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/api/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Error retrieving projects.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
