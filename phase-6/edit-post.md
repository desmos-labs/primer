# Edit a post's attachments and poll
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first post** you edit. No tokens will be awarded for later posts.
:::

With version `v0.12.0` we've implemented the ability for users to edit posts' attachments and polls. 

## Editing your first post with some attachments and a poll
### Creating the post
Before editing a post and its attachments and poll data, we need to create one. You can do so by running the following command:

The command will then look like this: 

```bash
desmoscli tx posts create "<Subspace>" \
  --poll-details "question=<Question>,mutiple-answers=<true/false>,allows-answer-edits=<true/false>,end-date=<Poll ending date>" \
  --poll-answer <First answer> \
  --poll-answer <Second answer> \
  ...
  --attachment "<URL>,<Mime type>" \
  --attachment "<URL>,<Mime type>" \
  ...
  --from <your-key-name> --yes \
  --chain-id <chain-id>
```

Here's an example of such command: 

```bash
desmoscli tx posts create 4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e \
  --poll-details "question=Which dog do you prefer?,multiple-answers=false,allows-answer-edits=true,end-date=2021-01-01T15:00:00.000Z" \
  --poll-answer "Beagle" \
  --poll-answer "Pug" \
  --poll-answer "German Sheperd" \
  --attachment "https://www.w3schools.com/w3css/img_lights.jpg,image/jpeg" \
  --from jack --yes \
  --chain-id morpheus-10000
```

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

### Editing the post
Now that the post has been created, we can edit it.

To do so, we can use the following command: 

```bash
desmoscli tx posts edit "<Post ID>" \
  --poll-details "question=<Question>,mutiple-answers=<true/false>,allows-answer-edits=<true/false>,end-date=<Poll ending date>" \
  --poll-answer <First answer> \
  --poll-answer <Second answer> \
  ...
  --attachment "<URL>,<Mime type>" \
  --attachment "<URL>,<Mime type>" \
  ...
  --from <your-key-name> --yes \
  --chain-id <chain-id>
```

Here's an example of such command: 

```shell
desmoscli tx posts edit 19de02e105c68a60e45c289bff19fde745bca9c63c38f2095b59e8e8090ae1af \
  --poll-details "question=Which dog do you prefer?,multiple-answers=false,allows-answer-edits=true,end-date=2021-01-01T15:00:00.000Z" \
  --poll-answer "Beagle" \
  --poll-answer "Pug" \
  --poll-answer "Poodle" \
  --attachment "https://www.w3schools.com/w3css/img_forest.jpg,image/jpeg" \
  --from jack --yes \
  --chain-id morpheus-10000
```

:::tip Getting your post ID  
In order to get the id of the post you previously created, you have two options: 

1. Using the CLI and the following command:    
   ```shell
   desmoscli q posts posts \
     --creator=$(desmoscli keys show <your-key-name> --address)
   ```
   
2. Using our [REST APIs](http://lcd.morpheus.desmos.network:1317/posts).  
:::

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

## Getting the reward 
After you've edited a post, to make sure you receive your reward please follow this procedure: 

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
   echo "<tx-hash>" >> ./phase-6/submissions/edit-post/<your-github-name>
   
   # Example
   # echo "E4920B61BFCFB935124FFC22BC04C1D5619943B138C87913E6EBCF2B5E892290" >> ./phase-6/submissions/edit-post/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
