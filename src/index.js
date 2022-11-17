const JWT_SECRET = process.env.JWT_GENERATOR_SECRET
const jwt = require('njwt')
const claims = { iss: 'fun-with-jwts', userId:"111111111", accountNumber: "00000000", sub: "11111111" }
const token = jwt.create(claims, JWT_SECRET)
// Set token longer
token.setExpiration(new Date().getTime() + 60*60*24*1000)
console.log(token)
console.log(token.compact())