const express = require('express');
const { exec } = require('child_process');
const crypto = require('crypto');
const app = express();

app.get('/ping', (req, res) => {
    const ip = req.query.ip;
    
    // VULNERABILITY 3: Command Injection (Critical)
    // SonarQube Rule: S2076
    // Attacker can send: 127.0.0.1; rm -rf /
    exec('ping -c 1 ' + ip, (err, stdout, stderr) => {
        if (err) {
            return res.status(500).send('Error');
        }
        res.send(stdout);
    });
});

app.get('/welcome', (req, res) => {
    const name = req.query.name;
    
    // VULNERABILITY 4: Reflected XSS (High)
    // SonarQube Rule: S5131
    // Attacker can send: <script>alert(1)</script>
    res.send('<h1>Welcome ' + name + '</h1>');
});

app.get('/token', (req, res) => {
    // VULNERABILITY 5: Weak Cryptography (Medium)
    // SonarQube Rule: S4790
    // MD5 is broken and should not be used
    const hash = crypto.createHash('md5').update('secret').digest('hex');
    res.send(hash);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});