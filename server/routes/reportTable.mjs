import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

 
/* GET individuals and species and sightings listing. */
// server/routes/individuals.mjs`
router.get('/', async function (req, res, next) {

  try {
    const reportTable = await db.any('SELECT common_name, scientific_name, population, location, healthy, email, nick_name, seen_on FROM individuals, species, sightings WHERE individuals.id = 1 LIMIT 10', [true]);
    res.send(reportTable);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

export default router;