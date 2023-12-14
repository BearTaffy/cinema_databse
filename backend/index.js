import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Bear',
    password: 'root',
    database: 'cinema'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected');
});

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello World!');
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});

export { db };