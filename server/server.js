const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// Basic route for testing
app.get('/', (req, res) => res.send('API Running'));

// API
const users = require('./routes/api/users');

// Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Use Routes to connect
// app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
