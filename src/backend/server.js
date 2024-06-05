const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'phpmyadmin',
    password: 'Gustavo',
    database: 'bibliotecacoffe'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
});

app.get('/cadastro', (req, res) => {
    const sql = 'SELECT * FROM cadastro';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching cadastros:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});

app.post('/cadastro', (req, res) => {
    const newUser = req.body;
    if (!newUser.nome_completo || !newUser.email || !newUser.senha) {
        res.status(400).send('Bad Request: Missing required fields');
        return;
    }

    const sql = 'INSERT INTO cadastro SET ?';
    db.query(sql, newUser, (err, result) => {
        if (err) {
            console.error('Error adding new user:', err);
            res.status(500).send('Server error');
            return;
        }
        res.send('User added...');
    });
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        res.status(400).send('Bad Request: Missing required fields');
        return;
    }

    const sql = 'SELECT * FROM cadastro WHERE email = ? AND senha = ?';
    db.query(sql, [email, senha], (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).send('Server error');
            return;
        }

        if (results.length > 0) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
