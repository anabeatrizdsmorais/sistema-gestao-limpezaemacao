const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const getPort = require('get-port');
const authRoutes = require('./routes/auth');

dotenv.config({ path: __dirname + '/.env' });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/auth'));

(async () => {
  const defaultPort = process.env.PORT || 5000;
  const port = await getPort({ port: Number(defaultPort) });

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
})();