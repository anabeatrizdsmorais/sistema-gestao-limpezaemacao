// db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
// dotenv.config({ path: path.resolve(__dirname, '.env') });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// console.log('Usuário do banco:', process.env.DB_USER);
// console.log('Senha do banco:', process.env.DB_PASSWORD);

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  }
});

module.exports = db;
