const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


let veiculos = [];

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/veiculo', (req, res) => {
	const veiculo = req.body;
    console.log(veiculo);
	veiculos.push(veiculo);
	res.send('Veículo adicionado com sucesso');
});
app.get('/veiculo', (req, res) => {
    res.json(veiculos);
});
app.get('/veiculo/:placa', (req, res) => {
    
    const placa = req.params.placa;

    
    for (let veiculo of veiculos) {
        if (veiculo.placa === placa) {
            res.json(veiculo);
            return;
        }
    }

    
    res.status(404).send('Veículo não encontrado');
});

app.delete('/veiculo/:placa', (req, res) => {
    
    const placa = req.params.placa;

   
    veiculos = veiculos.filter(i => {
        if (i.placa !== placa) {
            return true;
        }

        return false;
    });

    res.send('Veiculo excluido');
});

app.post('/veiculo/:placa', (req, res) => {

    const placa = req.params.placa;
    const novoVeiculo = req.body;

   
    for (let i = 0; i < veiculos.length; i++) {
        let veiculo = veiculos[i]

        if (veiculo.placa === placa) {
            veiculos[i] = novoVeiculo;
        }
    }

   
    res.send('Veiculo editado');
});
app.listen(port, () => console.log(`Escutando a porta ${port}!`))

