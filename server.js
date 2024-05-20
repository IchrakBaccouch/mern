console.clear();
//importation
const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./Models/Movie.js");

//assign
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


// connect to DB
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected error : ", err));
//end connect

// Middelware
app.use(express.json());

//just a simple POST Method for testing
app.post("/",async(req,res)=>{
  try {
    const newMovie = Movie(req.body)
    await newMovie.save()
    res.status(200).send({msg:"new movie added",error});
    
  } catch (error) {
    res.status(500).send({msg:"invalid request",error});
  }
});
// Start server
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:${PORT}`);
});