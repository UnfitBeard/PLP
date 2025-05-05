import express from "express";
import connection from "./databaseconn.js";

const app = express();
app.use(express.json());

app.post("/tasks", async (req, res) => {
  const { title, description, user_id } = req.body;

  try {
    const conn = await connection.getConnection();
    const [result] = await conn.execute(
      "INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)",
      [title, description, user_id]
    );
    conn.release();
    res.status(201).json({ task_id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

app.get("/tasks/:task_id", async (req, res) => {
  const { task_id } = req.params;

  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.execute("SELECT * FROM tasks WHERE task_id = ?", [
      task_id,
    ]);
    conn.release();

    if (rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
  
});

const startServer = async () => {
  try {
    await connection.getConnection();
    console.log("Successfully connected to the database");

    app.listen(3000, () => {
      console.log("server listening on port 3000");
    });

  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};

startServer();
