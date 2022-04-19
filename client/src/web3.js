import Web3 from "web3";

// * requesting the provider that is injected by the metamask
window.ethereum.request({ method: "eth_requestAccounts" });

// * providing our app's web3 with the provider from metamask injection
const web3 = new Web3(window.ethereum);

// named export
export default web3;
