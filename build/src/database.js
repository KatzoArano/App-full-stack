"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gamesDatabase'
});
pool.getConnection(function (err, connection) {
    // connection.release();
    console.log('DB is connected');
});
exports.default = pool;
