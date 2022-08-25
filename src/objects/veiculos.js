const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


let veiculos = [];

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/veiculos', (req, res) => {
	const veiculo = req.body;
    console.log(veiculo);
	veiculos.push(veiculo);
	res.send('Veículo adicionado com sucesso');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

