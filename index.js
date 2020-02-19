console.log("🏃 AppStoreApiToken.js running 🏃‍")

const fs   = require('fs');
const jwt  = require('jsonwebtoken'); // npm i jsonwebtoken
// You get privateKey, apiKeyId and issuerId from your Apple App Store Connect account
const privateKey = fs.readFileSync("./AuthKey_RJ4W9549XS.p8") // this is the file you can only download once and should treat like a real, very precious key.
const apiKeyId = "RJ4W9549XS"
const issuerId = "0e346ec0-6364-3456-fe45-a983538ad6ed7"
let now = Math.round((new Date()).getTime() / 1000); // Notice the /1000 
let nowPlus20 = now + 1999 // 1200 === 20 minutes

let payload = {
    "iss": issuerId,
    "exp": nowPlus20,
    "aud": "appstoreconnect-v1"
}

let signOptions = {
    "algorithm": "ES256", // you must use this algorythm, not jsonwebtoken's default
    header : {
        "alg": "ES256",
        "kid": apiKeyId,
        "typ": "JWT"
    }
};

let token = jwt.sign(payload, privateKey, signOptions);
console.log('@token: ', token);