# Report a post
:::tip Rewards  
Upon completing this challenge, you will be rewarded **25 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first post** you report. No tokens will be awarded for later reports.
:::

With version `v0.6.0` we've implemented the ability for users to report abusive posts. 

## Create your first report
Reporting a post is pretty simple; all you have to provide is:

1. the `id` of the post to be reported; 
2. the `type` of the report to create;
3. the `message` of the report.

In order to see a list of posts and get one id of a post to report, what you can do is either: 

1. go inside the [Morpheus block explorer](https://morpheus.desmos.network/transactions) and look at the transactions; 
2. or [query the LCD for the existing posts](http://lcd.morpheus.desmos.network:1317/posts).

To report a post, all you have to do is execute the following command:

```bash
desmoscli tx reports create <post-id> <report-type> <report-message> \
  --chain-id morpheus-7001 \
  --from <your-key-name> --yes
```

Here's an example of such command: 

```bash
desmoscli tx reports create dc09b4e6fa1303ce484eed24a09d9d5758a6b1708bc9b3ffeb37f5e747d0e348 scam "this post is a scam" \
  --chain-id morpheus-7001 \
  --from jack --yes
```

Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: C43F94C2CF53473BD50F5B525CEABB4A3A20B7427E63207DDAF253A951444EFB
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
# desmoscli query tx C43F94C2CF53473BD50F5B525CEABB4A3A20B7427E63207DDAF253A951444EFB \
  --trust-node --output json
``` 

This will return you the JSON representation of the transaction itself.

## Getting the reward 
After you've created the post, to make sure you receive your reward please follow this procedure: 

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
   echo "<tx-hash>" >> ./phase-5/submissions/reports/<your-github-name>
   
   # Example
   # echo "C43F94C2CF53473BD50F5B525CEABB4A3A20B7427E63207DDAF253A951444EFB" >> ./phase-5/submissions/reports/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
