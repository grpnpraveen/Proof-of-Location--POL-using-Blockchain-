// ? deploying the compiled smart contract to rinkeby test network
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

// setting up the HDWalletProvider
// @param 1: metamask wallet account mnemonic
// @param 2: API link of infura , for deploying in rinkeby test network
const provider = new HDWalletProvider("WALLET_MNEMONIC", "INFURA_URL");

// ! need to provider for web3
const web3 = new Web3(provider);

const deploy = async () => {
    // get accounts
    const fetchedAccounts = await web3.eth.getAccounts();
    console.log(
        `Deploying smart contract through ${fetchedAccounts[0]} to rinkeby test network`
    );
    // deploy the compiled smart contract
    const result = await new web3.eth.Contract(abi)
        .deploy({
            data: evm.bytecode.object,
        })
        .send({
            from: fetchedAccounts[0],
            gas: "1000000",
        });

    console.log(
        `Deployed address of smart contract : ${result.options.address}`
    );

    console.log(`ABI : ${abi}`);
    // prevent deployment from hanging in the terminal
    provider.engine.stop();
};
deploy();
