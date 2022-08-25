const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


let pessoas = [];

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/pessoas', (req, res) => {
	const pessoa = req.body;
    console.log(pessoa);
	veiculos.push(pessoa);
	res.send('Motorista adicionado com sucesso');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

