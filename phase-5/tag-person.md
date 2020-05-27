# Tag a user inside a post
:::tip Rewards  
Upon completing this challenge, you will be rewarded **50 Desmos Tokens**. 
  
Please note that in order to prevent spam, you will receive the reward just **for the first tagged post** you create. No tokens will be awarded for later posts.
:::

With version `v0.6.0` we've implemented the function that allows users to tag other users inside the medias that they attach to a post. 

## Create your first tag
Tagging a user inside a media is pretty simple; all you have to provide is:

1. a `media` representing the multimedia file that you want to attach to the file;
2. the `address` of the user you want to tag. 

To tag a user, all you have to do is execute the following command:

```bash
desmoscli tx posts create <subspace> \
  --media "<your-media-url>,<your-media-mimetype>,<user-address-to-tag>" \
  --from <your-key-name> --yes
```

Here's an example of such command: 

```bash
desmoscli tx posts create 4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e \
  --media "https://example.com/media1,text/plain,desmos1ulmv2dyc8zjmhk9zlsq4ajpudwc8zjfm82aysr" \
  --from jack --yes
```

Once you've run that command you will be asked to type the password you've chosen during the setup and after having inserted it properly you should see something like this: 

```yml
height: 0
txhash: 7169B8C88150090BF972F865876B3AA8A37DDD01ED4D8320B0FC680877444549
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
desmoscli query tx <hash> --output json

# Example
# desmoscli query tx /sda1/Coding/Desmos/Primer/phase-5/tag-person.md --output json
``` 

This will return you the JSON representation of the transaction itself.

## Getting the reward 
After you've created the post, to make sure you receive your reward please following this procedure: 

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
   echo "<tx-hash>" >> ./phase-5/submissions/tags/<your-github-name>
   
   # Example
   # echo "7169B8C88150090BF972F865876B3AA8A37DDD01ED4D8320B0FC680877444549" >> ./phase-5/submissions/tags/RiccardoM
   ```

5. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
