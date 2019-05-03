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

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/messages', require('./routes/api/messages'));
app.use('/api/medias', require('./routes/api/medias'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
