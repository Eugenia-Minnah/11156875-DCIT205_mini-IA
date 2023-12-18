const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;



import express from "express"
import {connectDb} from "./helpers/db.js"



app.use(express.json());

mongoose.connect('mongodb://localhost:27017/patientDB',)

//Routes
app.post




