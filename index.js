// console.log('hello world');
// const accountId = 2012255;
// let accountEmail = 'naab@gmail.com';
// var accountPassword = '12350';
// accountCity = 'bihariganj';
// accountId = 10;
// console.log(accountId, accountEmail, accountPassword, accountPassword);
// console.table([accountId, accountEmail, accountPassword, accountPassword]);
'use strict'; // treat all code as a newer version

const http = require('http');
const PORT = 3000;
const server = http.createServer(function (req, res) {
  res.end('hello world');
});
server.listen(
  3000 || PORT,
  console.log(`server listen on PORT ${hostname} ${PORT}`)
);
