const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const todosRoutes = require('./routes/todos');

// Express app conf
const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;

// Mongoose conf
mongoose.set('useFindAndModify', false);

// mongodb connection
mongoose.connect(process.env.mongodb, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to the db ✌');
        app.listen(PORT);
    })
    .catch((err) => {
        console.log(err);
    });

/************************************
 * ROUTES
 ***********************************/

// HOME
app.get('/', (req, res) => {
    res.send('Welcome MF!');
});

// TODOS ROUTES
app.use('/todos', todosRoutes);