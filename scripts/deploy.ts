import { ethers } from "hardhat";
const fs = require('fs');
const yaml = require('js-yaml');

const FILENAME = 'subgraph.yaml'
const changeAddress = (address) => {
   let doc = yaml.load(fs.readFileSync(FILENAME, 'utf-8'));
   doc.dataSources[0].source.address = address
   fs.writeFileSync(FILENAME, yaml.dump(doc));
}

async function main() {
    const Storage = await hre.ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed();
    console.log(`Storage contract deployed to ${storage.address}`);
    changeAddress(storage.address)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
