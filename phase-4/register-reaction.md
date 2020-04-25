# Register a reaction
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first reaction** you register. No tokens will be awarded for later reactions.  
:::

With version `v0.4.0` we've implemented the function that allows users to register their own custom reactions that will later be possible to add to posts in order for them to better express themselves.

## Register your first reaction
Registering a reaction is pretty simple: all you have to provide is: 

1. a `shortcode` for the reaction itself;
2. either a `uri` to an external image or and `emoji` as the value of the reaction. 

Shortcodes are short strings that begin and end with a colon (`:`) and identify uniquely a reaction. Some examples could be: 

| Shortcode | Value | 
| :-------- | :------: |
| `:smile:` | 😄 | 
| `:fire:` | 🔥 |
| `:this-is-fine-fire:`  | `shorturl.at/fmLX1` | 

To register a new reaction, all you have to do is execute the following command:

```bash
desmoscli tx posts register-reaction \
  "<Shortcode>" "<Value>" "<Subspace>" \
  --from <your-key-name> --yes
```

Here's an example of such command using an emoji: 

```bash
desmoscli tx posts register-reaction \
  ":fire:" "🔥" "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e" \
  --from jack --yes
```

If you want to use an external image instead, you can execute the following: 

```bash
desmoscli tx posts register-reaction \
  ":this-is-fine-fire:" "https://shorturl.at/fmLX1" "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e" \
  --from jack --yes
```

Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: 93852AA6D37772D0BB5C3200F2A32F4D74E70E15E2C67024AE9F5A9D3506F119
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
# desmoscli query tx 93852AA6D37772D0BB5C3200F2A32F4D74E70E15E2C67024AE9F5A9D3506F119 --trust-node --output json
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
   echo "<tx-hash>" >> ./phase-4/submissions/reactions/<your-github-name>
   
   # Example
   # echo "93852AA6D37772D0BB5C3200F2A32F4D74E70E15E2C67024AE9F5A9D3506F119" >> ./phase-4/submissions/reactions/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
