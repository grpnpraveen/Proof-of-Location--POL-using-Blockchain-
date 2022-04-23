package com.example.web3jcheck

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import org.web3j.crypto.Credentials
import org.web3j.protocol.Web3jFactory
import org.web3j.protocol.infura.InfuraHttpService
import java.math.BigInteger
import com.example.web3jcheck.Contracts.ContractWrapper.Greeter_sol_Greeter



class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // code related to smart contract wrapper class

        // * contract address
        val contractAddress = "0x8394cDf176A4A52DA5889f7a99c4f7AD2BF59088"
        // end point url provided by infura
        val url = "https://rinkeby.infura.io/v3/711fcdb78cef4724abfdb8a2bd4c3623"

        // web3j infura instance
        val web3j = Web3jFactory.build(InfuraHttpService(url))
        //gas limit
        val gasLimit:BigInteger = BigInteger.valueOf(20_000_000_000L)
        val gasPrice:BigInteger = BigInteger.valueOf(4300000)
        val credentials = Credentials.create("711fcdb78cef4724abfdb8a2bd4c36235fce3cc78c09486aa8700f09adf0aeab")

        // getting an object with functions of smart contract
        val greeter = Greeter_sol_Greeter.load(contractAddress,web3j,credentials,gasLimit,gasPrice)


    }
}