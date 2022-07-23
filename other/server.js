const http = require('http');
const fs = require('fs');
const _ = require('lodash')


const server = http.createServer( (req, res) => {

   //  console.log('requst is made');
//    console.log(req.url, req.method);

// Lodash
const num = _.random(0, 20);
console.log(num);


// set h=header content
   res.setHeader('content-type', 'text/html');

   let path = './View/';
   switch(req.url){
    case '/': 
        path += 'index.html'; 
        res.statusCode = 200; // attached response with the path fo better result
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;

    // redierct to about
    case '/about-me':
        res.statusCode = 301; // need to be written
        res.setHeader('Location', '/about');
        res.end();
        break;

    default:
        path += '404.html';
        res.statusCode = 404;
        break; 
    }
//    res.write('<head> <link rel="stylesheet" href="./css.css"> </head>');
//    res.write('<h4>Hello</h4>');
//    res.write('<p>im your dady</p>');
//    res.end();




// send an html file
fs.readFile(path, (err, data) => {
    if(err){
        console.log(err);
        res.end();
    }else{
        //res.write(data); // in case we have multiple pages
        res.end(data); // in case we have one page only 
    }

} )


})

server.listen(3000, 'localhost', ()=> {
    console.log('listing for port 3000');
})