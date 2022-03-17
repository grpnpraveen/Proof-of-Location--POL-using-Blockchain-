const assert =require("assert");
const ganache =require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

let contractData=require("../compile");
let abi = contractData["abi"];
let bytecode=contractData.evm["bytecode"].object;

// contract testing
let accounts;
let App;

beforeEach(async ()=>{
    // get a list of accounts in ganache test network
    accounts = await web3.eth.getAccounts();
    // use one of the account to
    //deploy
    App=  await new web3.eth.Contract(abi   )
    .deploy({data: bytecode})
    .send({from : accounts[0],gas:'1000000'})
});

describe("Proof of Location",()=>{

    it("is deployed",()=>{
      
       assert.ok(App.options.address);  
       
    });

    it("can add new User Location",async ()=>{
      const msg = await App.methods.addUserLocation("1","2").send({from : accounts[0]});
      assert(msg);
    });
    it("can store Latitude",async()=>{
        const msg = await App.methods.addUserLocation("1","2").send({from : accounts[0]});
        const lctn = await App.methods.getLocation(accounts[0]).call();
        assert.equal(lctn.lat,"1");
    })
    it("can store Longitude",async()=>{
        const msg = await App.methods.addUserLocation("1","2").send({from : accounts[0]});
        const lctn = await App.methods.getLocation(accounts[0]).call();
        
        assert.equal(lctn.lng,"2");
    })
});