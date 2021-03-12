const express = require('express');

const app = express();
const port = 5050;

app.use(express.json());





app.listen(port, () => console.log('server is running on 5051'));