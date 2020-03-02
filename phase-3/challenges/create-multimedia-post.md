# Create a poll post
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first multimedia post** you create. No tokens will be awarded for later posts.  
:::

With version `v0.3.0` along with poll, we've also implemented the possibility of creating posts containing multimedia files. Such files can be images, GIFs or even other file types.  

## Creating your first multimedia post
Creating a multimedia post is very similar to [creating a plain text post](../../phase-1/create-post.md). The only difference is that you need to perform an additional step: uploading the multimedia file you want to attach to the post to IPFS. 

To do so, you can use our [IPFS Web UI](). Uploading a multimedia file with it it's pretty straightforward: 

<!-- TODO: Add screens and guide -->

1. ...
2. ...
3. ...

Once you have obtained the IPFS hash of the file, to create a multimedia post you can use the following command

```bash
desmoscli tx posts create "<Subspace>" "<Message>" true \
  --media '<URI,MimeType>" \
  --chain-id morpheus-3000 \
  --from <your-key-name> --yes 
```

Each media should be specified independently using the `--media` flag, which must be a string composed of two parts: 

1. The first, being the URI that identifies the multimedia file. In our case it will be the IPFS link. 
2. The second being the MimeType of the multimedia file. 

An example of such command is: 

```bash
desmoscli tx posts create "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e" "I am Batman!" false \
  --media "https://ipfs.desmos.network/ipfs/QmPWWWaqkXQ5ub96r6Hz7dsYUZXuaEnwe14cEsyGfwfsCD,image/jpeg" \
  --chain-id morpheus-3000 \
  --from jack --yes
```

Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: C5375D02CDA05AFC3B8381CCFBF02E34C3448CA0C9264B17EC0E123E403BBE3B
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
desmoscli query tx <hash> --chain-id morpheus-3000 --output json

# Example
# desmoscli query tx C5375D02CDA05AFC3B8381CCFBF02E34C3448CA0C9264B17EC0E123E403BBE3B --output json
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
   echo "<tx-hash>" >> ./phase-3/challenges/multimedia/<your-github-name>
   
   # Example
   # echo "C5375D02CDA05AFC3B8381CCFBF02E34C3448CA0C9264B17EC0E123E403BBE3B" >> ./phase-3/challenges/multimedia/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
