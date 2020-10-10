# Transfer your DTag to another user
:::tip Rewards  
Upon completing this challenge, you will be rewarded **100 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first transfer** you perform. No tokens will be awarded for later transfers.
:::

With version `v0.12.0` we've implemented the ability for users to exchange between them their DTags.

## Exchanging your DTag
:::warning Requirements  
In order to be able to complete this challenge you will need: 

1. A profile with a DTag properly set. 
2. A friend with which to share your DTag that will need to accept the request **or** a second profile with a DTag set.
  
In the following commands examples we will use two local keys, each one with a profile set to it. If you want to do the same, in order to register a new key use the following command: 

```shell
desmoscli keys add <new-key-name>
```  

:::


### Transfer your DTag
Transferring a DTag is a process composed of two different steps: 

1. Preparing for the transfer by executing a `transfer-dtag` transaction. 
2. Accepting the transferring by performing an `accept-dtag-transfer` transaction. 

So, firstly we need to prepare for the DTag transferring. You can do so by executing the following command:  

```bash
desmoscli tx profiles transfer-dtag <User address> \
  --from <your-key-name> --yes \
  --chain-id <chain-id>
```

The `<User address>` should be the address of the DTag recipient.

Here's an example of such command: 

```bash
desmoscli tx profiles transfer-dtag $(desmoscli keys show alice -a) \
  --from jack --yes \
  --chain-id morpheus-10000
```

In this case, we are transferring the DTag from Jack to Alice.

Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290
codespace: ""
code: 0
data: ""
rawlog: '[]'
logs: []
info: ""
gaswanted: 0
gasused: 0
tx: null
timestamp: ""
```

To make sure the transaction has been processed successfully, you can query it using the following command: 

```bash
desmoscli query tx <hash> --trust-node --output json

# Example
# desmoscli query tx E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290 \
  --trust-node --output json
``` 

This will return you the JSON representation of the transaction itself.

### Accepting the transferring
Once that you started the DTag transferring, the receiving user needs to accept it. To do so, they can use the following command:

```bash
desmoscli tx profiles accept-dtag-transfer <New DTag> <Sender address> \
  --from <their-key-name> --yes \
  --chain-id <chain-id>
```

The `<New DTag>` will be the new DTag that is going to be associated to them once they gave you their current DTag.  
The `<Sender address>` must be the same address of the user that has started the DTag transferring. 

Here's an example of such command: 

```shell
desmoscli tx profiles accept-dtag-transfer \
  "Alice_New" $(desmoscli keys show jack -a) \
  --from alice --yes \
  --chain-id morpheus-10000
```

As you can see, here the transaction is performed by Alice specifying Jack's address as the sender.

Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: E69770F29145C0035461B263F6F52F1636B9679F138ABF230CEFBDA11F8E28EA
codespace: ""
code: 0
data: ""
rawlog: '[]'
logs: []
info: ""
gaswanted: 0
gasused: 0
tx: null
timestamp: ""
```

## Getting the reward 
After you've transferred a DTag, to make sure you receive your reward please follow this procedure: 

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```bash
   git clone https://github.com/<your-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```
   
3. Make sure your fork is up to date with the Primer repository:  
   ```bash
   git remote add upstream https://github.com/desmos-labs/primer.git
   git fetch upstream
   git rebase upstream/master
   ```

4. Create a file named after your GitHub username containing the transactions hashes:  
   ```bash
   echo "<transfer-tx-hash>" >> ./phase-6/submissions/transfer-dtag/<your-github-name>
   echo "<accept-tx-hash>" >> ./phase-6/submissions/transfer-dtag/<your-github-username>
   
   # Example
   # echo "E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290" >> ./phase-6/submissions/transfer-dtag/RiccardoM
   # echo "E69770F29145C0035461B263F6F52F1636B9679F138ABF230CEFBDA11F8E28EA" >> ./phase-6/submissions/transfer-dtag/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
