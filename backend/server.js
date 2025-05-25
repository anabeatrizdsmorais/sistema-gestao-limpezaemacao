const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const getPort = require('get-port');

const authRoutes = require('./routes/auth');
const clientsRoute = require('./routes/clients');
const registerClientsRoute = require('./routes/registerClients');
const usersRoute = require('./routes/users');

dotenv.config({ path: __dirname + '/.env' });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', clientsRoute); // agora responde em /api/clients
app.use('/api', usersRoute); // agora responde em /api/users
app.use('/api', registerClientsRoute); // agora responde em /api/users

(async () => {
  const defaultPort = process.env.PORT || 5000;

  app.listen(defaultPort, () => {
    console.log(`Servidor rodando na porta ${defaultPort}`);
  });
})();