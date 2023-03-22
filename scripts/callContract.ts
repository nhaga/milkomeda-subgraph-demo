const hre = require("hardhat");
const yaml = require('js-yaml');
const fs = require('fs');

async function main() {
    const FILENAME = 'subgraph.yaml'
    let doc = yaml.load(fs.readFileSync(FILENAME, 'utf-8'));
    const contractAddress = doc.dataSources[0].source.address;

    const storage = await hre.ethers.getContractAt("Storage", contractAddress);
    const res = await storage.store(5);
    console.log("Trx hash:", res.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });