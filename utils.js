const fs = require('fs');
const path = require('path');

function readFile(filename) {
    // VULNERABILITY 6: Path Traversal (High)
    // SonarQube Rule: S2083
    // Attacker can send: ../../../etc/passwd
    const filePath = path.join(__dirname, 'uploads', filename);
    
    // VULNERABILITY 7: Sync File Read in Server (Performance/DoS)
    // SonarQube Rule: S2963
    return fs.readFileSync(filePath, 'utf8');
}

function debugLog(data) {
    // VULNERABILITY 8: Console Logging (Info/Low)
    // SonarQube Rule: S2228
    console.log("DEBUG DATA: " + data);
    
    // VULNERABILITY 9: Commented out code (Code Smell)
    // SonarQube Rule: S125
    // var temp = data + " test";
    // return temp;
}

module.exports = { readFile, debugLog };