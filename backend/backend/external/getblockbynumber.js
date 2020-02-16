const axios = require('axios');
const fs = require('fs');
const blocksData = require(`${__dirname}/data/blocks_0x905898.json`);
const { hexToString } = require('../util');
// 9459864 - 3 개의 트랜잭션
// 9459861 - 5 개의 트랜잭션

const HOST = 'https://mainnet.infura.io/v3/76859ff951d44071a9daec76119a7191';
// 블록 높이 9459864;
let number = `0x${905898}`;
// let number = `0x${905895}`;

const data = {
  jsonrpc: '2.0',
  method: 'eth_getBlockByNumber',
  params: [number, true],
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
    data = JSON.stringify(data);

    fs.writeFileSync(`${__dirname}/data/blocks_${number}.json`, data, 'utf-8');
  });
};

// getBlockByHash();

const getBlocks = () => {
  const { result } = blocksData;
  const block = {};

  Object.keys(result).forEach(key => {
    if (key === 'logsBloom') return;
    if (key === 'extraData') {
      extraData = hexToString(result[key]);
      block[key] = extraData;
    } else if (key === 'transactions') {
      block[key] = result[key].length;
    } else if (
      key === 'hash' ||
      key === 'parentHash' ||
      key === 'uncles' ||
      key === 'nonce' ||
      key === 'sha3Uncles' ||
      key === 'miner' ||
      key === 'mixHash' ||
      key === 'transactionsRoot' ||
      key === 'stateRoot' ||
      key === 'totalDifficulty'
    ) {
      block[key] = result[key];
    } else {
      block[key] = parseInt(result[key]);
    }
  });

  const transactions = result['transactions'];
  console.log(block);
};

getBlocks();
