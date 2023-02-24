const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./api/movies.json');

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);

// API
server.get('/products', (req, res) => {
    res.status(200).json({ products: router.db.get('products').value() });
});

server.listen(8080);
