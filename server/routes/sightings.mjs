import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

 // route to get list of scientist
/* GET sighting listing. */
router.get('/', async function (req, res, next) {

    try {
      const sightings = await db.any('SELECT * FROM sightings', [true]);
      res.send(sightings);
    } catch (e) {
      return res.status(400).json({ e });
    }
  })
  
export default router;
