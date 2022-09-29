import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

 
/* GET individuals and species and sightings listing. */
// server/routes/individuals.mjs`
router.get('/', async function (req, res, next) {

  try {
    const joinTable = await db.any('SELECT common_name, scientific_name, population, conservation_status,date_time, location, healthy, email, nick_name, seen_on FROM individuals, species, sightings WHERE species_id = sightings.individual_id', [true]);
    res.send(joinTable);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

export default router;
