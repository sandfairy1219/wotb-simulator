const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Add this line to serve static files
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/awc', (req, res) => {
    res.sendFile(path.join(__dirname,'awc.html'));
});

app.get('/blackbox', (req, res) => {
    res.sendFile(path.join(__dirname,'blackbox.html'));
});

app.get('/cta', (req, res) => {
    res.sendFile(path.join(__dirname,'cta.html'));
});

app.get('/massive', (req, res) => {
    res.sendFile(path.join(__dirname,'massive.html'));
});

app.get('/mega', (req, res) => {
    res.sendFile(path.join(__dirname,'mega.html'));
});

app.get('/mysterybox', (req, res) => {
    res.sendFile(path.join(__dirname,'mysterybox.html'));
});

app.get('/tank', (req, res) => {
    res.sendFile(path.join(__dirname,'tank.html'));
});

app.get('/alpha', (req, res) => {
    res.sendFile(path.join(__dirname,'alpha.html'));
});

app.get('/country', (req, res) => {
    res.sendFile(path.join(__dirname,'country.html'));
});

app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname,'event.html'));
});

app.get('/extras', (req, res) => {
    res.sendFile(path.join(__dirname,'extras.html'));
});

app.get('/type', (req, res) => {
    res.sendFile(path.join(__dirname,'type.html'));
});