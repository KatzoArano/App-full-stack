const  mysql = require('mysql');


const  pool  = mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'gamesDatabase'      
});

pool.getConnection(function(err: any, connection: any) {
    // connection.release();
    console.log('DB is connected');
});

export default pool;