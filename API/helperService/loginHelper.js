const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');
var nJwt = require('njwt');

let loginHelper = {};

loginHelper.generatePasswordHash = (password) =>{
    return "SHA-" + crypto.createHash("sha256").update(password).digest("base64");
}
loginHelper.generateJWTToken = (userDetails) => {
    let secretKey = uuidv4();
    let claims = {
        userId: userDetails.userid,
        username: userDetails.name,
        iss: global.gConfig.app_name,
        permissions: userDetails.role
    }
    let jwToken = nJwt.create(claims, secretKey).compact();
    console.log(jwToken);
    return jwToken;
}
module.exports = loginHelper;