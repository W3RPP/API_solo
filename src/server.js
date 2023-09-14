const express = require('express');

const app = express();

const PORT = 3000

app.get('/api/teste', (request, response) => {
    response.send('bora devs');
});

app.listen(PORT, () => console.log(`running at port ${PORT}`));