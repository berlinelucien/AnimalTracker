import express from "express";
const router = express.Router();
import cors from "cors";
import db from "../db/db-connection.js";

// route to get list of species (po)
/* GET species  listing. */
router.get("/", async function (req, res, next) {
  try {
    const species = await db.any("SELECT * FROM species", [true]);
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// POST update information
router.post("/", cors(), async (req, res) => {
  const species = {
    id: req.body.id,
    common_name: req.body.common_name,
    scientific_name: req.body.scientific_name,
    population: req.body.population,
    conservation_status: req.body.conservation_status,
  };
  console.log(species);
  try {
    const createdSpecies = await db.one(
      "INSERT INTO species(id, common_name, scientific_name, population, conservation_status) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        species.id,
        species.common_name,
        species.scientific_name,
        species.population,
        species.conservation_status,
      ]
    );
    console.log(createdSpecies);
    res.send(createdSpecies);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;
