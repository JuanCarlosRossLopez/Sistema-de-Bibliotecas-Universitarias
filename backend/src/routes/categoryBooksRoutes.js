const express = require("express");
const route = express.Router();
const categoryBooksCOntroller= require("../controllers/catergoryBooksController");


route.get("/",categoryBooksCOntroller.getCategorys);


module.exports= route;