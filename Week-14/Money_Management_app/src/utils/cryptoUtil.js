const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
require('dotenv').config();
const private_key = process.env.PRIVATE_KEY;
const initVector = process.env.INIT_VECTOR;


const encrypt = (text) => {
   const key = hexToBytes(private_key);
   const iv = hexToBytes(initVector);
   let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), Buffer.from(iv));
   let encrypted = cipher.update(text);
   encrypted = Buffer.concat([encrypted, cipher.final()]);
   return encrypted.toString('hex');
}

// const decrypt = (text) => {
//    let iv = Buffer.from(text.iv, 'hex');
//    let encryptedText = Buffer.from(text.encryptedData, 'hex');
//    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
//    let decrypted = decipher.update(encryptedText);
//    decrypted = Buffer.concat([decrypted, decipher.final()]);
//    return decrypted.toString();
// }

const hexToBytes = (hex) => {
   for (var bytes = [], c = 0; c < hex.length; c += 2)
       bytes.push(parseInt(hex.substr(c, 2), 16));
   return bytes;
}

module.exports = {encrypt}