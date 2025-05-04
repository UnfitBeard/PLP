import express from "express"
import dotenv from 'dotenv'
import 'dotenv/config'
import { readFileSync } from "fs"
import path, { parse } from 'path'
import cors from "cors"
import exp from "constants"
import { userInfo } from "os"
import pkg from "pg"

const {Pool} = pkg

//1.configure the dotenv 
//top most level
dotenv.config({ path: __dirname + "../MyPortfolio/.env" })

//2.instance of express
//the second most top level
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
