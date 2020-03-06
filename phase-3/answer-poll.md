# Answer a poll
:::tip Rewards  
Upon completing this challenge, you will be rewarded **10 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first answer** you insert. No tokens will be awarded for later answers.  
:::

Along with [polls](create-poll.md), with Desmos `v0.3.0` we've also implemented the possibility of answering those polls using a different transaction. In the end, what sense would have to support polls but not being able to answer them? 

## Answering your first poll
To answer a poll, the procedure is really easy.

The first thing that you need to do is to find a post that you want to answer to. To do so you can use our [explorer](https://morpheus.desmos.network) and browse though all the posts that contain a poll. Once you have find the one that you prefer, write down its ID number. 

To be 100% sure that post has a poll inside, you can query its details by executing the following command: 

```
desmoscli query posts <ID> --chain-id morpheus-3000

# E.g.
# desmoscli query posts post 1 --chain-id morpheus-3000 --output text
```

If the output contains the `polldata` object, that post contains a poll. 

Once you have the ID number of a post you would like to react to, open a new terminal window and execute the following command: 

```bash
desmoscli tx posts answer-poll <Poll ID> <Answer IDs...> \
  --from <your_key> --yes --chain-id morpheus-3000

# Example
# desmoscli tx posts answer-poll 2 0 --from jack --yes --chain-id morpheus-3000
```  

You will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: 286D943499C2A235801C7E5B342EDB9467A64BED8E00765656CA6F2305F277E7
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
# desmoscli query tx 286D943499C2A235801C7E5B342EDB9467A64BED8E00765656CA6F2305F277E7 --trust-node --output json
``` 

This will return you the JSON representation of the transaction itself.

## Getting the reward 
After you have added your first reaction, please follow the steps below to claim your reward: 

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

4. Create a file named after your GitHub username containing the post answering transaction hash:  
   ```bash
   echo "<tx-hash>" >> ./phase-3/challenges/answers/<your-github-name>
   
   # Example
   # echo "286D943499C2A235801C7E5B342EDB9467A64BED8E00765656CA6F2305F277E7" >> ./phase-3/challenges/answers/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
