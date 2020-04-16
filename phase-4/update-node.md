# Update your validator node
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**. 
  
Additionally, you will also earn more tokens the longer you keep the node running. To know more about this please reference the [Validators program](validators-program/overview.md).   
:::

When a new version of Desmos is released, all validators need to update their node so that it can keep running properly. Following you will find the guide on how you can do this making sure everything is ready for when the new chain is started. 

## Quick update
The following guide is based on the genesis file we have already published on our GitHub repository. If you feel comfortable with what we have done, you can follow the below steps. On the other hand, if you want to check that what we have done is correct and not malicious, you can perform a [manual update](#manual-update) instead. 

In order to perform the quick update, execute the following commands. 

1. Stop the running service:   
   ```bash
   sudo systemctl stop desmosd
   ```
   
2. Update the Desmos binaries:  
   ```bash
   cd ~/desmos
   git fetch -a 
   git checkout tags/v0.4.0
   make install
   ```
   
3. Delete the current `genesis.json` file and download the new one:  
   ```bash
   rm ~/.desmosd/config/genesis.json
   curl https://raw.githubusercontent.com/desmos-labs/morpheus/master/genesis.json > ~/.desmosd/config/genesis.json
   ```
   
4. Reset your node to make sure everything is ready:  
   ```bash
   desmosd unsafe-reset-all
   ``` 
   
5. Start your new node:  
   ```bash
   sudo systemctl desmosd start
   ```
   
Now you should be able to see your node properly syncing with the other ones by executing: 

```bash
tail -100f /var/log/syslog
```

## Manual update
If you feel more comfortable into performing a manual update of your node, you can follow the [updating guide on the Desmos Docs website](https://docs.desmos.network/validators/update.html).

If you do not want to export and migrate the chain state by yourself, you can download and use the [genesis file](https://raw.githubusercontent.com/desmos-labs/morpheus/master/genesis.json) of `morpheus-4000` directly. Details of the genesis file can be found at the [Morpheus Testnet repository](https://github.com/desmos-labs/morpheus).

## Getting the reward 
After you have updated your node, please follow the steps below to claim your reward: 

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

4. Create a file named after your GitHub username containing the public key of your validator:  
   ```bash
   echo $(desmoscli keys show <your_key> --bech=val --address) >> ./phase-4/submissions/updates/<your-github-name>
   
   # Example
   # echo $(desmoscli keys show validator_key --bech=val --address) >> ./phase-4/submissions/updates/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
