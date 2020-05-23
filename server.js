const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API...'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server on port ${PORT}`));