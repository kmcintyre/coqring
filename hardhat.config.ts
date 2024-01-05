import "@nomicfoundation/hardhat-toolbox";
import { task } from "hardhat/config"
//import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

// When using the hardhat network, you may choose to fork Fuji or Avalanche Mainnet
// This will allow you to debug contracts using the hardhat network while keeping the current network state
// To enable forking, turn one of these booleans on, and then run your tasks/scripts using ``--network hardhat``
// For more information go to the hardhat guide
// https://hardhat.org/hardhat-network/
// https://hardhat.org/guides/mainnet-forking.html
const FORK_FUJI = false
const FORK_MAINNET = false
const forkingData = FORK_FUJI ? {
  url: 'https://api.avax-test.network/ext/bc/C/rpc',
} : FORK_MAINNET ? {
  url: 'https://api.avax.network/ext/bc/C/rpc'
} : undefined

task("block", "Prints the current block", async (args, hre): Promise<void> => {
    const block = await hre.ethers.provider.getBlock("latest")
    console.log(block)
})

// task("accounts", "Prints the list of accounts", async (args, hre): Promise<void> => {
//   const accounts: SignerWithAddress[] = await hre.ethers.getSigners()
//   accounts.forEach((account: SignerWithAddress): void => {
//     console.log(account.address)
//   })
// })

// task("balances", "Prints the list of AVAX account balances", async (args, hre): Promise<void> => {
//   const accounts: SignerWithAddress[] = await hre.ethers.getSigners()
//   for(const account of accounts){
//     const balance: BigInt = await hre.ethers.provider.getBalance(
//       account.address
//     );
//     console.log(`${account.address} has balance ${balance.toString()}`);
//   }
// })

export default {
 
  solidity: "0.8.20",

  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, //Only specify a chainId if we are not forking
      forking: forkingData
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: []
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: []
    }
  }  
};
