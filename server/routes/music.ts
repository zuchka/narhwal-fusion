import { Router } from "express";

const router = Router();

// Proxy endpoint for Deezer chart albums
router.get("/albums", async (req, res) => {
  try {
    const response = await fetch("https://api.deezer.com/chart/0/albums");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching albums:", error);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
});

// Proxy endpoint for Deezer chart tracks
router.get("/tracks", async (req, res) => {
  try {
    const response = await fetch("https://api.deezer.com/chart/0/tracks");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching tracks:", error);
    res.status(500).json({ error: "Failed to fetch tracks" });
  }
});

export default router;
