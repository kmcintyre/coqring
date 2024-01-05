import { ethers } from "hardhat";

async function main() {

  const dumb = await ethers.deployContract("Dumb");
  await dumb.waitForDeployment();

  console.log(
    `deployed Dumb ${dumb.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});