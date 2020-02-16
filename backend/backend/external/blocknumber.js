const axios = require('axios');
const HOST = 'https://mainnet.infura.io/v3/76859ff951d44071a9daec76119a7191';
const data = {
  jsonrpc: '2.0',
  method: 'eth_blockNumber',
  params: [],
  id: 1,
};
const OPTION = {
  url: HOST,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  data: JSON.stringify(data),
};

axios(OPTION).then(response => {
  console.log(response.data);
});
