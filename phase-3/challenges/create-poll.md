# Create a poll post
:::tip Rewards  
Upon completing this challenge, you will be rewarded **100 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first poll post** you create. No tokens will be awarded for later posts.  
:::

With version `v0.3.0` we've implemented the possibility for users to create poll posts, which allow to easily know what other Desmos users think about a specific question. 

## Creating your first poll
After you've followed the [setup](setup/README.md) and you've created your Desmos account using the `desmoscli keys` command, you are ready to create your first poll posts. To do so, run the following command: 

```bash
desmoscli tx posts create "<Subspace>" "<Message>" true \
  --poll-details "question=<Question>,mutiple-answers=<true/false>,allows-answer-edits=<true/false>,end-date=<Poll ending date>" \
  --poll-answer <First answer> \
  --poll-answer <Second answer> \
  ...
  --from <your-key-name> --yes 
  --chain-id <chain-id>
```

Before seeing an example of such command, let's see what all the different parts of it do: 

- `--poll-details` allows you to specify the details of the polls. It must contain the following data: 
   - `question`: the question of the poll
   - `date`: the end date of your poll after which no further answers will be accepted, in [RFC3339 format](https://tools.ietf.org/html/rfc3339).
   - `multiple-answers`: a boolean indicating the possibility of multiple answers from users
   - `allows-answers-edits`: a boolean value that indicates the possibility to edit the answers in the future
   
- `--poll-answer`, which indicates a provided answer of the poll.  
   Each answer should be provided using the `--poll-answer` command. 

Here's an example of such command: 

```bash
desmoscli tx posts create "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e" "Post with poll" true \
  --poll-details "question=Which dog do you prefer?,multiple-answers=false,allows-answer-edits=true,end-date=2020-03-01T15:00:00.000Z" \
  --poll-answer "Beagle" \
  --poll-answer "Pug" \
  --poll-answer "German Sheperd" \
  --from jack --yes 
  --chain-id morpheus-3000
```

Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: 0AC2DE8ABBBA27AC2C1C83E2D3070B426E3D8BB67589C8C4A6804A31516F4AA9
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
desmoscli query tx <hash> --output json --chain-id morpheus-3000

# Example
# desmoscli query tx 0AC2DE8ABBBA27AC2C1C83E2D3070B426E3D8BB67589C8C4A6804A31516F4AA9 --output json --chain-id morpheus-3000
``` 

This will return you the JSON representation of the transaction itself.

## Getting the reward 
After you've created a poll, to make sure you receive your reward please following this procedure: 

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
   echo "<tx-hash>" >> ./phase-3/challenges/polls/<your-github-name>
   
   # Example
   # echo "0AC2DE8ABBBA27AC2C1C83E2D3070B426E3D8BB67589C8C4A6804A31516F4AA9" >> ./phase-3/challenges/polls/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
