// const express = require('express');
// const routes = require('./controllers');
// const sequelize = require('./config/connection');

import express from 'express';
import routes from './controllers/index.js';
import sequelize from './config/connection.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>  {
        console.log(`App listening on port ${PORT}`)
    });
})