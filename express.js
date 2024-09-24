const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
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