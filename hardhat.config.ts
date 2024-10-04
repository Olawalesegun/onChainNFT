import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  },

  etherscan: {
    apiKey: process.env.PRIVATE_KEY,
    customChains: [
      {
          network: "lisk-sepolia",
          chainId: 4202,
          urls: {
              apiURL: "https://sepolia-blockscout.lisk.com/api",
              browserURL: "https://sepolia-blockscout.lisk.com"
          }
      }
    ]
  },
  sourcify: {
    enabled: false
  },
  
  
};

export default config;



// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
// import * as dotenv from "dotenv";
// dotenv.config();

// const config: HardhatUserConfig = {
//   solidity: "0.8.24",
//   networks: {
//     // for testnet
//     "sepolia": {
//       url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
//       accounts: [process.env.PRIV_KEY!],
//       gasPrice: 1000000000,
//     },
//   }
// };

// export default config;
