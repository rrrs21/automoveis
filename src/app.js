const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
//Rotas
const index = require('./routes/index');
const rota = require('./routes/route');
app.use('/', index);
app.use('/veiculo', rota);
app.use('/pessoa', rota);
app.get('/', (req, res) => res.send('Controle de automoveis'));
app.listen(port, () => console.log(`Escutando a porta ${port}!`));

module.exports = app;

