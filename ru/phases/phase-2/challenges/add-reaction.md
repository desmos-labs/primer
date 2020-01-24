# Add a reaction to post
:::tip Note  
You will learn **30 Desmos Tokens** upon completion of this challenge.  

Please note that you will only receive the reward **for the first reaction** you make. No rewards will be given for later reactions.  
:::  

With the latest Desmos software upgrade, we have replaced the "Like" action with the "Reaction" one. This allows you to express a larger set of emotions regarding a post.  

## Adding your first reaction
:::warning Desmos executable required  
Make sure you've followed the [setup instructions](../README.md#Setup) properly before going further.  
:::

To add a reaction to a post, the procedure is really easy.

The first thing that you need to do is to find a post that you want to react to. To do so you can use our [explorer](https://morpheus.desmos.network) and browse though all the posts. Once you have find the one that you prefer, note its ID number. 

Once you have the ID number of a post you would like to react to, open a new terminal window and execute the following command: 

```bash
desmoscli tx posts add-reaction <post-id> <reaction> --from <your-key-name>

# Example
# desmoscli tx posts add-reaction 52 :+1: --from jack
```  

Note that you can also use emojis while adding reactions, so the following command is valid too:

```bash
# Example
# desmoscli tx posts add-reaction 52 👍 --from jack
```

You will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: BFA3D9E508F1978135CB99AD07B975AB475AF8DD796C22D1B0984863B0ADACA9
code: 0
data: ""
rawlog: '[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"add_post_reaction"}]}]}]'
logs:
- msgindex: 0
  success: true
  log: ""
  events:
  - type: message
    attributes:
    - key: action
      value: add_post_reaction
info: ""
gaswanted: 0
gasused: 0
codespace: ""
tx: null
timestamp: ""
events: []
```

To make sure the transaction has been processed successfully, you can query it using the following command: 

```bash
desmoscli query tx <hash> --output json

# Example
# desmoscli query tx BFA3D9E508F1978135CB99AD07B975AB475AF8DD796C22D1B0984863B0ADACA9 --output json
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

4. Create a file named after your GitHub username containing the post reaction transaction hash:  
   ```bash
   echo "<tx-hash>" >> ./phases/phase-2/challenges/reactions/<your-github-name>
   
   # Example
   # echo "BFA3D9E508F1978135CB99AD07B975AB475AF8DD796C22D1B0984863B0ADACA9" >> ./phases/phase-2/challenges/reactions/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know to to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).