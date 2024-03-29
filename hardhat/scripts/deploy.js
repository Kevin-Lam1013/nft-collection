const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipdf://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5";

  /**
   * DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
   * so lw3PunksContract here is a factory for instances of ou LW3Punks contract.
   */
  const lw3PunksContract = await hre.ethers.deployContract("LW3Punks", [
    metadataURL,
  ]);
  await lw3PunksContract.waitForDeployment();
  console.log("LW3Punks deployed to : ", lw3PunksContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
