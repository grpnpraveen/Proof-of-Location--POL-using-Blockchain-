// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract POL{

    struct LocationAndTime{
        string lat;
        string lng;
        uint timeStamp;
    }

    // ! storing only the latest location of the user according to the wallet
    mapping (address => LocationAndTime) userLocationData;
   
    function addUserLocation(string memory Lat, string memory Lng) public 
    {
        LocationAndTime memory tempLT;
        tempLT.lat=Lat;
        tempLT.lng=Lng;
        tempLT.timeStamp=block.timestamp;
        userLocationData[msg.sender]=tempLT;
    } 

    function getLocation(address user) public view returns (LocationAndTime memory) {
        return userLocationData[user];
    }

}


