const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index');

// Middleware to parse JSON requests
app.use(express.json());

// Load routes from routes/index.js
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
