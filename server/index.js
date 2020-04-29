const express = require('express');

const app = express();
const PORT = 3121;

app.listen(PORT);

app.use(express.static('public'));
