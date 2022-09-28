import express from "express";
const router = express.Router();
//import db from "../db/db-connection.js";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express is working' });
});

export default router;
