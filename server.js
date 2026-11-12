
const express = require('express');

const app = express();

const PORT = 3000;

// Primeira rota da API
app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'Minha primeira API está funcionando!',
    tecnologia: 'Node.js + Express',
    status: 'sucesso'
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`API executando em http://localhost:${PORT}`);
});
