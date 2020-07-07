# Update your validator node
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**. 
  
Additionally, you will also earn more tokens the longer you keep the node running. To know more about this please reference the [Validators program](validators-program/overview.md).   
  
Please note that we exported the `morpheus-3000` state at height `845,600`. 

However, to allow all validators to have a chance of earning all the tokens by completing this challenge, we will **start counting the precommits from the first block generated after 1st May 2020 00:00 UTC**.  
:::

When a new version of Desmos is released, all validators need to update their node so that it can keep running properly. Following you will find the guide on how you can do this making sure everything is ready for when the new chain starts. 

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
   
4. Verify the validity of the generated `genesis.json` file by running the following commands: 
   ```bash
   jq -S -c -M '' ~/.desmosd/config/genesis.json | shasum -a 256
   ```
   The output should be  
   ```
   dc6bcadf360f037450066bfad89bc54c467810240ac93a317bf5f26cab80079f  -
   ```
   
5. Reset your node to make sure everything is ready:  
   ```bash
   desmosd unsafe-reset-all
   ``` 
   
6. Open up the `config.toml` file:
   ```bash
   nano $HOME/.desmosd/config/config.toml
   ```
   
7. Locate the `persistent_peers = ` text at line 164 and change the **whole line** to be: 
   ```
   persistent_peers = "7fed5624ca577eb0333d3631b5e4f16ba1736979@54.180.98.75:26656,e30d9bb713d17d1e4380b2e2a6df4b5c76c73eb1@34.212.106.82:26656"
   ``` 
   
8. Start your new node:  
   ```bash
   sudo systemctl start desmosd
   ```
   
Now you should be able to see your node properly syncing with the other ones by executing: 

```bash
journalctl -n100 -f -u desmosd.service
```

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
