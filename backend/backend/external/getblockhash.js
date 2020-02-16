const axios = require('axios');
const fs = require('fs');

const HOST = 'https://mainnet.infura.io/v3/76859ff951d44071a9daec76119a7191';
// 블록 높이 9459864;
const data = {
  jsonrpc: '2.0',
  method: 'eth_getBlockByHash',
  params: ['0xfe04f7c99866f3e8fc1aa475bebbeb25a01616dc3ba20ad36ad685ecce1ac5ea', true],
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

const getBlockByHash = () => {
  axios(OPTION).then(response => {
    let data = response.data;
    let { result } = data;
    let { number } = result;
    data = JSON.stringify(data);
    number = parseInt(number);
    fs.writeFileSync(`${__dirname}/data/blocks_${number}.json`, data, 'utf-8');
  });
};

getBlockByHash();

function hexToString(hex) {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
}

// const main = () => {
//   const { result } = blocksData;
//   const data = {};

//   Object.keys(result).forEach(key => {
//     if (key === 'logsBloom') return;
//     if (key === 'extraData') {
//       extraData = hexToString(result[key]);
//       data[key] = extraData;
//     } else if (key === 'transactions') {
//       data[key] = result[key].length;
//     } else if (
//       key === 'hash' ||
//       key === 'parentHash' ||
//       key === 'uncles' ||
//       key === 'nonce' ||
//       key === 'sha3Uncles' ||
//       key === 'miner'
//     ) {
//       data[key] = result[key];
//     } else {
//       data[key] = parseInt(result[key]);
//     }
//   });

//   const transactions = result['transactions'];
//   console.log(transactions);
//   // console.log(data);
// };

// // main();

// const getTx = () => {
//   const { result } = blocksData;
//   const { transactions } = result;
//   const data = {};
//   const transaction = transactions[3];
//   Object.keys(transaction).forEach(key => {
//     data[key] = transaction[key];
//   });

//   const res = {};
//   Object.keys(data).forEach(key => {
//     if (
//       key === 'blockNumber' ||
//       key === 'gas' ||
//       key === 'gasPrice' ||
//       key === 'nonce' ||
//       key === 'value'
//     ) {
//       res[key] = parseInt(data[key]);
//     } else {
//       res[key] = data[key];
//     }
//   });

//   // console.log('block gas used,', parseInt('0x976ad8') * 1 * parseInt('0x972c0e'));
//   // console.log(res['gas'] * res['gasPrice'] * parseInt('0x5228'));
// };

// getTx();
