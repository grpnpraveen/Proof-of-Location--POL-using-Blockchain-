import web3 from "./web3";

const ADDRESS = "0x8D4c705e9AE614F8606A35579d1ee47Bf1A40583";
const ABI = [
    {
        inputs: [
            { internalType: "string", name: "Lat", type: "string" },
            { internalType: "string", name: "Lng", type: "string" },
        ],
        name: "addUserLocation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "user", type: "address" }],
        name: "getLocation",
        outputs: [
            {
                components: [
                    { internalType: "string", name: "lat", type: "string" },
                    { internalType: "string", name: "lng", type: "string" },
                    {
                        internalType: "uint256",
                        name: "timeStamp",
                        type: "uint256",
                    },
                ],
                internalType: "struct POL.LocationAndTime",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

// creating an instance of the contract
export default new web3.eth.Contract(ABI, ADDRESS);
