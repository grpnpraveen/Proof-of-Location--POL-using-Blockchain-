package com.example.web3jcheck.Contracts.ContractWrapper;

import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.RemoteFunctionCall;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.ContractGasProvider;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 1.4.1.
 */
@SuppressWarnings("rawtypes")
public class Greeter_sol_Greeter extends Contract {
    public static final String BINARY = "608060405234801561001057600080fd5b5060405161040d38038061040d83398101604052805160008054600160a060020a03191633600160a060020a031617905501805161005590600190602084019061005c565b50506100f7565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061009d57805160ff19168380011785556100ca565b828001600101855582156100ca579182015b828111156100ca5782518255916020019190600101906100af565b506100d69291506100da565b5090565b6100f491905b808211156100d657600081556001016100e0565b90565b610307806101066000396000f3006080604052600436106100565763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166341c0e1b5811461005b578063cfae321714610072578063d28c25d4146100fc575b600080fd5b34801561006757600080fd5b50610070610155565b005b34801561007e57600080fd5b50610087610196565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100c15781810151838201526020016100a9565b50505050905090810190601f1680156100ee5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561010857600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261007094369492936024939284019190819084018382808284375094975061022c9650505050505050565b6000543373ffffffffffffffffffffffffffffffffffffffff908116911614156101945760005473ffffffffffffffffffffffffffffffffffffffff16ff5b565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156102215780601f106101f657610100808354040283529160200191610221565b820191906000526020600020905b81548152906001019060200180831161020457829003601f168201915b505050505090505b90565b805161023f906001906020840190610243565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061028457805160ff19168380011785556102b1565b828001600101855582156102b1579182015b828111156102b1578251825591602001919060010190610296565b506102bd9291506102c1565b5090565b61022991905b808211156102bd57600081556001016102c75600a165627a7a72305820b5626e18344059190e7f582efe7cd2e11c33eff61a44492083314773451f82030029";

    public static final String FUNC_KILL = "kill";

    public static final String FUNC_GREET = "greet";

    public static final String FUNC_CHANGEGREETING = "changeGreeting";

    @Deprecated
    protected Greeter_sol_Greeter(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected Greeter_sol_Greeter(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, credentials, contractGasProvider);
    }

    @Deprecated
    protected Greeter_sol_Greeter(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected Greeter_sol_Greeter(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public RemoteFunctionCall<TransactionReceipt> kill() {
        final Function function = new Function(
                FUNC_KILL, 
                Arrays.<Type>asList(), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<String> greet() {
        final Function function = new Function(FUNC_GREET, 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteFunctionCall<TransactionReceipt> changeGreeting(String _greeting) {
        final Function function = new Function(
                FUNC_CHANGEGREETING, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_greeting)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    @Deprecated
    public static Greeter_sol_Greeter load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new Greeter_sol_Greeter(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    @Deprecated
    public static Greeter_sol_Greeter load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new Greeter_sol_Greeter(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static Greeter_sol_Greeter load(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return new Greeter_sol_Greeter(contractAddress, web3j, credentials, contractGasProvider);
    }

    public static Greeter_sol_Greeter load(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return new Greeter_sol_Greeter(contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public static RemoteCall<Greeter_sol_Greeter> deploy(Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider, String _greeting) {
        String encodedConstructor = FunctionEncoder.encodeConstructor(Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_greeting)));
        return deployRemoteCall(Greeter_sol_Greeter.class, web3j, credentials, contractGasProvider, BINARY, encodedConstructor);
    }

    public static RemoteCall<Greeter_sol_Greeter> deploy(Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider, String _greeting) {
        String encodedConstructor = FunctionEncoder.encodeConstructor(Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_greeting)));
        return deployRemoteCall(Greeter_sol_Greeter.class, web3j, transactionManager, contractGasProvider, BINARY, encodedConstructor);
    }

    @Deprecated
    public static RemoteCall<Greeter_sol_Greeter> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit, String _greeting) {
        String encodedConstructor = FunctionEncoder.encodeConstructor(Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_greeting)));
        return deployRemoteCall(Greeter_sol_Greeter.class, web3j, credentials, gasPrice, gasLimit, BINARY, encodedConstructor);
    }

    @Deprecated
    public static RemoteCall<Greeter_sol_Greeter> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit, String _greeting) {
        String encodedConstructor = FunctionEncoder.encodeConstructor(Arrays.<Type>asList(new org.web3j.abi.datatypes.Utf8String(_greeting)));
        return deployRemoteCall(Greeter_sol_Greeter.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, encodedConstructor);
    }
}
