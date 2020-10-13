# Block and unblock a user
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first block and unblock** you create. No tokens will be awarded for later blocks/unblocks.
:::

Starting from version `v0.12.0`, you can now block and unblock users.

## Blocking and unblocking your first user
:::tip Requirements  
To block or unblock a user, you will need their address.  
:::

### Blocking a user
To block a user, you have to use the following command:

```shell
desmoscli tx relationships block <User address> <Subspace> <(Optional) Reason> \
  --from <your-key-name> --yes \
  --chain-id <chain-id>
```

Here's an example of such command: 

```shell
desmoscli tx relationships block \
  desmos1j2hyp3mzrxfhdkxzyvyqw9atu2s3smt89mklxs \
  4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e \
  "I don't like you" \
  --from jack --yes \
  --chain-id morpheus-10000
```

Once you run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

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

### Unblocking a user
To unblock a user, you have to use the following command:

```shell
desmoscli tx relationships unblock <User address> <Subspace> \
  --from <your-key-name> --yes \
  --chain-id <chain-id>
```

Here's an example of such command: 

```shell
desmoscli tx relationships unblock \
  desmos1j2hyp3mzrxfhdkxzyvyqw9atu2s3smt89mklxs \
  4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e \
  --from jack --yes \
  --chain-id morpheus-10000
```

Once you run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

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

## Getting the reward 
:::warning Two transactions required  
To get this challenge's reward, you need to submit **two** transaction hashes, and not only one. One needs to be the one returned after you blocked a user, and the other one after you unblocked a user.  
Failing to provide either one of the two will result in **no rewards** given.  
:::

After you've blocked and unblocked a user, to make sure you receive your reward please follow this procedure: 

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

4. Create a file named after your GitHub username containing the first transaction hash:  
   ```bash
   echo "<tx-hash>" >> ./phase-6/submissions/block-user/<your-github-name>
   
   # Example
   # echo "E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290" >> ./phase-6/submissions/block-user/RiccardoM
   ```
   
5. Create a file named after your GitHub username containing the second transaction hash:  
   ```bash
   echo "<tx-hash>" >> ./phase-6/submissions/unblock-user/<your-github-name>
   
   # Example
   # echo "E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290" >> ./phase-6/submissions/unblock-user/RiccardoM
   ```

6. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
