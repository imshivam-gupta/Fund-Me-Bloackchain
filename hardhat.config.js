require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("hardhat-deploy")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      chainId: 1337,
      url: "http://127.0.0.1:7545",
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 11155111,
      blockConfirmation: 6,
    },
    mainnet: {
      url: MAINNET_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 1,
      blockConfirmation: 6,
    },
    polygon: {
      url: POLYGON_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 137,
      blockConfirmation: 6,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  sourcify:{
    enabled: true
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    users:{
      default: 1,
    }
  },
  solidity: {
    compilers: [
        {
            version: "0.8.7",
        },
        {
            version: "0.6.6",
        },
    ],
},
};
