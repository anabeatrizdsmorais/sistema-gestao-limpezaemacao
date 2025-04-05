// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // permite requisições de outros domínios (como o React)
app.use(express.json());

app.get('/api/mensagem', (req, res) => {
  res.json({ mensagem: 'Olá do servidor Node.js!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));