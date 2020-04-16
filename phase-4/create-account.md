# Create a poll post
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**.  
:::

With version `v0.4.0` along with reactions registration, we've also implemented the possibility of creating your own personal profile that will keep allow you to associate a human readable moniker and other information to your address.  

## Creating your account
Creating an account is very simple: all you are required to specify is a moniker, a human readable name that will identify you uniquely inside the Desmos ecosystem. 

While creating an account you can also specify other optional things such as: 

- your name
- your surname
- a small biography
- a profile picture
- a profile cover

Once you have decided which info you want to make public, you can create your account by running the following command:

```bash
desmoscli tx profile create "<Moniker>" \
  --name "<Name>" \
  --surname "<Surname>" \
  --bio "<Bio>" \
  --picture "<Profile pic URI>" \
  --cover "<Cover pic URI>" \
  --from <your-key-name> --yes 
``` 

An example of such command is: 

```bash
desmoscli tx profile create "riccardo.montagnin" \
  --name "Riccardo" \
  --surname "Montagnin" \
  --bio "Desmos developer" \
  --picture "https://example.com/profile.jpg" \
  --cover "https://example.com/cover.jpg" \
  --from jack --yes
```

Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: 82DC880CA8FF1054B4CDC2443D83C460A4F99BAD94E5C63C45F5D57445ADFE49
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
# desmoscli query tx 82DC880CA8FF1054B4CDC2443D83C460A4F99BAD94E5C63C45F5D57445ADFE49 --trust-node --output json
``` 

This will return you the JSON representation of the transaction itself.

## Getting the reward 
After you've created a multimedia post, to make sure you receive your reward please following this procedure: 

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

4. Create a file named after your GitHub username containing the post creation transaction hash:  
   ```bash
   echo "<tx-hash>" >> ./phase-4/submissions/accounts/<your-github-name>
   
   # Example
   # echo "82DC880CA8FF1054B4CDC2443D83C460A4F99BAD94E5C63C45F5D57445ADFE49" >> ./phase-4/submissions/accounts/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
