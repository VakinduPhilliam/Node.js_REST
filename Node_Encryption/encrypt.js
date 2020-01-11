// Import dependency modules
const bcrypt = require('bcrypt-nodejs');

// Encryption

const encryptPWD =(password)=>{

    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
}

// Encrypt password
const encryptedPassword = encryptPWD('Vakindu')

// Print encrypted password
console.log(encryptedPassword);


// Decryption

// const decryptPWD = (password) => {

//    return bcrypt.compareSync(password, this.local.password);
// };

// Compare passwords

const comparePWD = (password1, password2) => {

    // Compare two passwords
    return bcrypt.compareSync(password1, password2);
};

var newPassword ="Vakindu";

// Decrypt passowrd
const TrueORFalse = comparePWD(newPassword, encryptedPassword);

// Print decrypted Password
if(TrueORFalse){

    console.log('Matched');
} else {
    console.log('Not Matched')
}
