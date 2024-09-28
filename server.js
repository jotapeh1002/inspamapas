const express = require('express');
const axios = require('axios'); // Importa o axios

const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'src')));

app.get('/api/populacao/:id', async (req, res) => {
    const municipioID = req.params.id;
    const url = `https://cors-anywhere.herokuapp.com/https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${municipioID}`;

    try {
        const response = await axios.get(url);
        res.send(response.data); // Envia os dados da resposta
    } catch (error) {
        res.status(error.response ? error.response.status : 500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
