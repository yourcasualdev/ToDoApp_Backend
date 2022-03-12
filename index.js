const express = require('express');
const app = express();
const { connectDB } = require('./config/db');
const mongoose = require('mongoose');
require('dotenv').config()
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));


app.use('/login', require('./routes/login'));
app.use('/api/todos', require('./routes/todos'));



app.listen(PORT, console.log(`Server started on port ${PORT}`.cyan.underline.bold));	