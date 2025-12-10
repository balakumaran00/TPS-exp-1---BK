// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// simple API to test
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "TPS backend running" });
});

// get page content from Postgres by slug
app.get("/api/pages/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await pool.query(
      "SELECT title, body FROM messages WHERE page_slug = $1",
      [slug]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Page content not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

