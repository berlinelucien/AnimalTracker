import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

 
/* GET individuals listing. */
// server/routes/individuals.mjs`
router.get('/', async function (req, res, next) {

  try {
    const individuals = await db.any('SELECT * FROM individuals', [true]);
    res.send(individuals);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

export default router;
