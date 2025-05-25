const mysql = require('mysql2');
// console.log('Caminho atual:', process.cwd());
// const fs = require('fs');
// console.log('.env existe?', fs.existsSync('.env'));
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'limpezaemacao_dev',
});
/* const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}); */

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  }
});

module.exports = db; // ← isso FICA aqui