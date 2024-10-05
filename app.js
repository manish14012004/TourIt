const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like app.js and styles.css)
app.use(express.static(path.join(__dirname)));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

