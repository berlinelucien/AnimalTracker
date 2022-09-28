import express from "express";
const router = express.Router();
import db from "../db/db-connection.js";

 // route to get list of trainer
/* GET trainer listing. */
// server/routes/trainers.mjs`
router.get('/', async function (req, res, next) {

  try {
    const trainers = await db.any('SELECT * FROM trainers', [true]);
    res.send(trainers);
  } catch (e) {
    return res.status(400).json({ e });
  }
})

export default router;
