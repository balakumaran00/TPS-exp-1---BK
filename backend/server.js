// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js"; // make sure db.js exports the pg Pool as default

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// health
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "TPS backend running" });
});

// latest reading (most recent overall)
app.get("/api/generation/latest", async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, recorded_at, unit1_mw, unit2_mw, net_generation, frequency_hz
       FROM public.generation
       ORDER BY recorded_at DESC
       LIMIT 1`
    );
    if (!rows.length) return res.json({ found: false });
    res.json({ found: true, reading: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// search by date (YYYY-MM-DD) -> returns the latest reading on that day
app.get("/api/generation/search", async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).json({ error: "Missing date parameter (YYYY-MM-DD)" });

    const q = `
      SELECT id, recorded_at, unit1_mw, unit2_mw, net_generation, frequency_hz
      FROM public.generation
      WHERE (recorded_at AT TIME ZONE 'UTC')::date = $1::date
      ORDER BY recorded_at DESC
      LIMIT 1
    `;
    const { rows } = await pool.query(q, [date]);
    if (!rows.length) return res.json({ found: false });
    res.json({ found: true, reading: rows[0] });
  } catch (err) {
    console.error("SEARCH ERROR: ", err && err.stack ? err.stack : err);
    // return detailed error for debugging (dev only)
    return res.status(500).json({ error: "Database error", details: err && err.message ? err.message : String(err) });
  }
});


// example: page content route you already had (keeps existing logic)
app.get("/api/pages/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await pool.query("SELECT title, body FROM messages WHERE page_slug = $1", [slug]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Page content not found" });
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
