# Level 2 - 50 points
The level 2 challenges will let you have more understandings on how Desmos works and what components it is made of. During these challenges you will be required to perform some operations from the Desmos CLI. If you haven't done so, please follow the [setup guide](../setup/README.md) before continuing. 

Available challenges: 
- [Create a post](#create-a-post)
- [Like a post](#like-a-post)

## Create a post
Inside Desmos, posts are the way that users have to share publicly whatever they want. 

You can see posts much like tweets on Twitter, as they have the same functionality: they allow you to write what you wish (without any length limitation) and they are publicly visible to all the Desmos users.  

The only difference with tweets is that once you've created a Desmos post you will **not** be able to delete it! This is due to the blockchain's intrinsic characteristic of being immutable: each transaction that is performed cannot be undone.      

### Creating your first post
After you've followed the [setup](../setup/README.md) and you've created your Desmos account using the `desmoscli keys` command, you are ready to create your first post. To do so, run the following command: 

```shell
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

```shell
desmoscli query tx <hash> --output json

# Example
# desmoscli query tx 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231 --output json
``` 

This will return you the JSON representation of the transaction itself.

:::tip Hello world!  
Congratulations! You've just created your first Desmos post!   
::: 

### Getting the reward 
After you've created a post, to make sure you receive your reward please following this procedure: 

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```shell
   git clone https://github.com/<your-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```

3. Create a file named after your GitHub username containing the post creation transaction hash:  
   ```shell
   echo "<tx-hash>" >> ./phases/phase-1/challenges/posts/<your-github-name>
   
   # Example
   # echo "89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231" >> ./phases/phase-1/challenges/posts/RiccardoM
   ```

4. Commit the changes, push them to your forked repo and create a pull request. If you do not know to to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Like a post
Likes are Desmos' way for users expressing their appreciation towards an existing post, either created by the post authors or by another users. 

Different from posts, likes can be removed using the _unlike_ transaction. However, once you like a post on the chain a trace will be left forever and clients can decide to ignore unlikes and showing just the original likes. In the end, make sure you really like a post before liking it on Desmos as likes will be forever. 

### Liking a post
#### Retrieving a post id 
To like a post, you will need to know its id. Post ids can be retrieved from creation transactions. 

As an example, let's take the transaction having the following hash and used to create a simple post: 

```
89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231
```

To get the id of the post you can get its JSON representation by running 

```shell
desmoscli query tx 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231 --output json
```

And, using a JSON formatter website or tool, read the `post_id` associated value inside the `events` array. In this case, the id of the created post is `12`. 

#### Performing the like transaction
Once you got the id of a post that you would want to put a like on, you simply have to run the following command: 

```shell
desmoscli tx posts like <post-id> --from <your-key> --yes

# Example 
# desmoscli tx posts like 12 --from jack --yes
```

This should return you something like this: 

```yml
height: 0
txhash: 1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9
code: 0
data: ""
rawlog: '[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"like_post"}]}]}]'
logs:
- msgindex: 0
  success: true
  log: ""
  events:
  - type: message
    attributes:
    - key: action
      value: like_post
info: ""
gaswanted: 0
gasused: 0
codespace: ""
tx: null
timestamp: ""
events: []
```

You can now query the tx result to make sure everything was processed successfully: 

```shell
desmoscli query tx 1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9 --output json
```

### Getting the reward 
After you've created a post, please following this procedure to receive your rewards: 

1. Create a fork of this repo inside your private GitHub profile.  
   If you do not know how to do it, follow the [GitHub fork guide](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

2. Pull the fork locally:  
   ```shell
   git clone https://github.com/<your-name>/primer.git ~/desmos-primer
   cd ~/desmos-primer
   ```

3. Create a file named after your GitHub username containing the like transaction hash:    
   ```shell
   echo "<tx-hash>" >> ./phases/phase-1/challenges/likes/<your-github-name>
   
   # Example
   # echo "1F64E1FDBB2A495E9C6F9AEDFD397B3B55DF0895F0232B558DAED042F3E159C9" >> ./phases/phase-1/challenges/likes/RiccardoM
   ```

4. Commit the changes, push them to your forked repo and create a pull request. If you do not know how to create one, refer to the [GitHub Pull Requests guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).