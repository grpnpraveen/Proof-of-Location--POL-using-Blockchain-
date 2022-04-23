package com.example.walletconnectcheck

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.walletconnectcheck.databinding.ActivityMainBinding
import dev.pinkroom.walletconnectkit.WalletConnectKit
import dev.pinkroom.walletconnectkit.WalletConnectKitConfig

class MainActivity : AppCompatActivity() {

    private lateinit var binding : ActivityMainBinding
    private val config by lazy {
        WalletConnectKitConfig(
            context = this,
            // need to know what is this bridge
            bridgeUrl = "wss://bridge.aktionariat.com:8887",
            appUrl = "walletconnectkit.com",
            appName = "WalletConnect Kit",
            appDescription = "This is the Swiss Army toolkit for WalletConnect!"
        )
    }

    private val walletConnectKit by lazy {
        WalletConnectKit.Builder(config).build()
    }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        with(binding){
            walletConnectButton.start(walletConnectKit,::onConnected,::onDisconnected)
        }
    }

    private fun onConnected(address:String){
        Toast.makeText(this,"You are connected with account : $address",Toast.LENGTH_LONG).show()
    }
    private fun onDisconnected(){
        Toast.makeText(this,"Account Disconnected",Toast.LENGTH_LONG).show()
    }
}