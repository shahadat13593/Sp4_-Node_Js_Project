// shahadat hossain
// id: 201-15-13593

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
    
});

server.listen(3000, 'localhost', ()=> {
console.log('listing for request on port 3000')

});