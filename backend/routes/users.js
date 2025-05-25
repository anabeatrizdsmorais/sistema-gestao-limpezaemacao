// routes/clientes.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // ajuste o caminho conforme seu projeto

router.get('/users', (req, res) => {
    const query = 'SELECT * FROM usuario WHERE ativo = 1';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuario:', err);
            return res.status(500).json({ erro: 'Erro ao buscar usuario' });
        }
        res.json(results);
    });
});

module.exports = router;
