# Change your DTag
:::tip Rewards  
Upon completing this challenge, you will be rewarded **25 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first DTag change** you do. No tokens will be awarded for later changes.
:::

With version `v0.12.0` we've implemented the function that allows you to change your previously set DTag. 

## Changing your DTag
:::tip Requirements  
To change a DTag, first you need to create a profile. To do so, please refer to the [profile creation process](../phase-5/create-update-profile.md#creating-your-account).  
:::

To change your DTag, all you have to do is edit your profile specifying a new DTag value:

```shell
desmoscli tx profiles save <DTag> \
  --from <your-key-name> --yes \
  --chain-id <chain-id>
```

Here's an example of such command: 

```shell
desmoscli tx profiles save MyNewDTag \
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
After you've change your DTag, to make sure you receive your reward please follow this procedure: 

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

4. Create a file named after your GitHub username containing the transaction hash:  
   ```bash
   echo "<tx-hash>" >> ./phase-6/submissions/change-dtag/<your-github-name>
   
   # Example
   # echo "E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290" >> ./phase-6/submissions/change-dtag/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
