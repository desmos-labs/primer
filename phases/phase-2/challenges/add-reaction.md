# Add a reaction to post
During the [Phase 1 Like challenge](../../phase-1/challenges/like-post.md) we saw how we could add a like to post to show everyone that we appreciated such post. 

However, we think that "likes" are nowadays not sufficient anymore while expressing our feelings for a post that is made on a social network. It's for this same reason that Facebook implemented other kind of reactions such "Love", "Wow", "Aha", etc.

To solve this issue inside Desmos, we looked at the best system of reactions that in our opinion exists right now: [Slack emoji reactions](https://slack.com/intl/en-it/help/articles/206870317-Use-emoji-reactions). 

Thanks to [Desmos PR #59](https://github.com/desmos-labs/desmos/pull/59) we replaced the old post likes with post reactions, allowing everyone to add a unique reaction to every post. 

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
After you've reacted to a post, to make sure you receive your reward please following this procedure: 

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```bash
   git clone https://github.com/<your-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```
   
3. Make sure your fork is up to date with the Primer repository:  
   ```bash
   git remote add upstream https://github.com/desmos-labs/desmos.git
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