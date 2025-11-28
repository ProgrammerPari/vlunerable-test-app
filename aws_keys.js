// VULNERABILITY 10: Hardcoded AWS Access Key
// SonarQube Rule: S2068
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

function uploadToS3(file) {
    console.log("Uploading using keys...");
}