const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db');
// const hash = await bcrypt.hash(senhaPlain, 10);

const router = express.Router();

router.post('/login', (req, res) => {
    // console.log('Body recebido:', req.body);
    const { email, password } = req.body;

    db.query('SELECT * FROM usuario WHERE email = ?', [email], async (err, results) => {
        if (err) 
            return res.status(500).json({ erro: 'Erro no banco de dados' });
        if (results.length === 0) 
            return res.status(401).json({ erro: 'Usuário não encontrado' });

        const usuario = results[0];

        // const senhaCorreta = await bcrypt.compare(password, usuario.senha);
        
        if (password !== usuario.senha) 
            return res.status(401).json({ erro: 'Senha inválida' });

        const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.json({ token });
    });
});

// Logout - limpa o cookie/token/sessão
router.post('/logout', (req, res) => {
    // se for JWT com cookie:
    res.clearCookie('token'); // ou o nome real do cookie
  
    // se for sessão (opcional)
    // req.session.destroy(() => {});
  
    res.status(200).json({ message: 'Logout efetuado' });
  });

//Rota teste
/* router.get('/', (req, res) => {
    res.send('API funcionando');
}); */

module.exports = router;
