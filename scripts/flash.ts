// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const DAI = "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD";
const contractAddress = "0x8f99E5685a2F28fdB76479a6c9391a8228e7ce4F";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Flash = await ethers.getContractFactory("loaner");
  const flash = await Flash.attach(contractAddress);

  await flash.flashloanSingle(DAI);

  console.log("flash deployed to:");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
