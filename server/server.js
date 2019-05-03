const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json({ extended: false }));

// Define routes
const userRoute = require('./routes/api/users');
const messageRoute = require('./routes/api/messages');
const mediaRoute = require('./routes/api/medias');

app.use('/api/users', userRoute);
app.use('/api/messages', messageRoute);
app.use('/api/medias', mediaRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
