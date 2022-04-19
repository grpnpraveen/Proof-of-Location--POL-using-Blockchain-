const path = require("path");
const fs = require("fs");
const solc = require("solc");
const { stringify } = require("querystring");

const polPath = path.resolve(__dirname, "contracts", "Pol.sol");
const source = fs.readFileSync(polPath, "utf8");

let jsonContractSource = JSON.stringify({
    language: "Solidity",
    sources: {
        "Pol.sol": {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["abi", "evm.bytecode"],
                // here point out the output of the compiled result
            },
        },
    },
});

// console.log(solc.compile(jsonContractSource));
const Task = JSON.parse(solc.compile(jsonContractSource)).contracts["Pol.sol"];
// console.log(JSON.stringify(Task["POL"]["abi"]));
// const contractData=Task["POL"];
// abi = contractData["abi"]
// const bytecode=contractData.evm["bytecode"].object
// console.log(bytecode);
module.exports = Task["POL"];
