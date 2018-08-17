module.exports = {
  networks: {
    development: {
      host: "52.59.238.144",
      port: 8545,
      network_id: "*",
      gas: 3000000
    },
    ropsten:  {
        network_id: 3,
        host: "172.16.163.129",
        port:  8545,
        gas: 4600000,
        gasPrice: 10000000000,
   }
  }
};

