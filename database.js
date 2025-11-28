const mysql = require('mysql');

// VULNERABILITY 1: Hardcoded Credentials (Critical)
// SonarQube Rule: S2068
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'superSecretPassword123!', 
  database: 'users_db'
});

connection.connect();

function getUser(userId, callback) {
    // VULNERABILITY 2: SQL Injection (Critical)
    // SonarQube Rule: S3649
    const query = "SELECT * FROM users WHERE id = " + userId; 
    
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });
}

module.exports = { getUser };