//Import helper function
const {encryptPWD,comparePWD} = require('./helper');

// Encryption example
const encryptedPWD = encryptPWD("Vakindu Philliam")
console.log(encryptedPWD); 

// Decryption example if Passwords match
const matcher_True = comparePWD("Vakindu Philliam", encryptedPWD)
console.log(matcher_True);  // True

// Decryption example if Passwords do not match
const matcher_False = comparePWD("Pyramid IO", encryptedPWD)
console.log(matcher_False); // False
