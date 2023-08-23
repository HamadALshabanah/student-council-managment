const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const eventRoutes = require('./routes/event-routes');
const userRoutes = require('./routes/user-routes');


// Serve static files
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.set('view engine', 'ejs');

// Import and use event routes
app.use('/event', eventRoutes);
app.use('/user', userRoutes);
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://127.0.0.1:27017/studentdb',{useNewUrlParser: true, useUnifiedTopology: true})


// Redirect root URL to events route
app.get('/', (req, res) => {
  res.redirect('/event');
});

// Start the server
app.listen(5500, () => {
  console.log('Listening on port 5500');
});
