const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const router = express.Router();

const port = process.env.SERVICE_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

db.connect();

router.post('/', function (req, res) {
    db.query(`INSERT INTO ${process.env.MYSQL_DB} SET ?`,
        { ...req.body, ip: req.connection.remote }, // salvar ip real do usuário
        function (err, result) {
            if (err) throw err;
            res.send(result);
            return console.log('Saved.')
        }
    );
});

app.use('/', router);
app.listen(port);

console.log(`Running on port ${port}`);