// backend/server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
