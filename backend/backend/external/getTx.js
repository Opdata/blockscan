const axios = require('axios');
const fs = require('fs');
const number = '0x905898';
// const blocksData = require(`${__dirname}/data/blocks_${number}.json`);
const txsData = require(`${__dirname}/data/txs_${number}.json`);

const getTransactionReceipt = hash => {
  const HOST = 'https://mainnet.infura.io/v3/76859ff951d44071a9daec76119a7191';

  const data = {
    jsonrpc: '2.0',
    method: 'eth_getTransactionReceipt',
    params: [hash],
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

  return axios(OPTION).then(response => {
    let data = response.data;
    const { result } = data;
    const { gasUsed } = result;
    return parseInt(gasUsed);
  });
};

const getTx = index => {
  const { result } = blocksData;

  const { transactions } = result;

  const data = {};
  const transaction = transactions[index];
  Object.keys(transaction).forEach(key => {
    data[key] = transaction[key];
  });

  const tx = {};
  Object.keys(data).forEach(key => {
    if (
      key === 'blockNumber' ||
      key === 'gas' ||
      key === 'gasPrice' ||
      key === 'nonce' ||
      key === 'value'
    ) {
      tx[key] = parseInt(data[key]);
    } else {
      tx[key] = data[key];
    }
  });

  console.log(tx);
};

// getTx(1);

const writeTxsFee = async () => {
  const { result } = blocksData;
  const { transactions } = result;

  //     tx 필요한 데이터만 파싱
  //   const txs = [];
  let txs = {};
  for (const [index, tx] of transactions.entries()) {
    const { gas, gasPrice, hash } = tx;
    const txObj = {
      hash,
      gas: parseInt(gas),
      gasPrice: (parseInt(gasPrice) * Math.pow(10, -18)).toFixed(18),
      gasUsed: await getTransactionReceipt(hash),
    };

    txs[index] = txObj;
  }

  txs = JSON.stringify(txs);

  fs.writeFileSync(`${__dirname}/data/txs_${number}.json`, txs, 'utf-8');
};
// writeTxsFee();

const getTxFee = () => {
  let total = 0;
  for (const tx in txsData) {
    const { gas, gasPrice, gasUsed } = txsData[tx];
    fee = parseFloat(gasPrice) * gasUsed;
    total += fee;
  }
  console.log(total);
};

getTxFee();
