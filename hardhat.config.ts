import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    a1_testnet: {
      url: `https://rpc-devnet-algorand-rollup.a1.milkomeda.com`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    ganache: {
      url: 'http://localhost:8545',
      chainId: 1337,
      accounts: ['0xdd23ca549a97cb330b011aebb674730df8b14acaee42d211ab45692699ab8ba5']
    }
  }  
};

export default config;
