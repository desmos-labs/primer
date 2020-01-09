# Create a post
:::tip Note  
Upon completing this challenge, you will be rewarded **20 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first post** you create. No tokens will be awarded for later posts.  
:::

Inside Desmos, posts are the way that users have to share publicly whatever they want. 

You can see posts much like tweets on Twitter, as they have the same functionality: they allow you to write what you wish (without any length limitation) and they are publicly visible to all the Desmos users.  

The only difference with tweets is that once you've created a Desmos post you will **not** be able to delete it! This is due to the blockchain's intrinsic characteristic of being immutable: each transaction that is performed cannot be undone.      

## Creating your first post
After you've followed the [setup](../setup/README.md) and you've created your Desmos account using the `desmoscli keys` command, you are ready to create your first post. To do so, run the following command: 

```bash
desmoscli tx posts create "<Message>" true --from <your-key-name> --yes 

# Example
# desmoscli tx posts create "Hello world!" true --from jack --yes
```

You will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231
code: 0
data: ""
rawlog: '[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"create_post"}]}]}]'
logs:
- msgindex: 0
  success: true
  log: ""
  events:
  - type: message
    attributes:
    - key: action
      value: create_post
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
# desmoscli query tx 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231 --output json
``` 

This will return you the JSON representation of the transaction itself.

:::tip Hello world!  
Congratulations! You've just created your first Desmos post!   
::: 

## Getting the reward 
After you've created a post, to make sure you receive your reward please following this procedure: 

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```bash
   git clone https://github.com/<your-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```

3. Create a file named after your GitHub username containing the post creation transaction hash:  
   ```bash
   echo "<tx-hash>" >> ./phases/phase-1/challenges/posts/<your-github-name>
   
   # Example
   # echo "89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231" >> ./phases/phase-1/challenges/posts/RiccardoM
   ```

4. Commit the changes, push them to your forked repo and create a pull request. If you do not know to to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).