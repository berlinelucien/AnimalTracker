import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

 // route to get list of species (po)
/* GET species  listing. */
router.get('/', async function (req, res, next) {

    try {
      const species = await db.any('SELECT * FROM species', [true]);
      res.send(species);
    } catch (e) {
      return res.status(400).json({ e });
    }
  })
  
export default router;
