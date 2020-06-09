const path = require('path');
const express = require('express');
const router = require('./routes/router');

// Initiate
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static('public'));
app.set('views', 'views');

// Initialize Router
app.use('/', router);

const PORT = process.env.PORT || 2728;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
