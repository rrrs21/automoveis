const setEditModal = (placa) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/veiculo/${placa}`, false);
    xhttp.send();

    const veiculo = JSON.parse(xhttp.responseText);

    const {
        placa, 
        cor, 
        marca, 
    } = veiculo;

    document.getElementById('placa').value = placa;
    document.getElementById('cor').value = cor;
    document.getElementById('marca').value = marca;
    document.getElementById('editForm').action = `http://localhost:3000/veiculo/${placa}`;
}


const deleteVeiculos = (placa) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:3000/veiculo/${placa}`, false);
    xhttp.send();

    location.reload();
}

const loadVeiculos = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/veiculo", false);
    xhttp.send();

    const veiculos = JSON.parse(xhttp.responseText);

    for (let veiculos of veiculos) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${veiculos.marca}</h5>
                        <div>Placa: ${veiculos.placa}</div>
                        <div>Cor: ${veiculos.cor}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editVeiculosModal" onClick="setEditModal(${veiculos.placa})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('veiculos').innerHTML = document.getElementById('veiculos').innerHTML + x;
    }
}

loadVeiculos();