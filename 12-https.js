const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page.");
        return;
    }

    if(req.url === '/about'){
        res.end("Welcome to about page.");
        return;
    }

    res.end(`
        <h1>oops!!</h1>
        <p>The page you requested doesn't exist.</p>
        <a href="/">return to home page.</a>
    `)
})

server.listen(5050)