const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const db = require('../db');

dotenv.config();
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, senha } = req.body;
    const hash = await bcrypt.hash(senha, 10);
  
    db.query(
      'INSERT INTO usuario (email, senha) VALUES (?, ?)',
      [email, hash],
      (err, result) => {
        if (err) return res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
        res.status(200).json({ mensagem: 'Usuário cadastrado com sucesso!' });
      }
    );
  });
  
  module.exports = router;