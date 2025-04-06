const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const db = require('../db');

dotenv.config();
const router = express.Router();

// Login
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  db.query('SELECT * FROM usuario WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ erro: 'Erro no banco de dados' });
    if (results.length === 0) return res.status(401).json({ erro: 'Usuário não encontrado' });

    const usuario = results[0];

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) return res.status(401).json({ erro: 'Senha inválida' });

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token });
  });
});