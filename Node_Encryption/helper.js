// helpers.js
// Import dependency modules
const bcrypt = require('bcrypt-nodejs');

// Password encryption Function
const encryptPWD =(password)=>{

    // Hash password and salt with md5 encryption
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10),null);
};


// Password comparison Functon
const comparePWD = (password1, password2) => {

    // Compare two passwords
    return bcrypt.compareSync(password1, password2);
};

// Export module
module.exports={encryptPWD, comparePWD};